import React, {
  useState,
  useRef,
  useEffect,
  JSXElementConstructor,
} from 'react';
import { Position } from './dropdownPosition';
import classes from './dropdownMenu.module.css';

type HandlerClickEvent = () => void;

type DropdownMenuChild = React.ReactElement<
  { onClick?: HandlerClickEvent },
  JSXElementConstructor<{ onClick?: HandlerClickEvent }>
>;

interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: DropdownMenuChild[] | DropdownMenuChild;
}

export function DropdownMenu({ trigger, children }: DropdownMenuProps) {
  const [isOpenOnClick, setIsOpenOnClick] = useState(false);
  const [isOpenOnHover, setIsOpenOnHover] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState(
    Position.BottomRight,
  );

  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculatePosition = () => {
    if (!triggerRef.current || !dropdownRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const dropdownRect = dropdownRef.current.getBoundingClientRect();

    const spaceBottom = window.innerHeight - triggerRect.bottom;
    const spaceRight = window.innerWidth - triggerRect.right;

    const spaceTop = triggerRect.top;

    let newPosition: Position;

    if (spaceBottom >= dropdownRect.height || spaceTop < dropdownRect.height) {
      newPosition =
        spaceRight >= dropdownRect.width
          ? Position.BottomRight
          : Position.BottomLeft;
    } else {
      newPosition =
        spaceRight >= dropdownRect.width ? Position.TopRight : Position.TopLeft;
    }

    setDropdownPosition(newPosition);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      triggerRef.current?.offsetParent ===
      (event.target as HTMLElement).offsetParent
    ) {
      return;
    }

    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpenOnClick(false);
    }
  };

  const handleHoverOutside = (event: MouseEvent) => {
    if (event.target !== containerRef.current) {
      setIsOpenOnClick(false);
    }
  };

  const handleTriggerClick = () => {
    setIsOpenOnClick(prevIsOpen => !prevIsOpen);
    setIsOpenOnHover(false);
  };

  const handleMenuItemClick = (callback?: HandlerClickEvent) => {
    if (callback) {
      callback();
    }

    setIsOpenOnHover(false);
    setIsOpenOnClick(false);
  };

  useEffect(() => {
    if (isOpenOnClick || isOpenOnHover) {
      calculatePosition();
      window.addEventListener('scroll', calculatePosition);
      document.addEventListener('mousedown', handleClickOutside);

      const dropdownMenuElements = document.querySelectorAll('#dropdownMenu');

      dropdownMenuElements.forEach(element => {
        element.addEventListener(
          'mouseenter',
          handleHoverOutside as EventListener,
        );
      });
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mouseenter', handleHoverOutside);
      window.removeEventListener('scroll', calculatePosition);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mouseenter', handleHoverOutside);
      window.removeEventListener('scroll', calculatePosition);
    };
  }, [isOpenOnClick, isOpenOnHover]);

  useEffect(() => {
    const triggerElement = triggerRef.current;
    if (!triggerElement) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          dropdownRef.current?.classList.remove(classes.displayNone);
        } else {
          dropdownRef.current?.classList.add(classes.displayNone);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);

    observer.observe(triggerElement);

    return () => {
      observer.unobserve(triggerElement);
    };
  }, []);

  return (
    <div
      className={classes.dropdownMenuContainer}
      id="dropdownMenu"
      ref={containerRef}
      onMouseEnter={() => setIsOpenOnHover(true)}
      onMouseLeave={() => setIsOpenOnHover(false)}>
      <div ref={triggerRef} onClick={handleTriggerClick}>
        {trigger}
      </div>

      {(isOpenOnClick || isOpenOnHover) && (
        <div
          className={classes.dropdownMenu}
          ref={dropdownRef}
          style={{
            top: Position.getTopCoordinate(dropdownPosition),
            bottom: Position.getBottomCoordinate(dropdownPosition),
            left: Position.getLeftCoordinate(dropdownPosition),
            right: Position.getRightCoordinate(dropdownPosition),
          }}>
          {React.Children.map(children, (child, index) => {
            if (child) {
              return React.cloneElement(<div key={index}>{child}</div>, {
                onClick: () => handleMenuItemClick(child.props.onClick),
              });
            }
          })}
        </div>
      )}
    </div>
  );
}
