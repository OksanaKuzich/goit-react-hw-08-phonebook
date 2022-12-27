import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    // <ListContactsItem key={id}>
    //   {name}: {number}
    //   <ButtonDelete
    //     type="button"
    //     onClick={() => dispatch(deleteContact(id))}
    //     dataid={id}
    //   >
    //     Delete
    //   </ButtonDelete>
    // </ListContactsItem>
    <TableRow
      key={id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row" align="center">
        111
      </TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{number}</TableCell>
      <TableCell align="center">delete</TableCell>
    </TableRow>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
