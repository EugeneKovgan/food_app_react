import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from 'assets/images/png/avatar.png';

import './styles.scss';

export const ProfileBlock: React.FC = () => {
  return (
    <div className="profile-block">
      <div className="profile-block__title">My Profile</div>

      <div className="profile-block__description">
        <div className="profile-block__description__avatar-block">
          <img src={avatar} alt="profile" />
        </div>

        <div className="profile-block__description__main-block">
          <div className="profile-block__description__main-block__name">
            Achmad Qomarudin
          </div>
          <div className="profile-block__description__main-block__email">
            achmadprogrammer@gmail.com
          </div>
          <div className="profile-block__description__main-block__id">
            User ID : 37664872
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
