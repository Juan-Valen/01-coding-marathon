import React from "react";
import './Contact.css'

function Contact({ contact, onDelete }) {
  const { name, email, phone, address, company } = contact;

  return (
    <li>
      <strong>{name}</strong><br/>
      📧 {email}<br />
      📞 {phone}<br />
      🏠 {address}<br />
      🏢 {company}<br />
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default Contact;

