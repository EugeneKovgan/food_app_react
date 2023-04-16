import React from 'react';

import './styles.scss';

// export const TotalPrice: React.FC<number> = ({ totalPrice }) => { WTf ? @number get "is not assignable to type 'number'"
export const TotalPrice: React.FC<any> = ({ totalPrice }) => {
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
