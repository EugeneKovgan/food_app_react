import React from 'react';
import masterCard from 'assets/images/icons/master-card.svg';
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
            <div className="credit-card__block__card__main">
              <div className="credit-card__block__card__main__text">
                Achmad Qomarudin
              </div>
            </div>

            <div className="credit-card__block__card__number">
              5763 •••• •••• 2021
            </div>

            <div className="credit-card__block__card__footer">
              <div className="credit-card__block__card__footer__left-block">
                $3.464.98
              </div>
              <div className="credit-card__block__card__footer__right-block">
                <img src={masterCard} alt="masterCard" />
                <div className="credit-card__block__card__footer__right-block__text">
                  Platinum Card
                </div>
              </div>
            </div>
          </div>
          <button className="credit-card__block__card__btn" type="button">
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
};
