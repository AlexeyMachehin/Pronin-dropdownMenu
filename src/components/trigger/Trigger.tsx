import classes from './trigger.module.css';

export function Trigger() {
  return (
    <button className={classes.trigger}>
      <img src="/dotMenu.png" alt="dotMenu" />
    </button>
  );
}
