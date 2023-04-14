import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input } from 'antd';
import { useAppDispatch } from '@core/hooks';
import { useCreateUserMutation, useGetCurrentUserQuery } from '@store/users';
import { setToken, setUser } from '@store/users/models/auth-slice';

import './styles.scss';

export const RegistrationForm: React.FC = () => {
  const [userName, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const onUsernameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    },
    [],
  );

  const onEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );

  const onPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [],
  );

  const onConfirmPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(event.target.value);
    },
    [],
  );

  const redirect = useNavigate();
  const dispatch = useAppDispatch();

  const [createdUser, { data: currentUser, isSuccess, isError }] =
    useCreateUserMutation();

  const { data: allCreatedUser } = useGetCurrentUserQuery(currentUser?.token);

  const onFinish = async () => {
    if (userName && email && password && confirmPassword) {
      await createdUser({ userName, email, password });
      dispatch(setUser(allCreatedUser.user));
    } else {
      alert('All gaps must be field !');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (isError) {
      alert('check all fields');
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(currentUser.token));
      redirect('/favorite');
    }
  }, [isSuccess]);

  return (
    <div className="container">
      <Form
        className="registration-form"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="registration-form__input-block">
          <Form.Item
            className="registration-form__input-block__item"
            label="Username"
            name="userName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              onChange={onUsernameChange}
              className="registration-form__input-block__item__input"
            />
          </Form.Item>

          <Form.Item
            className="registration-form__input-block__item"
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: 'Please input your email address!' },
            ]}
          >
            <Input
              onChange={onEmailChange}
              className="registration-form__input-block__item__input"
            />
          </Form.Item>
          <Form.Item
            className="registration-form__input-block__item"
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              onChange={onPasswordChange}
              className="registration-form__input-block__item__input"
            />
          </Form.Item>

          <Form.Item
            className="registration-form__input-block__item"
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              { required: true, message: 'Please confirm your password!' },
            ]}
          >
            <Input.Password
              onChange={onConfirmPasswordChange}
              className="registration-form__input-block__item__input"
            />
          </Form.Item>
        </div>

        <Form.Item className="registration-form__btn-block">
          <button type="submit" className="login-form__btn-block__btn">
            Signup
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};
