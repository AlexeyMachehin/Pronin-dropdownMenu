import { DropdownItem } from '../dropdownItem/DropdownItem';
import { DropdownMenu } from '../dropdownMenu/DropdownMenu';
import { Trigger } from '../trigger/Trigger';
import classes from './testField.module.css';

export function TestField() {
  return (
    <div className={classes.testField}>
      <DropdownMenu trigger={<Trigger />}>
        <DropdownItem
          value='Поделиться в социальных сетях" clicked'
          label="Поделиться в социальных сетях"
          iconUrl="/connect.png"
        />
        <DropdownItem
          value='Редактировать страницу" clicked'
          label="Редактировать страницу"
          iconUrl="/write.png"
        />
        <DropdownItem
          value='Удалить страницу" clicked'
          label="Удалить страницу"
          iconUrl="/bin.png"
        />
      </DropdownMenu>

      <DropdownMenu trigger={<Trigger />}>
        <DropdownItem
          value='Поделиться в социальных сетях" clicked'
          label="Поделиться в социальных сетях"
          iconUrl="/connect.png"
        />
        <DropdownItem
          value='Редактировать страницу" clicked'
          label="Редактировать страницу"
          iconUrl="/write.png"
        />
        <DropdownItem
          value='Удалить страницу" clicked'
          label="Удалить страницу"
          iconUrl="/bin.png"
        />
      </DropdownMenu>
    </div>
  );
}
