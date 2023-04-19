/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { AntCloudOutlined, BulbOutlined } from '@ant-design/icons';
import { Switch } from 'antd';

import './styles.scss';

export const AccountTitle: React.FC = () => {
  return (
    <div className="account__header">
      <div className="account__header__title">My Account</div>
      <Switch
        checkedChildren={<BulbOutlined />}
        unCheckedChildren={<AntCloudOutlined />}
        defaultChecked
      />
    </div>
  );
};
