import React from 'react';

import './styles.scss';

export const TotalPrice: React.FC = () => {
  return (
    <div className="total-price">
      <div className="total-price__subtotal">
        <span className="total-price__subtotal__title">Subtotal</span>
        <span className="total-price__subtotal__value">$15.00</span>
      </div>
      <div className="total-price__delivery">
        <span className="total-price__delivery__title">Delivery</span>
        <span className="total-price__delivery__value">Free</span>
      </div>
      <div className="total-price__total">
        <span className="total-price__total__title">Total</span>
        <span className="total-price__total__value">$15.00</span>
      </div>
    </div>
  );
};
