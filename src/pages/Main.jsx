import { Outlet } from 'react-router-dom';
import { Header } from 'components/header/Header';

export const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
