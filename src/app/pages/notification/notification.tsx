import React from 'react';
import {
  Footer,
  NotificationCard,
  NotificationTitle,
} from '@components/ui-kit';

import './styles.scss';

export const Notification: React.FC = () => {
  return (
    <div className="container">
      <div className="notification">
        <NotificationTitle />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <Footer />
      </div>
    </div>
  );
};
