/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import cross_icon from 'assets/images/icons/close.svg';
import like_icon from 'assets/images/icons/favorite.svg';
import like_icon_fill from 'assets/images/icons/favorite-fill.svg';
import start_icon from 'assets/images/icons/start.svg';
import time_icon from 'assets/images/icons/time.svg';
import { config } from '@core/config';
import { useAppSelector } from '@core/hooks';
import {
  addToBasket,
  decreaseQuantity,
  getGoodsInBasket,
  increaseQuantity,
  InitialStateType,
} from '@store/basket';
import { IProduct } from '@store/products/models';
import { useUpdateLikesMutation } from '@store/users';

import './styles.scss';

type PropsType = {
  product: IProduct;
  setFullCard: (value: boolean) => void;
};

export const FullFoodCard: React.FC<PropsType> = ({ product, setFullCard }) => {
  const onClose = () => {
    setFullCard(false);
  };

  const currentUser = useAppSelector(state => state.user.user);
  const [updateUserList] = useUpdateLikesMutation();
  const goodsInBasket = useAppSelector(getGoodsInBasket);
  const [currentGood, setCurrentGood] = useState<InitialStateType | any>();
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

  const likeToggle = async () => {
    if (currentUser?.id && product?.id) {
      await updateUserList({
        id: currentUser?.id,
        data: { productId: product?.id },
      });
      setCurrentProductLike(!currentProductLike);
    }
  };

  const updateCurrentGoods = (goods: InitialStateType[]) => {
    goods.map((good: InitialStateType) => {
      return setCurrentGood(good);
    });
  };

  useEffect(() => {
    setFavoriteList(currentUser?.favoritesProducts);
  }, [likeToggle]);

  useEffect(() => {
    setFavoriteList(currentUser?.favoritesProducts);
  }, [favoriteList]);

  useEffect(() => {
    updateCurrentGoods(goodsInBasket);
  }, [product]);

  useEffect(() => {
    updateCurrentGoods(goodsInBasket);
  }, [goodsInBasket]);

  useEffect(() => {
    updateCurrentGoods(goodsInBasket);
  }, []);

  return (
    <div className="full-food-card">
      <div className="full-food-card__img-block">
        <img
          role="presentation"
          className="full-food-card__img-block__bg"
          src={`${config.API_URL}/${product.picture?.path}`}
          alt="img"
        />
        <button
          onClick={() => likeToggle()}
          type="button"
          className="full-food-card__img-block__like-block"
        >
          <img
            className="full-food-card__img-block__like-block__img"
            src={currentProductLike ? like_icon_fill : like_icon}
            alt="like_icon"
          />
        </button>
        <button
          onClick={onClose}
          className="full-food-card__img-block__close-btn"
          type="button"
        >
          <img src={cross_icon} alt="cross_icon" />
        </button>
      </div>

      <div className="full-food-card__description">
        <div className="full-food-card__description__header">
          <div className="full-food-card__description__header__fist-line">
            <div className="full-food-card__description__header__fist-line__title">
              {product.productName}
            </div>
            <div className="full-food-card__description__header__fist-line__price">
              <span>$</span>
              {product.productPrice}
            </div>
          </div>
          <div className="full-food-card__description__header__second-line">
            {product.productCategory}
          </div>
          <div className="full-food-card__description__header__third-line">
            <div className="full-food-card__description__header__third-line__stars">
              <img src={start_icon} alt="start_icon" />
              {product.productFavoritesCounter}
            </div>
            <div className="full-food-card__description__header__third-line__time">
              <img src={time_icon} alt="time_icon" />
              {`${product.productCookingTime} min.`}
            </div>
          </div>
        </div>
        <div className="full-food-card__description__about">
          <div className="full-food-card__description__about__title">About</div>
          <div className="full-food-card__description__about__description">
            {product.productDescription}
          </div>
        </div>

        <div className="full-food-card__description__footer">
          <div className="full-food-card__description__footer__btn-block">
            <button
              disabled={!currentGood?.quantity}
              onClick={() => {
                dispatch(decreaseQuantity(currentGood?.id));
              }}
              className="full-food-card__description__footer__btn-block__btn"
              type="button"
            >
              -
            </button>
            <span>{currentGood?.quantity}</span>
            <button
              disabled={!currentGood?.quantity}
              onClick={() => {
                dispatch(increaseQuantity(currentGood?.id));
              }}
              className="full-food-card__description__footer__btn-block__btn"
              type="button"
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              addItemToCard();
            }}
            className="full-food-card__description__footer__btn"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
