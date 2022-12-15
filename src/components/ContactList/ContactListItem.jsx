import PropTypes from 'prop-types';
import { ButtonDelete, ListContactsItem } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactListItem = ({id, name, number }) => {
  const dispatch = useDispatch();


  return (
    <ListContactsItem key={id}>
      {name}: {number}
      <ButtonDelete type="button" onClick={(() => dispatch(deleteContact(id)))} dataid={id}>
        Delete
      </ButtonDelete>
    </ListContactsItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
