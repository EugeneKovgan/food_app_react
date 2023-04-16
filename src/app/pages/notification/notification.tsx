import React from 'react';
import {
  Loader,
  NotificationCard,
  NotificationTitle,
} from '@components/ui-kit';
import { useGetAllCouriersQuery } from '@store/couriers';
import { ICouriers } from '@store/couriers/models';

import './styles.scss';

export const Notification: React.FC = () => {
  const { data, isLoading } = useGetAllCouriersQuery('couriers');

  return (
    <>
      <NotificationTitle />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="notification">
          {data.map((courier: ICouriers) => {
            return <NotificationCard courier={courier} key={courier.id} />;
          })}
        </div>
      )}
    </>
  );
};
