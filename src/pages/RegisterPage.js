import RegisterForm from 'components/RegisterForm/RegisterForm';
import React from 'react';
import { PagesBlock, PagesH1 } from './pages.styled';

export default function RegisterPage() {
  return (
    <PagesBlock>
      <PagesH1>Wellcome to RegisterPage</PagesH1>

      <RegisterForm />
    </PagesBlock>
  );
}
