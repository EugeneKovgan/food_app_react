import React from 'react';
import { PromoCode, TotalPrice } from '@components/ui-kit';
import { OrderCard } from '@components/ui-kit/order-card';
import { OrderTitle } from '@components/ui-kit/order-title';

import './styles.scss';

export const MyOrder: React.FC = () => {
  return (
    <div className="container">
      <div className="my-order">
        <OrderTitle />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <PromoCode />
        <TotalPrice />
        <button type="button" className="my-order__btn">
          CONFIRM ORDER
        </button>
      </div>
    </div>
  );
};
