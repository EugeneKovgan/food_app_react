import React from 'react';

import './styles.scss';

type PropsType = {
  totalPrice: number;
};

export const TotalPrice: React.FC<PropsType> = ({ totalPrice }) => {
  return (
    <div className="total-price">
      <div className="total-price__subtotal">
        <span className="total-price__subtotal__title">Subtotal</span>
        <span className="total-price__subtotal__value">${totalPrice}</span>
      </div>
      <div className="total-price__delivery">
        <span className="total-price__delivery__title">Delivery</span>
        <span className="total-price__delivery__value">Free</span>
      </div>
      <div className="total-price__total">
        <span className="total-price__total__title">Total</span>
        <span className="total-price__total__value">${totalPrice}</span>
      </div>
    </div>
  );
};
