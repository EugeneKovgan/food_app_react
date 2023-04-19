import React from 'react';
import { AntCloudOutlined, BulbOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import { UploadAvatar } from '@components/ui-kit';

import './styles.scss';

export const Account: React.FC = () => {
  return (
    //  isLoading ? (
    // <Loader />
    // ) : (
    <div className="container">
      <div className="account">
        <div className="account__header">
          <div className="account__header__title">My account</div>
          <Switch
            checkedChildren={<BulbOutlined />}
            unCheckedChildren={<AntCloudOutlined />}
            defaultChecked
          />
        </div>

        <UploadAvatar />
      </div>
    </div>
  );
};
