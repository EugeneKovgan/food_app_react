import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'assets/images/png/shopping-bag-logo.png';

import './styles.scss';

export const LogoBlock: React.FC = () => {
  return (
    <div className="logo-block">
      <img src={logo} alt="logo" />
      <div className="logo-block__description">
        <div className="logo-block__description__title">Corner Food</div>
        <div className="logo-block__description__text">Delivery App </div>
      </div>
      <nav className="logo-block__btn-block">
        <NavLink to="/auth" className="logo-block__btn-block__btn">
          Login
        </NavLink>
        <NavLink to="/registration" className="logo-block__btn-block__btn">
          Signup
        </NavLink>
      </nav>
    </div>
  );
};
