import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from 'Redux/selectors';
import { logOutUser } from 'Redux/operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);
  return (
    <div className={css.usermenu__wrapper}>
      <p className={css.usermenu__mail}>{userName.email}</p>
      <button
        className={css.usermenu__button}
        onClick={() => dispatch(logOutUser())}
      >
        Logout
      </button>
    </div>
  );
};
