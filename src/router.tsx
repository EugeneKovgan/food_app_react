import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '@layouts/auth-layout';
import { Home } from '@pages/home';
import { Login } from '@pages/login';
import { Registration } from '@pages/registration';
import { MainLayout } from './app/layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      // { path: 'favorite', element: <Favorite /> },
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
