/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Loader,
  NotificationCard,
  NotificationTitle,
} from '@components/ui-kit';
import { useAppSelector } from '@core/hooks';
import { useGetAllCouriersQuery } from '@store/couriers';
import { ICouriers } from '@store/couriers/models';

import './styles.scss';

export const Notification: React.FC = () => {
  const { data, isLoading } = useGetAllCouriersQuery('couriers');
  const currentUser = useAppSelector(state => state.user.user);
  const [lastOrder, setLastOrder] = useState(0);

  useEffect(() => {
    if (currentUser?.orderList?.length) {
      setLastOrder(currentUser?.orderList.length - 1);
    }
  }, []);

  return (
    <>
      <NotificationTitle />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="notification">
          <div className="notification__couriers-list">
            Awaitables couriers in your location
          </div>
          {data.map((courier: ICouriers) => {
            if (courier?.courierCity === currentUser?.address.city) {
              return (
                <NotificationCard
                  courier={courier}
                  key={courier.id}
                  customerAddress={currentUser.address}
                />
              );
            }
          })}
        </div>
      )}
    </>
  );
};
