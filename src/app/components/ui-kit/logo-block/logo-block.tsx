import React from 'react';
import { Button } from 'antd';
import logo from 'assets/images/png/shopping-bag-logo.png';

import './styles.scss';

export const LogoBlock: React.FC = () => {
  return (
    <div className="logo-block">
      <img src={logo} alt="logo" />
      <div className="logo-block__title">Corner Food</div>
      <div className="logo-block__description">Delivery App </div>
      <div className="logo-block__btn-block">
        <Button>Login</Button>
        <Button>Signup</Button>
      </div>
    </div>
  );
};
