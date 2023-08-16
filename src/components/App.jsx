import { Route, Routes } from 'react-router-dom';
import { Main } from 'pages/Main';
import { WelcomePage } from 'pages/WelcomePage';
import { ContactsPage } from 'pages/Contacts';
import { ErrorPage } from 'pages/ErrorPage';
// import Notiflix from 'notiflix';
// import { Container } from './container/Container';
// import { Section } from './section/Section';
// import { Loader } from './Loader/Loader';

// import PhoneBookForm from './phonebookform/PhoneBookForm';
// import Contacts from './contacts/Contacts';
// import Filter from './filter/Filter';
// import { useSelector } from 'react-redux';
// import { selectLoading, selectError } from '../Redux/selectors';

// export const App = () => {
//   const isLoading = useSelector(selectLoading);
//   const isError = useSelector(selectError);

//   if (isError) Notiflix.Notify.warning(`${isError.message}`);
//   return (
//     <Container>
//       {isLoading && <Loader />}

//       <Section>
//         <h1>Phonebook</h1>
//         <PhoneBookForm />
//         {!isError && (
//           <>
//             <h2>Contacts</h2>
//             <Filter />
//             <Contacts />
//           </>
//         )}
//       </Section>
//     </Container>
//   );
// };
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<WelcomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
