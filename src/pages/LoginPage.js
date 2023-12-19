import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';
import { PagesBlock, PagesH1 } from './pages.styled';

export default function LoginPage() {
  return (
    <PagesBlock>
      <PagesH1>Wellcome to LoginPage!</PagesH1>
      <LoginForm />
    </PagesBlock>
  );
}
