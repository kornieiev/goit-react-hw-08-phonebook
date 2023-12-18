import RegisterForm from 'components/RegisterForm/RegisterForm';
import React from 'react';
import { PagesBlock } from './pages.styled';

export default function RegisterPage() {
  return (
    <PagesBlock>
      <h1>Wellcome to RegisterPage</h1>

      <RegisterForm />
    </PagesBlock>
  );
}
