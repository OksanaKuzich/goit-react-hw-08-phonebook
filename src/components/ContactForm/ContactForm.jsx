import { getContactsArray } from 'redux/contacts/contactsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

export function ContactForm() {
  const array = useSelector(getContactsArray);

  const handleInputName = e => {
    return e.currentTarget.value;
  };

  const handleInputNumber = e => {
    return e.currentTarget.value;
  };

  const dispatch = useDispatch();

  const addContactsItem = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const phone = e.target.elements.number.value;
    const contact = { name, number: phone };
    e.target.reset();

    const isDublicate = array.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    isDublicate
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(contact));
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={addContactsItem}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Ivan"
            onChange={handleInputName}
            variant="outlined"
            size="small"
          />
          <TextField
            label="Phone"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="111-11-11"
            onChange={handleInputNumber}
            variant="outlined"
            size="small"
          />
          <Button variant="contained" type="submit">
            Add
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
