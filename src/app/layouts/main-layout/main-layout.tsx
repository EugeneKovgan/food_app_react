import React, { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '@components/ui-kit';
import { useAppSelector } from '@core/hooks';
import { selectAuthToken, useGetCurrentUserMutation } from '@store/users';

import './styles.scss';

export const MainLayout: FC = () => {
  const token = useAppSelector(selectAuthToken);
  const [getCurrentUser] = useGetCurrentUserMutation();

  useEffect(() => {
    if (token) {
      getCurrentUser(null);
    }
  }, [token]);

  return (
    <div className="main-layout">
      <Outlet />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
