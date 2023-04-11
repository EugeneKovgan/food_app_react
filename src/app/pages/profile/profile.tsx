import React from 'react';
import { Footer, ProfileBlock } from '@components/ui-kit';
import { CreditCard } from '@components/ui-kit/credit-card';

import './styles.scss';

export const Profile: React.FC = () => {
  return (
    <div className="profile-page">
      <ProfileBlock />
      <CreditCard />
      <Footer />
    </div>
  );
};
