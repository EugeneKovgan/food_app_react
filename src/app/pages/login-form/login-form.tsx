import React, { useCallback, useState } from 'react';
import { Button, Form, Input } from 'antd';

import './styles.scss';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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

  const onFinish = async () => {
    if (email && password) {
      // await loginUser({ email, password });
      // dispatch(setUser(allLoggedUser.user));
    } else {
      alert('login of password is empty');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container">
      <Form
        className="login-form"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="login-form__input-block">
          <Form.Item
            className="login-form__input-block__item"
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: 'Please input your email address!' },
            ]}
          >
            <Input
              onChange={onEmailChange}
              className="login-form__input-block__item__input"
            />
          </Form.Item>
          <Form.Item
            className="login-form__input-block__item"
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              onChange={onPasswordChange}
              className="login-form__input-block__item__input"
            />
          </Form.Item>

          <Button className="login-form__input-block__link" type="link" block>
            Forgot Password?
          </Button>
        </div>

        <Form.Item className="login-form__btn-block">
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
