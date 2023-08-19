import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { selectVisibleContacts } from '../../Redux/selectors';
import { fetchContacts, deleteContacts } from 'Redux/operations';

import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {contacts?.map(({ id, name, number }) => {
          return (
            <li key={id} className={css.list__item}>
              <p className={css.text__container}>
                {name} {number}
              </p>
              <button type="button" className={css.list__button}>
                update
              </button>
              <button
                type="button"
                className={css.list__button}
                onClick={() => dispatch(deleteContacts(id))}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;
