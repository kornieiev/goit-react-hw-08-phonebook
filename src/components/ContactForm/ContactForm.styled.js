import styled from 'styled-components';

export const PhonebookWrap = styled.form`
  border: 1px solid black;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const FormButton = styled.button`
  background-color: #fff;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 3px 10px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    background-color: #55e65c;
  }
`;

export const FormInput = styled.input`
  width: 98%;
  height: 22px;
  margin-top: 5px;
`;

export const FormLabel = styled.label`
  margin-top: 20px;
`;
