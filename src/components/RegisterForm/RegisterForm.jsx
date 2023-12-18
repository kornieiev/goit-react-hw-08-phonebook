import { Field, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { RegistrFormBlock } from './RegistrForm.styled';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e, reset) => {
    const newContact = {
      name: e.userName,
      email: e.email,
      password: e.password,
    };
    dispatch(register(newContact));
    reset.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          userName: 'JohnJohn',
          email: 'jane@acme.com',
          password: 'JohnJohn',
        }}
        onSubmit={handleSubmit}
      >
        <RegistrFormBlock>
          <label htmlFor="userName">User Name:</label>
          <Field id="userName" name="userName" placeholder="John" />
          <br />
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
          <button type="submit">Register</button>
        </RegistrFormBlock>
      </Formik>
    </>
  );
}
