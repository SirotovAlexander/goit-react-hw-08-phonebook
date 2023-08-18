import { useSelector } from 'react-redux';
import { selectIsLogged } from 'Redux/selectors';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const PublicRoute = component => {
  const isLogged = useSelector(selectIsLogged);

  return isLogged ? <Navigate to="contacts" /> : component.component;
};
