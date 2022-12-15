import styled from 'styled-components';

export const FormStyles = styled.form`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #fffeba;
  border-radius: 5px;
  border: 1px solid #000;
`;

export const LabelStyles = styled.label`
  display: flex;
  flex-direction: column;
`;

export const InputStyles = styled.input`
  margin-top: 5px;
`;

export const ButtonAdd = styled.button`
  width: 100px;
  height: 30px;

  :hover,
  :focus {
    background-color: #ffc979;
  }
`;
