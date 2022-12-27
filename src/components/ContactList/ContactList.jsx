import { ContactListItem } from './ContactListItem';
import { ListContacts } from './ContactList.styled';
import { useSelector } from 'react-redux';
import {
  getContactsArray,
  getContactsFilter,
} from 'redux/contacts/contactsSelectors';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const ContactList = () => {
  const array = useSelector(getContactsArray);
  const filterName = useSelector(getContactsFilter);

  const visibleContacts = array.filter(contact =>
    contact.name.toLowerCase().includes(filterName)
  );

  return (
    // <ListContacts>
    //   {visibleContacts.length !== 0 ? (
    //     visibleContacts.map(({ id, name, number }) => {
    //       return (
    //         <ContactListItem key={id} id={id} name={name} number={number} />
    //       );
    //     })
    //   ) : (
    //     <div>Not found...</div>
    //   )}
    // </ListContacts>

    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Avatar</TableCell>
          <TableCell align="center">Full name</TableCell>
          <TableCell align="center">Phone</TableCell>
          <TableCell align="center">Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactListItem key={id} id={id} name={name} number={number} />
          );
        })}
      </TableBody>
    </Table>
  );
};
