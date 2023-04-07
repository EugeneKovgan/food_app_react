import React from 'react';
import { Button, Form, Input } from 'antd';

import './styles.scss';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

export const LoginForm: React.FC = () => {
  return (
    <Form
      className="login-form"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        className="login-form__item"
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input className="login-form__item__input" />
      </Form.Item>

      <Form.Item
        className="login-form__item"
        label="Email Address"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password className="login-form__item__input" />
      </Form.Item>

      <Button className="login-form__item__link" type="link" block>
        Forgot Password?
      </Button>

      <Form.Item className="login-form__btn-block">
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
