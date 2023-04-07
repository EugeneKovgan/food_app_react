import React from 'react';
import { Outlet } from 'react-router-dom';

import './styles.scss';

export const AuthLayout: React.FC = () => {
  return (
    <div className="auth-layout">
      <Outlet />
    </div>
  );
};
