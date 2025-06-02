import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const onDeleteContact = (idToDelete) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== idToDelete)
    );
  };

  const [filter, setFilter] = useState("");

  const onFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filter={filter} onFilterChange={onFilterChange} />
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}
