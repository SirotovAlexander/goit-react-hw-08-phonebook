import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addContacts } from 'Redux/operations';
import { selectContacts } from '../../Redux/selectors';

import css from './PhoneBookForm.module.css';

const PhoneBookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {};

    if (event.currentTarget.name)
      newContact.name = event.currentTarget.name.value;
    if (event.currentTarget.number) {
      newContact.phone = event.currentTarget.number.value;
    }
    if (!Number(event.currentTarget.number.value)) {
      alert('Please add valid number value');
      return;
    }

    const checkList = contacts.find(contact => {
      return (
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.phone === newContact.phone
      );
    });
    if (checkList) {
      alert(
        `${newContact.name}, number: ${newContact.phone} is already in contacts !`
      );
      event.currentTarget.reset();
      return;
    }
    dispatch(addContacts(newContact));
    event.currentTarget.reset();
  };

  return (
    <div className={css.formwrapper}>
      <form className={css.useagecard} onSubmit={handleSubmit}>
        <label className={css.useagecard__lable}>Name</label>
        <input
          className={css.useagecard__input}
          name="name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Please enter a name"
          required
        />
        <label className={css.useagecard__lable}>Number</label>
        <input
          className={css.useagecard__input}
          name="number"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Please enter a number"
          required
        />
        <button type="submit" className={css.useagecard__button}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default PhoneBookForm;
