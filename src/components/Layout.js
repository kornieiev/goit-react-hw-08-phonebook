import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">HomePage</NavLink>
            </li>
            <li>
              <NavLink to="/register">RegisterPage</NavLink>
            </li>
            <li>
              <NavLink to="/login">LoginPage</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">PhoneBook</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
