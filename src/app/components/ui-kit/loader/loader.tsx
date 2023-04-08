import React from 'react';
import { Spin } from 'antd';

import './styles.scss';

export const Loader: React.FC = () => {
  return (
    <div className="loader">
      <Spin size="large" tip="Loading..." />
    </div>
  );
};
