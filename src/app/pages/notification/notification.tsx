import React from 'react';
import {
  Footer,
  NotificationCard,
  NotificationTitle,
} from '@components/ui-kit';

import './styles.scss';

export const Notification: React.FC = () => {
  return (
    <div className="notification">
      <div className="container">
        <NotificationTitle />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </div>
      <Footer />
    </div>
  );
};
