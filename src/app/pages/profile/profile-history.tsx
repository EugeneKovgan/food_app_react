import React from 'react';
import { ProfileBlock } from '@components/ui-kit';
import { OrderProgress } from '@components/ui-kit/order-progress';

import './styles.scss';

export const ProfileHistory: React.FC = () => {
  return (
    <div className="profile-page">
      <ProfileBlock />
      <OrderProgress />
    </div>
  );
};
