import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { updateContacts } from 'Redux/operations';
import css from './Modal.module.css';

export const Modal = ({ closemodal, id }) => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const updateContact = {};

    if (form.name.value !== '') updateContact.name = form.name.value;
    if (form.number.value !== '') updateContact.number = form.number.value;

    if (!Number(updateContact.number)) {
      Notiflix.Notify.warning('Please add valid number value');
      return;
    }

    dispatch(updateContacts([id, updateContact]));

    event.currentTarget.reset();
    closemodal();
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closemodal();
    }
  };
  return (
    <div className={css.Modal__backdrop} onClick={handleBackdropClick}>
      <div className={css.Modal__content}>
        <button
          type="button"
          className={css.button__clode}
          onClick={handleBackdropClick}
        >
          close
        </button>
        <form className={css.useagecard} onSubmit={handleSubmit}>
          <label className={css.useagecard__lable}>Name</label>
          <input
            className={css.useagecard__input}
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Please enter a name"
          />
          <label className={css.useagecard__lable}>Number</label>
          <input
            className={css.useagecard__input}
            name="number"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Please enter a number"
          />
          <button type="submit" className={css.useagecard__button}>
            Update contact
          </button>
        </form>
      </div>
    </div>
  );
};
