/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Select, Space, Upload } from 'antd';
import { useAppDispatch, useAppSelector } from '@core/hooks';
import {
  setUser,
  useRemoveUserMutation,
  useUpdateUserMutation,
} from '@store/users';

import './styles.scss';

export const AccountUpdateForm: React.FC = () => {
  const [updateUser] = useUpdateUserMutation();
  const [removedUser] = useRemoveUserMutation();
  const currentUser = useAppSelector(state => state.user.user);
  const [userName, setUserName] = useState<any>(currentUser?.userName);
  const [name, setName] = useState<any>(currentUser?.name);
  const [email, setEmail] = useState<any>(currentUser?.email);
  const [surname, setSurname] = useState<any>(currentUser?.surname);
  const [phoneNumber, setPhoneNumber] = useState<any>(currentUser?.phoneNumber);
  const [address, setAddress] = useState<any>(currentUser?.address);
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  const { Option } = Select;
  const redirect = useNavigate();
  const dispatch = useAppDispatch();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="29">+29</Option>
        <Option value="33">+33</Option>
      </Select>
    </Form.Item>
  );

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e?.fileList;
  };

  const removeUser = async () => {
    await removedUser({ id: currentUser?.id });
    localStorage.removeItem('persist:root');
    redirect('/auth');
  };

  const onFinish = async (fieldsValue: any) => {
    const values = {
      ...fieldsValue,
    };

    await updateUser({ id: currentUser?.id, data: values });
    dispatch(setUser(values));
    redirect('/profile');
  };

  const onUserNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(event.target.value);
    },
    [],
  );

  const onNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    [],
  );

  const onSurnameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSurname(event.target.value);
    },
    [],
  );

  const onEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );

  const onPhoneNumberChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPhoneNumber(event.target.value);
    },
    [],
  );

  const onAddressChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAddress(event.target.value);
    },
    [],
  );

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-circle">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item
          name={['userName']}
          label="User Name"
          rules={[{ required: false, type: 'string' }]}
        >
          <Input
            placeholder={userName === null ? 'User Name' : userName}
            onChange={onUserNameChange}
          />
        </Form.Item>
        <Form.Item
          name={['name']}
          label="Name"
          rules={[{ required: false, type: 'string' }]}
        >
          <Input
            placeholder={name === null ? 'Name' : name}
            onChange={onNameChange}
          />
        </Form.Item>
        <Form.Item
          name={['surname']}
          label="Surname"
          rules={[{ required: false, type: 'string' }]}
        >
          <Input
            placeholder={surname === null ? 'Surname' : surname}
            onChange={onSurnameChange}
          />
        </Form.Item>
        <Form.Item
          name={['email']}
          label="Email"
          rules={[{ required: true, type: 'email' }]}
        >
          <Input
            placeholder={email === null ? 'Email' : email}
            onChange={onEmailChange}
          />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[
            { required: false, message: 'Please input your phone number!' },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{ width: '100%' }}
            placeholder={phoneNumber === null ? 'Phone Number' : phoneNumber}
            onChange={onPhoneNumberChange}
          />
        </Form.Item>
        <Form.Item label="Address">
          <Space.Compact onChange={onAddressChange}>
            <Form.Item
              name={['address', 'city']}
              noStyle
              rules={[{ required: false, message: 'City' }]}
            >
              <Select placeholder={address === null ? 'city' : address.city}>
                <Option value="minsk">Minsk</Option>
                <Option value="brest">Brest</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={['address', 'street']}
              noStyle
              rules={[{ required: false, message: 'Street is required' }]}
            >
              <Input
                style={{ width: '50%' }}
                placeholder={address === null ? 'street' : address.street}
              />
            </Form.Item>
          </Space.Compact>
        </Form.Item>
        <Form.Item className="account-update-form__btn-block">
          <Button
            className="account-update-form__btn-block__save-btn"
            htmlType="submit"
          >
            Save
          </Button>
          <Button
            className="account-update-form__btn-block__delete-btn"
            onClick={() => removeUser()}
          >
            Delete account
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
