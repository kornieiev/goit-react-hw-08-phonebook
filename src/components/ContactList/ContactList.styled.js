import styled from 'styled-components';

export const ListItem = styled.li`
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e2e3de;
  border-radius: 5px;
  max-width: 90%;
`;

export const DeleteButton = styled.button`
  border: 1px solid white;
  border-radius: 5px;
  height: 30px;
  background-color: rgb(47, 47, 130);
  color: white;
  &:hover {
    color: yellow;
  }
`;

export const EditButton = styled.button`
  border: 1px solid white;
  border-radius: 5px;
  height: 30px;
  background-color: rgb(47, 47, 130);
  color: white;
  &:hover {
    color: yellow;
  }
  margin-right: 20px;
`;
