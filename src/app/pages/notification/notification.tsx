import React from 'react';
import { NotificationCard, NotificationTitle } from '@components/ui-kit';

import './styles.scss';

export const Notification: React.FC = () => {
  return (
    <div className="container">
      <NotificationTitle />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
    </div>
  );
};
