import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/usermenu/UserMenu';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header__wrapper}>
      <nav className={css.header__navigation}>
        <NavLink className={css.header__navlink} to="/">
          Home
        </NavLink>
        <NavLink className={css.header__navlink} to="/login">
          Login
        </NavLink>
        <NavLink className={css.header__navlink} to="/register">
          Register
        </NavLink>
        <NavLink className={css.header__navlink} to="/contacts">
          Contacts
        </NavLink>
      </nav>
      <UserMenu />
    </header>
  );
};
