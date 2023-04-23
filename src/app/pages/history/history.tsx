import React from 'react';
import { HistoryOrder, OrderProgress } from '@components/ui-kit';
import { useAppSelector } from '@core/hooks';
import { getGoodsInBasket, InitialStateType } from '@store/basket';

import './styles.scss';

export const History: React.FC = () => {
  const goodsInBasket = useAppSelector<InitialStateType[]>(getGoodsInBasket);

  return (
    <div className="container">
      <div className="history">
        <OrderProgress goodsInBasket={goodsInBasket} />
        <HistoryOrder />
      </div>
    </div>
  );
};
