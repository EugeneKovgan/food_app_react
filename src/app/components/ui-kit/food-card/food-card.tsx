/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import like_icon from 'assets/images/icons/favorite.svg';
import like_icon_fill from 'assets/images/icons/favorite-fill.svg';
import { config } from '@core/config';
import { useAppSelector } from '@core/hooks';
import { addToBasket } from '@store/basket';
import { IProduct } from '@store/products/models';
import { likeToggle } from '@store/users/models/auth-slice';

import './styles.scss';

type PropsType = {
  product: IProduct;
  key: string;
};

export const FoodCard: React.FC<PropsType> = ({ product }) => {
  const currentUser = useAppSelector(state => state.user.user);
  const [favoriteList, setFavoriteList] = useState(
    currentUser?.favoritesProducts,
  );
  const [currentProductLike, setCurrentProductLike] = useState(
    favoriteList?.includes(product.id),
  );
  const dispatch = useDispatch();

  const addItemToCard = () => {
    dispatch(addToBasket(product));
  };

  const toggleLike = () => {
    dispatch(likeToggle(product.id));
    console.log(product.id);
  };

  useEffect(() => {
    setFavoriteList(currentUser?.favoritesProducts);
  }, [toggleLike]);

  return (
    <div className="food-card">
      <div className="food-card__img-block">
        <img
          className="food-card__img-block__bg"
          src={`${config.API_URL}/${product.picture?.path}`}
          alt="img"
        />
        <button
          onClick={() => toggleLike()}
          type="button"
          className="food-card__img-block__like-block"
        >
          <img
            className="food-card__img-block__like-block__img"
            src={currentProductLike ? like_icon_fill : like_icon}
            alt="like_icon"
          />
        </button>
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
