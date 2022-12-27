import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import {
  getContactsArray,
  getIsLoading,
  getError,
} from 'redux/contacts/contactsSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const Contacts = () => {
  const dispatch = useDispatch();
  const array = useSelector(getContactsArray);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxWidth="xs">
      {error ? (
        <b>{error}</b>
      ) : (
        <>
          <Typography align="center" variant="h5" marginBottom={3}>
            Add new contact
          </Typography>
          <ContactForm />
          <Typography align="center" variant="h5" margin={3}>
            All your contacts
          </Typography>

          {loading ? (
            <b>Loading contacts...</b>
          ) : array.length === 0 ? (
            <p>Please, enter your first contact</p>
          ) : (
            <>
              <Filter />
              <ContactList />
            </>
          )}
        </>
      )}
    </Container>
  );
};
