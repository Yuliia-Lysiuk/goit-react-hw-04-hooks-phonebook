import React from 'react';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Phonebook, SecondTitle, Title } from './App.styled';

function App() {
  const contactsList = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('CONTACTS')) || [...contactsList];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('CONTACTS', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmitForm = data => {
    const newName = contacts.some(contact => contact.name === data.name);
    if (newName) {
      return alert(`${data.name} is already in contacts`);
    }

    setContacts(prevState => [...prevState, data]);
  };

  const handleChangeFilter = e => {
    const name = e.currentTarget.value;
    setFilter(name);
  };

  const handleDeleteContact = e => {
    const id = e.currentTarget.value;
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  function visibleContacts() {
    const normalizedFilter = filter.toLowerCase();
    const filtreContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return filtreContacts;
  }
  return (
    <Phonebook>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleSubmitForm} />
      <SecondTitle>Contacts</SecondTitle>
      <Filter value={filter} onChange={handleChangeFilter} />
      <ContactList
        contacts={contacts}
        filterContacts={visibleContacts()}
        onClick={handleDeleteContact}
      />
    </Phonebook>
  );
}

export default App;
