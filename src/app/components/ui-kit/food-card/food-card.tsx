import React from 'react';
import img from 'assets/images/fish/chargrilled-fish.jpeg';
import like_icon from 'assets/images/icons/favorite.svg';

import './styles.scss';

export const FoodCard: React.FC = () => {
  return (
    <div className="food-card">
      <div className="food-card__img-block">
        <img className="food-card__img-block__bg" src={img} alt="img" />
        <div className="food-card__img-block__like-block">
          <img
            className="food-card__img-block__like-block__img"
            src={like_icon}
            alt="like_icon"
          />
        </div>
      </div>
      <div className="food-card__description">
        <div className="food-card__description__title">Grilled Fish</div>
        <div className="food-card__description__food-category">
          Spicy fried noodle
        </div>
      </div>
      <div className="food-card__price">
        <span>$</span>6.50
      </div>
      <button className="food-card__btn" type="button">
        Add to Cart
      </button>
    </div>
  );
};
