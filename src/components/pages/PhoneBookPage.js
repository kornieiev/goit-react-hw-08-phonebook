import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { PagesBlock, PagesHeader, PagesParagraph } from './pages.styled';

export default function PhoneBookPage() {
  const contacts = useSelector(selectContacts);

  return (
    <PagesBlock>
      <PagesHeader>Hi! Wellcome to your personal phone book!</PagesHeader>
      <ContactForm />
      {contacts.contacts.length > 0 ? (
        <div>
          <h2>Contacts</h2>
          <hr />
          <Filter />
          <hr />
          <ContactList />
        </div>
      ) : (
        <PagesParagraph>You don't have any contacts yet.</PagesParagraph>
      )}
    </PagesBlock>
  );
}
