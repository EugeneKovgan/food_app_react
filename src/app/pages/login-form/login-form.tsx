import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Modal } from 'antd';
import { Loader } from '@components/ui-kit';
import { useAppDispatch, useAppSelector } from '@core/hooks';
import { useGetCurrentUserQuery, useLoginUserMutation } from '@store/users';
import { setToken, setUser } from '@store/users/models/auth-slice';

import './styles.scss';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const selectedToken: string = useAppSelector(state => state.user.token);

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

  const redirect = useNavigate();
  const dispatch = useAppDispatch();

  const [loginUser, { data: loggedUser, isLoading, isSuccess, isError }] =
    useLoginUserMutation();

  const { data: allLoggedUser } = useGetCurrentUserQuery(selectedToken);

  const onFinish = async () => {
    if (email && password) {
      await loginUser({ email, password });
      dispatch(setUser(allLoggedUser.user));
    } else {
      alert('login of password is empty');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const warning = () => {
    Modal.warning({
      title: 'Warning message',
      content: 'Check email or password',
    });
  };

  useEffect(() => {
    if (isError) {
      warning();
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(loggedUser.token));
      redirect('/favorite');
    }
  }, [isSuccess]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
                  {
                    required: true,
                    message: 'Please input your email address!',
                  },
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
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password
                  onChange={onPasswordChange}
                  className="login-form__input-block__item__input"
                />
              </Form.Item>

              <div className="login-form__input-block__link">
                Forgot Password?
              </div>
            </div>

            <Form.Item className="login-form__btn-block">
              <button type="submit" className="login-form__btn-block__btn">
                Login
              </button>
            </Form.Item>
          </Form>
        </div>
      )}
    </>
  );
};
