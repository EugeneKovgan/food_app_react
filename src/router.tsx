import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '@layouts/auth-layout';
import { Favorite } from '@pages/favorite/favorite';
import { Home } from '@pages/home';
import { Login } from '@pages/login';
import { MyOrder } from '@pages/my-order';
import { Registration } from '@pages/registration';
import { MainLayout } from './app/layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'favorite', element: <Favorite /> },
      { path: 'order', element: <MyOrder /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [{ index: true, element: <Login /> }],
  },
  {
    path: '/registration',
    element: <AuthLayout />,
    children: [{ index: true, element: <Registration /> }],
  },
]);
