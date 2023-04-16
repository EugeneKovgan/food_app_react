import React, { useState } from 'react';
import { ModalError, ProfileBlock } from '@components/ui-kit';

import './styles.scss';

export const ProfileAccount: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="profile-page">
      <ProfileBlock />
      <ModalError isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};
