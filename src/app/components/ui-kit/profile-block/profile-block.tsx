import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from 'assets/images/icons/profile.svg';
import { useAppSelector } from '@core/hooks';

import './styles.scss';

export const ProfileBlock: React.FC = () => {
  const selectedUser = useAppSelector(state => state.user.user);

  console.log(selectedUser);

  return (
    <div className="profile-block">
      <div className="profile-block__title">My Profile</div>

      <div className="profile-block__description">
        <div className="profile-block__description__avatar-block">
          <img
            src={selectedUser?.avatar ? selectedUser?.avatar : avatar}
            alt="profile"
          />
        </div>

        <div className="profile-block__description__main-block">
          <div className="profile-block__description__main-block__name">
            {selectedUser?.userName}
          </div>
          <div className="profile-block__description__main-block__email">
            {selectedUser?.email}
          </div>
          <div className="profile-block__description__main-block__id">
            User ID: {selectedUser?.id}
          </div>
        </div>
      </div>

      <nav className="profile-block__btn-block">
        <NavLink to="/profile" className="profile-block__btn-block__btn">
          Account
        </NavLink>
        <NavLink to="/profile" className="profile-block__btn-block__btn">
          Payment
        </NavLink>
        <NavLink to="/profile" className="profile-block__btn-block__btn">
          History
        </NavLink>
      </nav>
    </div>
  );
};
