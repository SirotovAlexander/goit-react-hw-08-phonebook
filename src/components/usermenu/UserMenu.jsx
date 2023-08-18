import css from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <div className={css.usermenu__wrapper}>
      <p className={css.usermenu__mail}>mango@mail.com</p>
      <button className={css.usermenu__button}>Logout</button>
    </div>
  );
};
