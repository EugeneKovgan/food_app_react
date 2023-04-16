import React from 'react';
import { Loader, ProfileBlock } from '@components/ui-kit';

import './styles.scss';

export const ProfileHistory: React.FC = () => {
  return (
    <div className="profile-page">
      <ProfileBlock />
      <Loader />
    </div>
  );
};
