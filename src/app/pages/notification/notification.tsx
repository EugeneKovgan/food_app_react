/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// import { CSSTransition } from 'react-transition-group';
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
  // const [animation, setAnimation] = useState(false);

  // useEffect(() => {
  //   setAnimation(true);
  // }, [data]);

  return (
    <>
      <NotificationTitle />
      {isLoading ? (
        <Loader />
      ) : (
        // <CSSTransition in={animation} timeout={500} classNames="my-node">
        <div className="notification">
          {data.map((courier: ICouriers) => {
            return <NotificationCard courier={courier} key={courier.id} />;
          })}
        </div>
        // </CSSTransition>
      )}
    </>
  );
};
