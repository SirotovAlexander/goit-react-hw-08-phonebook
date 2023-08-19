import { useSelector } from 'react-redux';
import { selectIsLogged } from 'Redux/selectors';
import { Container } from 'components/container/Container';
import css from './WelcomePage.module.css';

export const WelcomePage = () => {
  const isLogged = useSelector(selectIsLogged);
  return (
    <Container>
      <div className={css.welcome_wrapper}>
        <h1>Welcome</h1>
        {isLogged ? (
          <p className={css.text__style}>You already is Logged In</p>
        ) : (
          <>
            <p className={css.text__style}>There is your privet PhoneBook</p>
            <p className={css.text__style}>Please Login or Register</p>
          </>
        )}
      </div>
    </Container>
  );
};
