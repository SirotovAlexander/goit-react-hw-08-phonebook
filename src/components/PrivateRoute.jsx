import { useSelector } from 'react-redux';
import { selectIsLogged, selectIsRefreshing } from 'Redux/selectors';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = component => {
  console.log(component);
  const isLoggedIn = useSelector(selectIsLogged);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to="/" /> : component.component;
};
