import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import * as ROUTE from './route-constant';

import { Loader } from '@/components/helpers/Loader';
import { PrivateLayout } from '@/components/layout/private';
import { PublicLayout } from '@/components/layout/public';

const Home = lazy(() => import('@/pages/home'));
const Login = lazy(() => import('@/pages/login'));

const Router: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path={ROUTE.LOGIN} element={<Login />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path={ROUTE.HOME} element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
