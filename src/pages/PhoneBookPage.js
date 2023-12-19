import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../redux/contacts/selectors';
import {
  PagesBlock,
  PagesH2,
  PagesHeader,
  PagesParagraph,
} from './pages.styled';
import { fetchContacts } from '../redux/contacts/operations';

export default function PhoneBookPage() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PagesBlock>
      <PagesHeader>Hi! Wellcome to your personal phone book!</PagesHeader>
      <ContactForm />
      {contacts.contacts.length > 0 ? (
        <div>
          <PagesH2>Here's your contact list:</PagesH2>
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
