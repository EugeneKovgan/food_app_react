import React from 'react';
import amazon from 'assets/images/png/amazon.png';

import './styles.scss';

export const CreditCard: React.FC = () => {
  return (
    <div className="container">
      <div className="credit-card">
        <div className="credit-card__my-card">My Card</div>
        <div className="credit-card__block">
          <div className="credit-card__block__card">
            <div className="credit-card__block__card__header">
              <img src={amazon} alt="amazon" />
            </div>
            <div className="credit-card__block__card__price">main</div>
          </div>
          <button className="credit-card__block__card__btn" type="button">
            +
          </button>
        </div>
      </div>
    </div>
  );
};
