import { Field, Formik, Form } from 'formik';
import React from 'react';

export default function RegisterForm() {
  const handleSubmit = (e, reset) => {
    console.log(e);
    reset.resetForm();
  };
  return (
    <>
      <h2>RegisterForm:</h2>
      <Formik
        initialValues={{
          userName: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
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
        </Form>
      </Formik>
    </>
  );
}
