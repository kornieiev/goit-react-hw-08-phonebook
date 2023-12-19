import styled from 'styled-components';

export const UserMenuWrap = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 10px;
`;

export const UserMenuLogOutButton = styled.button`
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px 10px;
  height: 30px;
  background-color: rgb(47, 47, 130);
  color: white;
  &:hover {
    color: yellow;
  }
`;

export const UserMenuP = styled.p`
  font-size: 20px;
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 12px;
    font-weight: 200;
    margin-left: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;
