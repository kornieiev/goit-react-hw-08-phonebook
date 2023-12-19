import React from 'react';
import { PagesBlock, PagesHeader, PagesParagraph } from './pages.styled';

export default function HomePage() {
  return (
    <PagesBlock>
      <PagesHeader>Welcome!</PagesHeader>
      <PagesParagraph>
        We propose you the solution to keep in safe your personal contacts.
      </PagesParagraph>
      <PagesParagraph>
        Here you can create, edit and delete your personal contact list.
      </PagesParagraph>
      <PagesParagraph>
        Please register or sign in to start using the aplication.
      </PagesParagraph>
      <PagesParagraph>
        <b>Enjoy!</b>
      </PagesParagraph>
    </PagesBlock>
  );
}
