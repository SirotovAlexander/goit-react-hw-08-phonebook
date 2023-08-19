import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { registerUser } from 'Redux/operations';
import { Container } from 'components/container/Container';

import css from './Register.module.css';

export const Register = () => {
  const dispatch = useDispatch();

  const hendleSubmite = event => {
    event.preventDefault();
    const newUser = {};
    const form = event.currentTarget;

    newUser.name = form.name.value;
    newUser.email = form.email.value;
    if (form.password.value.length < 7) {
      Notiflix.Notify.warning(
        'Password is shorter than the minimum allowed length (7).'
      );
      form.reset();
      return;
    }
    newUser.password = form.password.value;

    dispatch(registerUser(newUser));
    form.reset();
  };

  return (
    <Container>
      <section className={css.section}>
        <form className={css.useagecard} onSubmit={hendleSubmite}>
          <label className={css.useagecard__lable}>E-Mail</label>
          <input
            className={css.useagecard__input}
            name="email"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.useagecard__lable}>Name</label>
          <input
            className={css.useagecard__input}
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.useagecard__lable}>Password</label>
          <input
            className={css.useagecard__input}
            name="password"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit" className={css.useagecard__button}>
            Register
          </button>
        </form>
      </section>
    </Container>
  );
};
