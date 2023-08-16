import { Container } from 'components/container/Container';
import { Section } from 'components/section/Section';

import css from '../components/phonebookform/PhoneBookForm.module.css';

export const Login = () => {
  return (
    <Container>
      <Section>
        <div className={css.formwrapper}>
          <form className={css.useagecard}>
            <label className={css.useagecard__lable}>E-Mail</label>
            <input
              className={css.useagecard__input}
              name="E-Mail"
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Please enter a name"
              required
            />
            <label className={css.useagecard__lable}>Password</label>
            <input
              className={css.useagecard__input}
              name="Password"
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="Please enter a number"
              required
            />
            <button type="submit" className={css.useagecard__button}>
              Login
            </button>
          </form>
        </div>
      </Section>
    </Container>
  );
};
