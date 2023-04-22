/* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import cross_icon from 'assets/images/icons/close.svg';
import like_icon from 'assets/images/icons/favorite.svg';
import like_icon_fill from 'assets/images/icons/favorite-fill.svg';
import { config } from '@core/config';
import { useAppSelector } from '@core/hooks';
import { addToBasket } from '@store/basket';
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

  useEffect(() => {
    setFavoriteList(currentUser?.favoritesProducts);
  }, [likeToggle]);

  useEffect(() => {
    setFavoriteList(currentUser?.favoritesProducts);
  }, [favoriteList]);

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
            ss
          </div>
        </div>
        <div className="full-food-card__description__about">
          <div className="full-food-card__description__about__title">About</div>
          <div className="full-food-card__description__about__description">
            {product.productDescription}
          </div>
        </div>

        <button
          onClick={() => {
            addItemToCard();
          }}
          className="full-food-card__description__btn"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};