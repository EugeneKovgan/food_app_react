import React from 'react';
import { ProfileBlock } from '@components/ui-kit';
import { Account } from '@components/ui-kit/account';

import './styles.scss';

export const ProfileAccount: React.FC = () => {
  return (
    <div className="profile-page">
      <ProfileBlock />
      <Account />
    </div>
  );
};
