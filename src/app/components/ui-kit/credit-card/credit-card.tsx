import React from 'react';
import img from 'assets/images/fish/chargrilled-fish.jpeg';
import like_icon from 'assets/images/icons/favorite.svg';

import './styles.scss';

export const CreditCard: React.FC = () => {
  return (
    <div className="credit-card">
      <div className="credit-card__img-block">
        <img className="credit-card__img-block__bg" src={img} alt="img" />
        <div className="credit-card__img-block__like-block">
          <img
            className="credit-card__img-block__like-block__img"
            src={like_icon}
            alt="like_icon"
          />
        </div>
      </div>
      <div className="credit-card__description">
        <div className="credit-card__description__title">Grilled Fish</div>
        <div className="credit-card__description__food-category">
          Spicy fried noodle
        </div>
      </div>
      <div className="credit-card__price">
        <span>$</span>6.50
      </div>
      <button className="credit-card__btn" type="button">
        Add to Cart
      </button>
    </div>
  );
};
