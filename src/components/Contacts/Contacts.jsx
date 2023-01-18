import React from 'react';
import PropTypes from 'prop-types';
import ContactItems from 'components/ContactItem/ContactItem';
import { List } from './Contacts.styled';
export const Contacts = ({ contacts, onChange }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItems
          key={id}
          name={name}
          number={number}
          onChange={onChange}
        ></ContactItems>
      ))}
    </List>
  );
};

Contacts.propTyps = {
  onChange: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default Contacts;
