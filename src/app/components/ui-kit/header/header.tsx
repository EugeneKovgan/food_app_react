import React from 'react';
import avatar from 'assets/images/icons/profile.svg';
import { useAppSelector } from '@core/hooks';

import './styles.scss';

export const Header: React.FC = () => {
  const selectedUser = useAppSelector(state => state.user.user);

  return (
    <div className="container">
      <div className="header">
        <div className="header__title">Let’s eat Quality food </div>
        <img
          className="header__avatar"
          src={selectedUser?.avatar ? selectedUser?.avatar : avatar}
          alt="profile"
        />
      </div>
    </div>
  );
};
