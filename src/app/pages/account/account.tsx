import React from 'react';
import { AccountTitle } from '@components/ui-kit/account-header';
import { AccountUpdateForm } from './account-update-form';

import './styles.scss';

export const Account: React.FC = () => {
  return (
    //  isLoading ? (
    // <Loader />
    // ) : (
    <div className="container">
      <div className="account">
        <AccountTitle />
        <AccountUpdateForm />
      </div>
    </div>
  );
};
