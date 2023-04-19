import React from 'react';
import { ProfileBlock } from '@components/ui-kit';

import './styles.scss';

export const Profile: React.FC = () => {
  return (
    <div className="profile-page">
      <ProfileBlock />
    </div>
  );
};
