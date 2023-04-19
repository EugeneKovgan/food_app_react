import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Select, Space } from 'antd';
import { UploadAvatar } from '@components/ui-kit';
import { useAppSelector } from '@core/hooks';

import './styles.scss';

export const AccountUpdateForm: React.FC = () => {
  const currentUser = useAppSelector(state => state.user.user);
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="29">+29</Option>
        <Option value="33">+33</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="account-update-form">
      <Checkbox
        checked={componentDisabled}
        onChange={e => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
      >
        <UploadAvatar />
        <Form.Item label="User Name">
          <Input placeholder={currentUser?.userName} />
        </Form.Item>
        <Form.Item name={['user', 'name']} label="Name">
          <Input placeholder={currentUser?.name} />
        </Form.Item>
        <Form.Item name={['surname', 'surname']} label="Surname">
          <Input placeholder={currentUser?.surname} />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[{ type: 'email' }]}
        >
          <Input placeholder={currentUser?.email} />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: 'Please input your phone number!' },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{ width: '100%' }}
            placeholder={currentUser?.phoneNumber}
          />
        </Form.Item>
        <Form.Item label="Address">
          <Space.Compact>
            <Form.Item
              name={['address', 'province']}
              noStyle
              rules={[{ required: true, message: 'City' }]}
            >
              <Select placeholder="Check you city">
                <Option value="minsk">Minsk</Option>
                <Option value="brest">Brest</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={['address', 'street']}
              noStyle
              rules={[{ required: true, message: 'Street is required' }]}
            >
              <Input style={{ width: '50%' }} placeholder="Input street" />
            </Form.Item>
          </Space.Compact>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Save</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
