import Notiflix from 'notiflix';
import { Container } from '../components/container/Container';
import { Section } from '../components/section/Section';
import { Loader } from '../components/Loader/Loader';

import PhoneBookForm from '../components/phonebookform/PhoneBookForm';
import Contacts from '../components/contacts/Contacts';
import Filter from '../components/filter/Filter';
import { useSelector } from 'react-redux';
import { selectLoading, selectError } from '../Redux/selectors';

export const ContactsPage = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  if (isError) Notiflix.Notify.warning(`${isError.message}`);
  return (
    <Container>
      {isLoading && <Loader />}

      <Section>
        <h1>Phonebook</h1>
        <PhoneBookForm />
        {!isError && (
          <>
            <h2>Contacts</h2>
            <Filter />
            <Contacts />
          </>
        )}
      </Section>
    </Container>
  );
};
