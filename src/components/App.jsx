import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'Redux/selectors';
import { getCurrentUser } from 'Redux/operations';
import { Main } from 'pages/Main';
import { WelcomePage } from 'pages/WelcomePage';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { ContactsPage } from 'pages/Contacts';
import { ErrorPage } from 'pages/ErrorPage';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
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
