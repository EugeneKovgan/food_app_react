import React from 'react';
import call_icon from 'assets/images/icons/call.svg';
import map_icon from 'assets/images/icons/map.svg';
import clock_icon from 'assets/images/icons/time.svg';
import { config } from '@core/config';

import './styles.scss';

export const NotificationCard: React.FC<any> = ({ courier }) => {
  return (
    <div className="container">
      <div className="notification-card">
        <div className="notification-card__header-block">
          <div className="notification-card__header-block__left-block">
            <div className="notification-card__header-block__left-block__avatar">
              <img
                src={`${config.API_URL}/${courier?.avatar?.path}`}
                alt="img"
              />
            </div>

            <div className="notification-card__header-block__left-block__description">
              <div className="notification-card__header-block__left-block__description__name">
                {courier?.name}
              </div>
              <div className="notification-card__header-block__left-block__description__id">
                {courier?.id}
                {/* ID : 78A6767 */}
              </div>
              <div className="notification-card__header-block__left-block__description__courier">
                Food courier
              </div>
            </div>
          </div>

          <button
            type="button"
            className="notification-card__header-block__phone"
          >
            <img src={call_icon} alt="call" />
          </button>
        </div>

        <div className="notification-card__footer">
          <div className="notification-card__footer__time">
            <div
              className="notification-card__footer__time__img
          "
            >
              <img src={clock_icon} alt="clock_icon" />
            </div>
            <div className="notification-card__footer__time__description">
              <div className="notification-card__footer__time__description__title">
                Your Delivery Time
              </div>
              <div className="notification-card__footer__time__description__text">
                {courier?.deliveryTime} minutes
              </div>
            </div>
          </div>

          <div className="notification-card__footer__place">
            <div
              className="notification-card__footer__place__img
          "
            >
              <img src={map_icon} alt="map_icon" />
            </div>
            <div className="notification-card__footer__place__description">
              <div className="notification-card__footer__place__description__title">
                Your Delivery Address
              </div>
              <div className="notification-card__footer__place__description__text">
                {courier?.address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
