import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { fields } from "./fields";
import { initialState } from "../PhoneBookContacts/initialState";
import {fields} from './fields';


 class ContactForm extends Component {

    state = {...initialState};

     handleChange = (name, e) => {
         this.setState({
             [name]: e.currentTarget.value
         })
     };
    
    // handleChange = (e) => {
    //     const { name, value } = e.currentTarget;
    //     this.setState({
    //         [name]: value
    //     })
    // }
     
    // handleSubmit = e => {
    //     e.preventDefault();
    //     const {name, number} = this.state;
    //     const {contacts, onAddContact} = this.props;
    //     const contactInState = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    //     contactInState && alert(`${contactInState.name} is already in contacts!`);
    //     if (!contactInState && name && number) {
    //         onAddContact(name, number);
    //         this.setState(initialState);
    //         return
    //     }
    //  }
     
     handleSubmit = e => {
         e.preventDefault();
         const { name, number } = this.state;
         const { onSubmitProp } = this.props;
         onSubmitProp(name, number)
         this.reset();
     };
    
     reset = () => {
         this.setState({ name: "", number: "" })
     };
     
    render() {
        const { name, number } = this.state;
        const { handleChange, handleSubmit } = this;
        return (
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Name</p>
                    <input {...fields.userName}
                        value={name}
                        onChange={e => handleChange('name', e)}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" />
                </label>
                <label>
                    <p>Number</p>
                    <input {...fields.userPhone}
                        value={number}
                        onChange={e => handleChange('number', e)}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" />
                    </label>
                <button type="submit" className={styles.buttonForm}>Add contact</button>
            </form>
        )
    }
}
 
export default ContactForm;

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onSubmitProp: PropTypes.func.isRequired,
}