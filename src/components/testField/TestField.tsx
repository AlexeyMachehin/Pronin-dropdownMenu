import { DropdownMenu } from '../dropdownMenu/DropdownMenu';
import { Trigger } from '../trigger/Trigger';
import classes from './testField.module.css';

export function TestField() {
  return (
    <div className={classes.testField}>
      <DropdownMenu trigger={<Trigger />}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </DropdownMenu>

      <DropdownMenu trigger={<Trigger />}>
        <div
          className={classes.dropdownMenuItem}
          onClick={() => {
            console.log(1);
          }}>
          Item 4
        </div>

        <div
          className={classes.dropdownMenuItem}
          onClick={() => {
            console.log(2);
          }}>
          Item 5
        </div>

        <div className={classes.dropdownMenuItem}>Item 6</div>
      </DropdownMenu>
    </div>
  );
}
