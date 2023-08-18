import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogged } from 'Redux/selectors';
import { UserMenu } from 'components/usermenu/UserMenu';

import css from './Header.module.css';

export const Header = () => {
  const isLogged = useSelector(selectIsLogged);

  return (
    <header className={css.header__wrapper}>
      <nav className={css.header__navigation}>
        {!isLogged && (
          <NavLink className={css.header__navlink} to="/">
            Home
          </NavLink>
        )}
        {!isLogged && (
          <NavLink className={css.header__navlink} to="/login">
            Login
          </NavLink>
        )}
        {!isLogged && (
          <NavLink className={css.header__navlink} to="/register">
            Register
          </NavLink>
        )}
        {isLogged && (
          <NavLink className={css.header__navlink} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>

      {isLogged && <UserMenu />}
    </header>
  );
};
