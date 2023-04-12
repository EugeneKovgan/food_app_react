import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import './styles.scss';

export const MainLayout: FC = () => {
  return (
    <div className="main-layout">
      <Outlet />
    </div>
  );
};
