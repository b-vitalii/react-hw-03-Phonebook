import React from 'react';
import PropTypes from 'prop-types';
import styles from './contacts.module.css';

const Contacts = ({ contacts, onRemoveContact }) => (
  <ul className={styles.TaskList}>
    {contacts.map((contact) => (
      <li className = {styles.TaskList_item}key={contact.id}>
        {contact.name + ":" + contact.number}
        {
          <button
            className={styles.TaskList_button}
            type="button"
            name="delte"
            onClick={() => onRemoveContact(contact.id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
  })),
}
export default Contacts;