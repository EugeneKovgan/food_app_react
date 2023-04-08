import React, { useCallback, useState } from 'react';
import { Button, Form, Input } from 'antd';

import './styles.scss';

export const RegistrationForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
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

  const onFinish = async () => {
    if (username && email && password && confirmPassword) {
      // await loginUser({ email, password });
      // dispatch(setUser(allLoggedUser.user));
    } else {
      alert('All gaps myst be field !');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
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
          name="username"
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
          rules={[{ required: true, message: 'Please confirm your password!' }]}
        >
          <Input.Password
            onChange={onConfirmPasswordChange}
            className="registration-form__input-block__item__input"
          />
        </Form.Item>
      </div>

      <Form.Item className="registration-form__btn-block">
        <Button type="primary" htmlType="submit">
          Signup
        </Button>
      </Form.Item>
    </Form>
  );
};
