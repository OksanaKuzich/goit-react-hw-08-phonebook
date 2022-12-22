import {
  FormStyles,
  LabelStyles,
  InputStyles,
  ButtonAdd,
} from './ContactForm.styled';
import { getContactsArray } from 'redux/contacts/contactsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';

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
    const item = { name, phone };
    e.target.reset();

    const isDublicate = array.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    isDublicate
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(item));
  };

  return (
    <FormStyles onSubmit={addContactsItem}>
      <LabelStyles>
        Name
        <InputStyles
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Ivan"
          onChange={handleInputName}
        />
      </LabelStyles>
      <LabelStyles>
        Number
        <InputStyles
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="111-11-11"
          onChange={handleInputNumber}
        />
      </LabelStyles>
      <ButtonAdd type="submit">Add contact</ButtonAdd>
    </FormStyles>
  );
}
