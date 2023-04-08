import React from 'react';
import { LogoBlock } from '@components/ui-kit';
import { RegistrationForm } from '@pages/registration-form';

import './styles.scss';

export const Registration: React.FC = () => {
  return (
    <div className="registration-page">
      <LogoBlock />
      <RegistrationForm />
    </div>
  );
};
