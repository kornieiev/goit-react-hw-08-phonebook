import styled from 'styled-components';

export const SaveButton = styled.button`
  border: 1px solid white;
  border-radius: 5px;
  background-color: rgb(47, 47, 130);
  color: white;
  &:hover {
    color: yellow;
  }
`;

export const CancelButton = styled.button`
  border: 1px solid white;
  border-radius: 5px;
  background-color: rgb(47, 47, 130);
  color: white;
  &:hover {
    color: yellow;
  }
`;

export const InputChange = styled.input`
  width: 40%;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
`;

export const DivChangeWrap = styled.div`
  display: flex;
`;

export const EditFormForm = styled.form`
  display: flex;
  justify-content: space-around;
`;
