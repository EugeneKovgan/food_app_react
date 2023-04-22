import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
  key: string;
  setFullCard: (value: boolean) => void;
  setCurrentProduct: (product: IProduct) => void;
};

export const FoodCard: React.FC<PropsType> = ({
  product,
  setFullCard,
  setCurrentProduct,
}) => {
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

  const fullCardToggle = () => {
    setFullCard(true);
    setCurrentProduct(product);
  };

  return (
    <div className="food-card">
      <div className="food-card__img-block">
        <img
          role="presentation"
          className="food-card__img-block__bg"
          onClick={fullCardToggle}
          src={`${config.API_URL}/${product.picture?.path}`}
          alt="img"
        />
        <button
          onClick={() => likeToggle()}
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
