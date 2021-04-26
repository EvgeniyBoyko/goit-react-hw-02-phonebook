import React from 'react';
import styles from "./ContactList.module.css";
import PropTypes from 'prop-types';


const ContactItem = ({ name, number, onClickRemove }) => {
    return (
        <li className={styles.contactItem}>
            <p>{name}: {number}</p>
            <button type="button" className={styles.contactsListButton} onClick={onClickRemove}>Delete</button>
        </li>
    );
};

const ContactList = ({ filteredContacts, onRemove }) => {
    const result = filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} onClickRemove={() => onRemove(id)} />
    ));
    
    return (
        filteredContacts.length > 0 && (
            <ul className={styles.contactsList}>
                {result}
            </ul>
        )
    )
};
 
export default ContactList;

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClickRemove: PropTypes.func.isRequired,
}

ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onRemove: PropTypes.func.isRequired,
}