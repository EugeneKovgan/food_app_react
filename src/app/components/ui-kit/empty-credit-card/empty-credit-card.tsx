import React from 'react';
import { PlusOutlined } from '@ant-design/icons';

import './styles.scss';

export const EmptyCreditCard: React.FC = () => {
  return (
    <div className="container">
      <div className="credit-card">
        <div className="credit-card__my-card">My Card</div>
        <div className="credit-card__block">
          <div className="credit-card__block__card">
            <div className="credit-card__block__card__empty">
              Please, add your card
            </div>
          </div>
          <button className="credit-card__block__card__btn" type="button">
            <PlusOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};
