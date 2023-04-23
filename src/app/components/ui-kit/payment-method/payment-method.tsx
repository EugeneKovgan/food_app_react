import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Radio, RadioChangeEvent, Space } from 'antd';
import google from 'assets/images/icons/google.svg';
import masterCard from 'assets/images/icons/master-card.svg';
import payPal from 'assets/images/icons/paypal.svg';

import './styles.scss';

export const PaymentMethod: React.FC = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <div className="container">
      <div className="payment-method">
        <div className="payment-method__my-card">Payment Method</div>
        <div className="payment-method__block">
          <Radio.Group
            className="payment-method__block__cards"
            onChange={onChange}
            value={value}
          >
            <Space
              className="payment-method__block__cards-container"
              direction="vertical"
            >
              <div className="payment-method__block__cards-container__item-container">
                <img src={masterCard} alt="masterCard" />
                <Radio
                  className="payment-method__block__cards-container__item-container__main"
                  value={1}
                >
                  Credit Card
                </Radio>
              </div>

              <div className="payment-method__block__cards-container__item-container">
                <img src={payPal} alt="payPal" />
                <Radio
                  className="payment-method__block__cards-container__item-container__main"
                  value={2}
                >
                  Paypal
                </Radio>
              </div>

              <div className="payment-method__block__cards-container__item-container">
                <img src={google} alt="google" />
                <Radio
                  className="payment-method__block__cards-container__item-container__main"
                  value={3}
                >
                  Google Pay
                </Radio>
              </div>
            </Space>
          </Radio.Group>

          <button className="payment-method__block__btn" type="button">
            <PlusOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};
