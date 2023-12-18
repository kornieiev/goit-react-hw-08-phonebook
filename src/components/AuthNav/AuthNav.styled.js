import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNavWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 30px;
`;

export const AuthNavLink = styled(NavLink)`
  color: rgb(47, 47, 130);
  transition: color 0.4s ease;
  &.hover {
    color: yellow;
  }
  &.active {
    color: darkred;
  }
`;
