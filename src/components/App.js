import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Phonebook, SecondTitle, Title } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem('CONTACTS'));
    if (localContacts) {
      this.setState({ contacts: localContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('CONTACTS', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmitForm = data => {
    const newName = this.state.contacts.some(
      contact => contact.name === data.name
    );
    if (newName) {
      return alert(`${data.name} is already in contacts`);
    }

    this.setState({ contacts: [...this.state.contacts, data] });
  };

  handleChangeFilter = e => {
    const name = e.currentTarget.value;
    this.setState({ filter: name });
  };

  handleDeleteContact = e => {
    const id = e.currentTarget.value;
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <Phonebook>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.handleSubmitForm} />
        <SecondTitle>Contacts</SecondTitle>
        <Filter value={this.state.filter} onChange={this.handleChangeFilter} />
        <ContactList
          contacts={this.state.contacts}
          filterContacts={visibleContacts}
          onClick={this.handleDeleteContact}
        />
      </Phonebook>
    );
  }
}

export default App;
