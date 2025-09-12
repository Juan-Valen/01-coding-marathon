import React from "react";
import './Contact.css';

function Contact({ contact, onDelete }) {
  const { name, email, phone, address, company } = contact;

  return (
    <li className="contact-item">
      <div><span className="label">Name:</span> {name}</div>
      <div><span className="label">Email:</span> {email}</div>
      <div><span className="label">Phone:</span> {phone}</div>
      <div><span className="label">Address:</span> {address}</div>
      <div><span className="label">Company:</span> {company}</div>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default Contact;
