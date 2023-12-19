import { Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import {
  LoginFormBlock,
  LoginFormButton,
  LoginFormField,
} from './LoginForm.styled';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e, reset) => {
    console.log('e');
    const login = {
      email: e.email,
      password: e.password,
    };
    dispatch(logIn(login));
    reset.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <LoginFormBlock>
          <label htmlFor="email">Email:</label>
          <LoginFormField
            id="email"
            name="email"
            placeholder="jane@smile.com"
          />
          <br />

          <label htmlFor="password">Password:</label>
          <LoginFormField
            id="password"
            name="password"
            placeholder="password"
            type="password"
          />
          <br />
          <LoginFormButton type="submit">Submit</LoginFormButton>
        </LoginFormBlock>
      </Formik>
    </>
  );
}
