import React from 'react';
import cross_icon from 'assets/images/icons/close.svg';

import './styles.scss';

export const OrderTitle: React.FC = () => {
  return (
    <div className="order-title">
      <div className="order-title__title">My Order</div>
      <button className="order-title__btn" type="button">
        <img src={cross_icon} alt="cross_icon" />
      </button>
    </div>
  );
};
