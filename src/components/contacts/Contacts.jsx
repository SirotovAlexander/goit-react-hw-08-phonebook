import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { selectVisibleContacts } from '../../Redux/selectors';
import { fetchContacts, deleteContacts } from 'Redux/operations';

import { Modal } from 'components/modal/Modal';

import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const idRef = useRef('');

  const openModal = event => {
    idRef.current = event.target.value;

    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      <ul>
        {contacts?.map(({ id, name, number }) => {
          return (
            <li key={id} className={css.list__item}>
              <p className={css.text__container}>
                {name} {number}
              </p>
              <button
                type="button"
                value={id}
                className={css.list__button}
                onClick={openModal}
              >
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
      {modal && <Modal closemodal={closeModal} id={idRef.current} />}
    </div>
  );
};

export default Contacts;
