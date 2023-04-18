import React from 'react';
import { Steps } from 'antd';
import { useAppSelector } from '@core/hooks';
import { getGoodsInBasket } from '@store/basket';

import './styles.scss';

const descriptionOrder = 'Your order in basket';
const descriptionPayment = 'Payment made successfully';
const descriptionDelivery = 'Delivering';
const items = [
  {
    title: 'Order',
    description: descriptionOrder,
  },
  {
    title: 'Payment',
    description: descriptionPayment,
  },
  {
    title: 'Delivery',
    description: descriptionDelivery,
  },
];

export const OrderProgress: React.FC = () => {
  const goodsInBasket = useAppSelector(getGoodsInBasket);

  return goodsInBasket.length > 0 ? (
    <div className="container">
      <div className="order-progress">
        <div className="order-progress__title">Status of the current order</div>
        <div className="order-progress__block">
          <Steps
            current={0}
            percent={100}
            labelPlacement="vertical"
            items={items}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="container">
      <div className="order-progress__title">Make an order</div>
    </div>
  );
};
