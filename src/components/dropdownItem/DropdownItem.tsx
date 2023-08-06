import classes from './dropdownItem.module.css';

export function DropdownItem({
  value,
  label,
  iconUrl,
}: {
  value: string;
  label: string;
  iconUrl: string;
}) {
  const handleClickOnItem = (valueOption: string) => {
    console.log(valueOption);
  };
  return (
    <div
      className={classes.dropdownMenuItem}
      onClick={() => handleClickOnItem(value)}>
      <div>{label}</div>
      <img
        className={classes.dropdownMenuItemIcon}
        src={iconUrl}
        alt={`${iconUrl} connect icon`}
      />
    </div>
  );
}
