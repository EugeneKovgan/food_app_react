import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from 'assets/images/icons/profile.svg';
import { config } from '@core/config';
import { useAppSelector } from '@core/hooks';

import './styles.scss';

export const ProfileBlock: React.FC = () => {
  const currentUser = useAppSelector(state => state.user.user);

  console.log(currentUser);

  return (
    <div className="profile-block">
      <div className="profile-block__title">My Profile</div>

      <div className="profile-block__description">
        <div className="profile-block__description__avatar-block">
          <img
            src={
              currentUser?.avatar?.path
                ? `${config.API_URL}/${currentUser.avatar.path}`
                : avatar
            }
            alt="avatar"
          />
        </div>

        <div className="profile-block__description__main-block">
          <div className="profile-block__description__main-block__name">
            {`${currentUser?.name ? currentUser?.name : 'New'} ${
              currentUser?.surname ? currentUser?.surname : 'User'
            }`}
          </div>
          <div className="profile-block__description__main-block__email">
            {currentUser?.email}
          </div>
          <div className="profile-block__description__main-block__id">
            User ID: {currentUser?.userId}
          </div>
        </div>
      </div>

      <nav className="profile-block__btn-block">
        <NavLink
          to="/profile/account"
          className="profile-block__btn-block__btn"
        >
          Account
        </NavLink>
        <NavLink
          to="/profile/payment"
          className="profile-block__btn-block__btn"
        >
          Payment
        </NavLink>
        <NavLink
          to="/profile/history"
          className="profile-block__btn-block__btn"
        >
          History
        </NavLink>
      </nav>
    </div>
  );
};
