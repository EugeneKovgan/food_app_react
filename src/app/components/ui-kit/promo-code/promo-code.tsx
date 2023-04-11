import React from 'react';
import promo_icon from 'assets/images/icons/promo_code.svg';

import './styles.scss';

export const PromoCode: React.FC = () => {
  return (
    <div className="promo-code">
      <div className="promo-code__title">
        <img
          className="promo-code__title__icon"
          src={promo_icon}
          alt="promo_icon"
        />
        <input
          className="promo-code__title__input"
          type="text"
          placeholder="Promo code . . ."
        />
      </div>
      <button className="promo-code__btn" type="button">
        Apply
      </button>
    </div>
  );
};
