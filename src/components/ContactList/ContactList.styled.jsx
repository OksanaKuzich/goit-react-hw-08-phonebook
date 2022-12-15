import styled from 'styled-components';

export const ListContacts = styled.ul`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #fffeba;
  border-radius: 5px;
  border: 1px solid #000;
`;

export const ListContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const ButtonDelete = styled.button`
  background-color: inherit;
  color: red;
  border-style: none;

  :hover,
  :focus {
    color: #ff9100;
  }
`;
