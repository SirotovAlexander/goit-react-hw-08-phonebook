import { Route, Routes } from 'react-router-dom';
import { Main } from 'pages/Main';
import { WelcomePage } from 'pages/WelcomePage';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { ContactsPage } from 'pages/Contacts';
import { ErrorPage } from 'pages/ErrorPage';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<WelcomePage />} />
        <Route path="login" element={<PublicRoute component={<Login />} />} />
        <Route
          path="register"
          element={<PublicRoute component={<Register />} />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={<ContactsPage />} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
