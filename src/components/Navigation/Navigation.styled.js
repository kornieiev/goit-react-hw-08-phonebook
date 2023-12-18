import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const NaviLogoContacts = styled(NavLink)`
  display: flex;
  transition: color 0.4s ease;
  &.active {
    color: darkred;
  }
  &:hover {
    color: yellow;
  }
`;

export const NaviLogoMain = styled(NavLink)``;

export const NaviLogoAccent = styled.span`
  background-color: rgb(47, 47, 130);
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'M PLUS Code Latin', monospace;
  /* font-family: 'Nunito Sans', sans-serif; */
  font-weight: 400;
  color: rgb(53, 168, 225);
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  letter-spacing: 2px;
  transition: color 0.4s ease;
  &:hover {
    color: yellow;
  }
`;
