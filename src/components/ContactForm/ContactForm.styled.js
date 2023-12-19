import styled from 'styled-components';

export const PhonebookWrap = styled.form`
  border: 1px solid black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

export const FormButton = styled.button`
  border: 1px solid white;
  border-radius: 5px;
  margin-top: 15px;
  width: 50%;
  height: 30px;
  background-color: rgb(47, 47, 130);
  color: white;
  transition: border-color 0.5s ease-in-out;
  transition: color 0.5s ease-in-out;
  &:hover {
    color: yellow;
  }
`;

export const FormInput = styled.input`
  width: 50%;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
`;

export const FormLabel = styled.label`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
