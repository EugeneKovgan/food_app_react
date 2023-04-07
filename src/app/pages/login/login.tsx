import React from 'react';
import { LogoBlock } from '@components/ui-kit';
import { LoginForm } from '@pages/login-form';

import './styles.scss';

export const Login: React.FC = () => {
  return (
    <div className="login-page">
      <LogoBlock />
      <LoginForm />
    </div>
  );
};
