import React from 'react';
import {
  Loader,
  NotificationCard,
  NotificationTitle,
} from '@components/ui-kit';
import { useGetAllCouriersQuery } from '@store/couriers';
import { ICouriersRequest } from '@store/couriers/models';

import './styles.scss';

export const Notification: React.FC = () => {
  const { data = [], isLoading } = useGetAllCouriersQuery();

  return (
    <>
      <NotificationTitle />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="notification">
          {data.map((item: ICouriersRequest) => {
            return <NotificationCard props={item} key={item.id} />;
          })}
        </div>
      )}
    </>
  );
};
