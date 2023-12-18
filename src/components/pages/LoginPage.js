import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';
import { PagesBlock } from './pages.styled';

export default function LoginPage() {
  return (
    <PagesBlock>
      <h1>Wellcome to LoginPage</h1>
      <LoginForm />
    </PagesBlock>
  );
}
