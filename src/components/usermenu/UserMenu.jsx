import { useDispatch } from 'react-redux';
import { logOutUser } from 'Redux/operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.usermenu__wrapper}>
      <p className={css.usermenu__mail}>mango@mail.com</p>
      <button
        className={css.usermenu__button}
        onClick={() => dispatch(logOutUser())}
      >
        Logout
      </button>
    </div>
  );
};
