import React, {
  useState,
  useRef,
  useEffect,
  JSXElementConstructor,
} from 'react';
import { Position } from './dropdownPositionTypes';
import classes from './dropdownMenu.module.css';

type HandlerClickEvent = () => void;

interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactElement<
    { onClick?: HandlerClickEvent },
    JSXElementConstructor<{ onClick?: HandlerClickEvent }>
  >[];
}

export function DropdownMenu({ trigger, children }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState(Position.BottomRight);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const calculatePosition = () => {
    if (!triggerRef.current || !dropdownRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const dropdownRect = dropdownRef.current.getBoundingClientRect();

    const spaceBottom = window.innerHeight - triggerRect.bottom;
    const spaceTop = triggerRect.top;
    const spaceRight = window.innerWidth - triggerRect.right;

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

    setPosition(newPosition);
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
      setIsOpen(false);
    }
  };

  const handleTriggerClick = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const handleMenuItemClick = (callback?: HandlerClickEvent) => {
    if (callback) {
      callback();
    }

    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      calculatePosition();
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      calculatePosition();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={classes.dropdownMenuContainer}>
      <div ref={triggerRef} onClick={handleTriggerClick}>
        {trigger}
      </div>

      {isOpen && (
        <div
          className={classes.dropdownMenu}
          ref={dropdownRef}
          style={{
            top: Position.getTopCoordinate(position),
            bottom: Position.getBottomCoordinate(position),
            left: Position.getLeftCoordinate(position),
            right: Position.getRightCoordinate(position),
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
