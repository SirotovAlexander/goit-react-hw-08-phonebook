import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header__wrapper}>
      <nav className={css.header__navigation}>
        <NavLink className={css.header__navlink} to="/">
          Home
        </NavLink>
        <NavLink className={css.header__navlink} to="/">
          Login
        </NavLink>
        <NavLink className={css.header__navlink} to="/movies">
          Register
        </NavLink>
        <NavLink className={css.header__navlink} to="/contacts">
          Contacts
        </NavLink>
      </nav>
    </header>
  );
};
