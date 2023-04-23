import React from 'react';
import { useAppSelector } from '@core/hooks';

import './styles.scss';

export const HistoryOrder: React.FC = () => {
  const currentUser = useAppSelector(state => state.user.user);

  return (
    <div className="history-order">
      <div className="order-progress__title">{`You made ${currentUser?.orderList.length} orders`}</div>
      {currentUser?.orderList.map((item: any) => {
        return <div key={item?.id}>Data: {item?.data}</div>;
      })}
    </div>
  );
};
