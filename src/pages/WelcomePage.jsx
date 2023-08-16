import { Container } from 'components/container/Container';
import { Section } from 'components/section/Section';

export const WelcomePage = () => {
  return (
    <Container>
      <Section>
        <h1>Welcome</h1>
        <p>There is you privet PhoneBook</p>
        <p>Please Login or Register</p>
      </Section>
    </Container>
  );
};
