import { DropdownMenu } from '../dropdownMenu/DropdownMenu';
import { Trigger } from '../trigger/Trigger';
import classes from './testField.module.css';

export function TestField() {
  return (
    <div className={classes.testField}>
      <DropdownMenu trigger={<Trigger />}>
        <div
          className={classes.dropdownMenuItem}
          onClick={() => {
            console.log('"Поделиться в социальных сетях" clicked');
          }}>
          <div>Поделиться в социальных сетях</div>
          <img
            className={classes.dropdownMenuItemIcon}
            src="/connect.png"
            alt="connect icon"
          />
        </div>

        <div
          className={classes.dropdownMenuItem}
          onClick={() => {
            console.log('"Редактировать страницу" clicked');
          }}>
          <div>Редактировать страницу</div>
          <img
            className={classes.dropdownMenuItemIcon}
            src="/write.png"
            alt="write icon"
          />
        </div>

        <div
          className={classes.dropdownMenuItem}
          onClick={() => {
            console.log('"Удалить страницу" clicked');
          }}>
          <div>Удалить страницу</div>
          <img
            className={classes.dropdownMenuItemIcon}
            src="/bin.png"
            alt="bin icon"
          />
        </div>
      </DropdownMenu>

      <DropdownMenu trigger={<Trigger />}>
        <div
          className={classes.dropdownMenuItem}
          onClick={() => {
            console.log('"Поделиться в социальных сетях" clicked');
          }}>
          <div>Поделиться в социальных сетях</div>
          <img
            className={classes.dropdownMenuItemIcon}
            src="/connect.png"
            alt="seconnect icon"
          />
        </div>

        <div
          className={classes.dropdownMenuItem}
          onClick={() => {
            console.log('"Редактировать страницу" clicked');
          }}>
          <div>Редактировать страницу</div>
          <img
            className={classes.dropdownMenuItemIcon}
            src="/write.png"
            alt="write icon"
          />
        </div>

        <div
          className={classes.dropdownMenuItem}
          onClick={() => {
            console.log('"Удалить страницу" clicked');
          }}>
          <div>Удалить страницу</div>
          <img
            className={classes.dropdownMenuItemIcon}
            src="/bin.png"
            alt="bin icon"
          />
        </div>
      </DropdownMenu>
    </div>
  );
}
