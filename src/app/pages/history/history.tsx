import React from 'react';
import { OrderProgress } from '@components/ui-kit';
import { useAppSelector } from '@core/hooks';
import { getGoodsInBasket } from '@store/basket';

import './styles.scss';

export const History: React.FC = () => {
  const goodsInBasket = useAppSelector(getGoodsInBasket);

  return (
    <div className="container">
      <div className="history">
        <OrderProgress goodsInBasket={goodsInBasket} />
      </div>
    </div>
  );
};
