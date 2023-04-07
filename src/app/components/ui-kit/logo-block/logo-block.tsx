import React from 'react';
import { Radio } from 'antd';
import logo from 'assets/images/png/shopping-bag-logo.png';

import './styles.scss';

export const LogoBlock: React.FC = () => {
  return (
    <div className="logo-block">
      <img src={logo} alt="logo" />
      <div className="logo-block__title">Corner Food</div>
      <div className="logo-block__description">Delivery App </div>
      <Radio.Group
        className="logo-block__btn-block"
        defaultValue="a"
        size="large"
      >
        <Radio.Button className="logo-block__btn-block__btn" value="a">
          Login
        </Radio.Button>
        <Radio.Button className="logo-block__btn-block__btn" value="b">
          Signup
        </Radio.Button>
      </Radio.Group>
    </div>
  );
};
