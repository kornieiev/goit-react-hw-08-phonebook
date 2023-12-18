import { Field, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { LoginFormBlock } from './LoginForm.styled';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e, reset) => {
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
          email: 'jane@acme.com',
          password: 'JohnJohn',
        }}
        onSubmit={handleSubmit}
      >
        <LoginFormBlock>
          <label htmlFor="email">Email:</label>
          <Field id="email" name="email" placeholder="jane@acme.com" />
          <br />

          <label htmlFor="password">Password:</label>
          <Field
            id="password"
            name="password"
            placeholder="password"
            type="password"
          />
          <br />
          <button type="submit">Submit</button>
        </LoginFormBlock>
      </Formik>
    </>
  );
}
