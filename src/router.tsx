import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { History } from '@pages/history';
import {
  Account,
  FavoriteGuard,
  HomeGuard,
  Login,
  MyOrderGuard,
  NotificationGuard,
  PaymentBlockGuard,
  Registration,
} from '@pages/index';
import { AuthLayout, MainLayout, ProfileLayout } from './app/layouts';

const props = {
  canActivate: (user: any) => !!user,
  redirect: '/auth',
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomeGuard {...props} /> },
      { path: 'favorite', element: <FavoriteGuard {...props} /> },
      { path: 'order', element: <MyOrderGuard {...props} /> },
      { path: 'notification', element: <NotificationGuard {...props} /> },
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
  {
    path: 'profile/',
    element: <ProfileLayout />,
    children: [
      { index: true, element: <PaymentBlockGuard {...props} /> },
      { path: 'payment', element: <PaymentBlockGuard {...props} /> },
      { path: 'account', element: <Account /> },
      { path: 'history', element: <History /> },
    ],
  },
]);
