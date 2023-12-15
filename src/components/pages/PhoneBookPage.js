import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';

export default function PhoneBookPage() {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <h1>Wellcome to PhoneBookPage</h1>

      <h1>Phonebook</h1>
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
        <p>You haven't any contact</p>
      )}
    </>
  );
}
