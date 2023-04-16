import React from 'react';
import { config } from '@core/config';
import { useAppDispatch } from '@core/hooks';
import {
  decreaseQuantity,
  increaseQuantity,
  InitialStateType,
} from '@store/basket';

import './styles.scss';

type PropsType = {
  good: InitialStateType;
  key: string;
};

export const OrderCard: React.FC<PropsType> = ({ good }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="order-card">
      <div className="order-card__img-block">
        <img
          className="order-card__img-block__img"
          src={`${config.API_URL}/${good.picture.path}`}
          alt="img"
        />
      </div>
      <div className="order-card__description">
        <div className="order-card__description__title">{good.productName}</div>
        <div className="order-card__description__food-category">
          {good.productCategory}
        </div>
        <div className="order-card__description__footer">
          <div className="order-card__description__footer__price">
            <span>$</span>
            {good.productPrice}
          </div>
          <div className="order-card__description__footer__btn-base">
            <div className="order-card__description__footer__btn-base__btn-block">
              <button
                onClick={() => {
                  dispatch(decreaseQuantity(good.id));
                }}
                className="order-card__description__footer__btn-base__btn-block__btn"
                type="button"
              >
                -
              </button>
              <span>{good.quantity}</span>
              <button
                onClick={() => {
                  dispatch(increaseQuantity(good.id));
                }}
                className="order-card__description__footer__btn-base__btn-block__btn"
                type="button"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
