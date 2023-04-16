import React from 'react';
import { useDispatch } from 'react-redux';
import like_icon from 'assets/images/icons/favorite.svg';
import { config } from '@core/config';
import { addToBasket } from '@store/basket';
import { IProduct } from '@store/products/models';

import './styles.scss';

type PropsType = {
  product: IProduct;
  key: string;
};

export const FoodCard: React.FC<PropsType> = ({ product }) => {
  const dispatch = useDispatch();
  const addItemToCard = () => {
    dispatch(addToBasket(product));
  };

  return (
    <div className="food-card">
      <div className="food-card__img-block">
        <img
          className="food-card__img-block__bg"
          src={`${config.API_URL}/${product.picture?.path}`}
          alt="img"
        />
        <div className="food-card__img-block__like-block">
          <img
            className="food-card__img-block__like-block__img"
            src={like_icon}
            alt="like_icon"
          />
        </div>
      </div>
      <div className="food-card__description">
        <div className="food-card__description__title">
          {product.productName}
        </div>
        <div className="food-card__description__food-category">
          {product.productCategory}
        </div>
      </div>
      <div className="food-card__price">
        <span>$</span>
        {product.productPrice}
      </div>
      <button
        onClick={() => {
          addItemToCard();
        }}
        className="food-card__btn"
        type="button"
      >
        Add to Cart
      </button>
    </div>
  );
};
