import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/header/Header';
// import { Loader } from 'components/Loader/Loader';

export const Main = () => {
  return (
    <div>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
