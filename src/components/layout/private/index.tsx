import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const PrivateLayout: FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
