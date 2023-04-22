import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from 'assets/images/icons/profile.svg';
import { config } from '@core/config';
import { useAppSelector } from '@core/hooks';

import './styles.scss';

export const Header: React.FC = () => {
  const currentUser = useAppSelector(state => state.user.user);

  return (
    <div className="container">
      <div className="header">
        <div className="header__title">Let’s eat Quality food </div>
        <NavLink to="/profile/account">
          <img
            className="header__avatar"
            src={
              currentUser?.avatar?.path
                ? `${config.API_URL}/${currentUser.avatar.path}`
                : avatar
            }
            alt="profile"
          />
        </NavLink>
      </div>
    </div>
  );
};
