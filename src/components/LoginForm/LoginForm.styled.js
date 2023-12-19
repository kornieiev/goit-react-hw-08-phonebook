import { Field, Form } from 'formik';
import styled from 'styled-components';

export const LoginFormBlock = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const LoginFormField = styled(Field)`
  width: 50%;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
`;

export const LoginFormButton = styled.button`
  border: 1px solid white;
  border-radius: 5px;
  margin-top: 15px;
  width: 50%;
  height: 30px;
  background-color: rgb(47, 47, 130);
  color: white;
  &:hover {
    color: yellow;
  }
`;
