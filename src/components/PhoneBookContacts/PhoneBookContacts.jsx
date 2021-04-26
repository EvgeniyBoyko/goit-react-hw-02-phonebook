import React, { Component } from 'react';
// import styles from './PhoneBookContacts.module.css';
import { v4 as uuidv4 } from 'uuid';
import Section from '../Section/index';
import ContactForm from '../ContactForm/index';
import ContactList from '../ContactList/index';
import Filter from '../Filter/index';
import { initialState } from "./initialState";


class PhoneBookContacts extends Component {

  state = { ...initialState };

  addContact = (name, number) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      }
    });
  };

  handleChangeFilter = filter => {
    this.setState({ filter });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  };

  handleRemove = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId)
      }
    })
  };

  render() {
    const { contacts, filter } = this.state;
    const { addContact, handleChangeFilter, handleRemove } = this;
    const filteredContacts = this.filteredContacts();

    return(
      <>
        <Section title={'Phonebook'}>
            <ContactForm contacts={contacts} onSubmitProp={addContact}/>
        </Section>
        <Section title={'Contacts'}>
          <Filter value={filter} onChangeFilter={handleChangeFilter}/>
          <ContactList filteredContacts={filteredContacts} onRemove={handleRemove} />
        </Section>
      </>
    )
  };
};
 
export default PhoneBookContacts;