import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'Redux/selectors';
import { getCurrentUser } from 'Redux/operations';

import { Main } from 'pages/Main';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import { Loader } from './Loader/Loader';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

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
