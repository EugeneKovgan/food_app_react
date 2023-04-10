import React from 'react';
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
      </div>
    </div>
  );
};
