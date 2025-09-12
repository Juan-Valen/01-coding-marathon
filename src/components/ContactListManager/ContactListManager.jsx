import React, { useState } from "react";
import Contact from "./Contact";
import './ContactListManager.css';

function ContactListManager() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    company: ""
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewContact((prev) => ({ ...prev, [name]: value }));
  }

  function addContact() {
    const { name, email } = newContact;
    if (name.trim() === "" || email.trim() === "") {
      alert("Name and email are required.");
      return;
    }

    setContacts((prev) => [...prev, newContact]);
    setNewContact({
      name: "",
      email: "",
      phone: "",
      address: "",
      company: ""
    });
  }

  function deleteContact(index) {
    setContacts((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="contact-list">
      <h1>Contact List Manager</h1>

      <section className="form-section">
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={newContact.name}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={newContact.email}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={newContact.phone}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Address:
            <input
              type="text"
              name="address"
              value={newContact.address}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Company:
            <input
              type="text"
              name="company"
              value={newContact.company}
              onChange={handleInputChange}
            />
          </label>

          <button type="button" onClick={addContact}>Add Contact</button>
        </form>
      </section>

      <section className="list-section">
        <ol>
          {contacts.map((contact, index) => (
            <Contact
              key={index}
              contact={contact}
              onDelete={() => deleteContact(index)}
            />
          ))}
        </ol>
      </section>
    </div>
  );
}

export default ContactListManager;
