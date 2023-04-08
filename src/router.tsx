import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '@layouts/auth-layout';
import { Login } from '@pages/login';
import { Registration } from '@pages/registration';
// import { MainLayout } from './app/layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'register', element: <Registration /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'register', element: <Registration /> },
    ],
  },
]);
