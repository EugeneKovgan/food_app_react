import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '@components/ui-kit';

import './styles.scss';

export const MainLayout: FC = () => {
  return (
    <div className="main-layout">
      <Outlet />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
