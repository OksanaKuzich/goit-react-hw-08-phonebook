import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { getContactsArray, getIsLoading, getError } from 'redux/contacts/contactsSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const array = useSelector(getContactsArray);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      {error && <b>{error}</b>}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
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
    </div>
  );
};
