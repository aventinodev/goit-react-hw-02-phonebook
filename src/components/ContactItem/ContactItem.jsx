import React from 'react';
import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

const ContactItems = ({ id, name, number, onChange }) => {
  return (
    <Item key={id}>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => onChange(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItems.propTyps = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactItems;
