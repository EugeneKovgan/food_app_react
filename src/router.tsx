import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { OrderProgress } from '@components/ui-kit';
import {
  Account,
  Favorite,
  Home,
  Login,
  MyOrder,
  Notification,
  PaymentBlock,
  Registration,
} from '@pages/index';
import { AuthLayout, MainLayout, ProfileLayout } from './app/layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'favorite', element: <Favorite /> },
      { path: 'order', element: <MyOrder /> },
      { path: 'notification', element: <Notification /> },
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
      { index: true, element: <PaymentBlock /> },
      { path: 'payment', element: <PaymentBlock /> },
      { path: 'account', element: <Account /> },
      { path: 'history', element: <OrderProgress /> },
    ],
  },
]);
