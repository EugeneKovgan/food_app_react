import React from 'react';
import img from 'assets/images/fish/chargrilled-fish.jpeg';

import './styles.scss';

export const OrderCard: React.FC = () => {
  return (
    <div className="order-card">
      <div className="order-card__img-block">
        <img className="order-card__img-block__img" src={img} alt="img" />
      </div>
      <div className="order-card__description">
        <div className="order-card__description__title">Grilled Fish</div>
        <div className="order-card__description__food-category">
          Spicy fried noodle
        </div>
        <div className="order-card__description__price">
          <span>$</span>6.50
        </div>
      </div>
      <div className="order-card__btn-base">
        <div className="order-card__btn-base__btn-block">
          <button
            className="order-card__btn-base__btn-block__btn"
            type="button"
          >
            -
          </button>
          <span>1</span>
          <button
            className="order-card__btn-base__btn-block__btn"
            type="button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
