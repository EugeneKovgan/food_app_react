import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, ProfileBlock } from '@components/ui-kit';

import './styles.scss';

export const ProfileLayout: FC = () => {
  return (
    <div className="profile-layout">
      <ProfileBlock />
      <Outlet />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
