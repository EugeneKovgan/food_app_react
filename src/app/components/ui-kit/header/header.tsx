import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import './styles.scss';

export const Header: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header__title">Let’s eat Quality food </div>
        <Avatar className="header__avatar" size={64} icon={<UserOutlined />} />
      </div>
    </div>
  );
};
