import { Container } from 'components/container/Container';
import css from './WelcomePage.module.css';

export const WelcomePage = () => {
  return (
    <Container>
      <div className={css.welcome_wrapper}>
        <h1>Welcome</h1>
        <p className={css.text__style}>There is your privet PhoneBook</p>
        <p className={css.text__style}>Please Login or Register</p>
      </div>
    </Container>
  );
};
