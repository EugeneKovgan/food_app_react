import React, { useState } from 'react';
import { Radio, RadioChangeEvent, Space } from 'antd';
import masterCard from 'assets/images/icons/master-card.svg';

import './styles.scss';

export const PaymentMethod: React.FC = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="container">
      <div className="payment-method">
        <div className="payment-method__my-card">Payment Method</div>
        <div className="payment-method__block">
          <div className="payment-method__block__card">
            <div className="payment-method__block__card__header">
              <img src={masterCard} alt="masterCard" />
            </div>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={1}>Option A</Radio>
                <Radio value={2}>Option B</Radio>
                <Radio value={3}>Option C</Radio>
              </Space>
            </Radio.Group>
          </div>
          <button className="payment-method__block__card__btn" type="button">
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
};
