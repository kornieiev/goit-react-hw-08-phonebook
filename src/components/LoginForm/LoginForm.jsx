import { Field, Form, Formik } from 'formik';
import React from 'react';

export default function LoginForm() {
  const handleSubmit = (e, reset) => {
    console.log(e);
    reset.resetForm();
  };
  return (
    <>
      <h2>LoginForm:</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
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
        </Form>
      </Formik>
    </>
  );
}
