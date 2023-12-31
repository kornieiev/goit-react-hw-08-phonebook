import { Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import {
  RegistrFormBlock,
  RegistrFormButton,
  RegistrFormField,
} from './RegistrForm.styled';

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
          userName: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <RegistrFormBlock>
          <label htmlFor="userName">User Name:</label>
          <RegistrFormField id="userName" name="userName" placeholder="John" />
          <br />
          <label htmlFor="email">Email:</label>
          <RegistrFormField
            id="email"
            name="email"
            placeholder="jane@smile.com"
          />
          <br />

          <label htmlFor="password">Password:</label>
          <RegistrFormField
            id="password"
            name="password"
            placeholder="password"
            type="password"
          />
          <br />
          <RegistrFormButton type="submit">Register</RegistrFormButton>
        </RegistrFormBlock>
      </Formik>
    </>
  );
}
