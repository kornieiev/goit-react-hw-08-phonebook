import { useAuth } from 'components/hooks';
import { IoIosContacts } from 'react-icons/io';
import React from 'react';
import {
  Nav,
  NaviLogoAccent,
  NaviLogoContacts,
  NaviLogoMain,
} from './Navigation.styled';

export default function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Nav>
        <NaviLogoMain to="/">
          <NaviLogoAccent>
            &nbsp;CONTACT
            <IoIosContacts />
          </NaviLogoAccent>
        </NaviLogoMain>
        {isLoggedIn && (
          <NaviLogoContacts to="/contacts">Contacts</NaviLogoContacts>
        )}
      </Nav>
    </>
  );
}
