# Self-Assessment of code

### 1: Improving Component Logic and Validation

Initially, our ContactListManager.jsx component was functional and allowed users to add and delete contacts. However, it lacked proper input validation and did not handle edge cases like missing required fields or duplicate entries.

File: ContactListManager.jsx

**Original Implementation** 

```javascript
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

```
 - This implementation worked for basic cases but had limitations:
    - It relied on alert() for validation feedback.
    - It didn’t prevent duplicate contacts.
    - It didn’t validate email format or phone number structure.

 File: ContactListManager.jsx

 **Improved Implementation**

```javascript
function addContact() {
  const { name, email } = newContact;
  if (name.trim() === "" || email.trim() === "") {
    alert("Name and email are required.");
    return;
  }

  // Optional: Prevent duplicates
  const exists = contacts.some(
    (c) => c.name === newContact.name && c.email === newContact.email
  );
  if (exists) {
    alert("This contact already exists.");
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

```
### Key Improvements:
- **Validation Logic: Added checks for empty fields and potential duplicates.
- **User Feedback: Improved alert messages for clarity.
- **Scalability: Prepared the logic for future enhancements like email format validation or error display components.

---

### Refactoring Contact Display for Clarity
The original Contact.jsx component displayed contact information using emoji symbols and lacked semantic structure. This made the UI less accessible and harder to scan.

**Original Implementation**
 
```javascript
<li>
  <strong>{name}</strong><br />
  📧 {email}<br />
  📞 {phone}<br />
  🏠 {address}<br />
  🏢 {company}<br />
  <button onClick={onDelete}>Delete</button>
</li>

``` 
This version was visually playful but not ideal for professional use or screen readers.

**Refactored Implementation:**
```
<li className="contact-item">
  <div><span className="label">Name:</span> {name}</div>
  <div><span className="label">Email:</span> {email}</div>
  <div><span className="label">Phone:</span> {phone}</div>
  <div><span className="label">Address:</span> {address}</div>
  <div><span className="label">Company:</span> {company}</div>
  <button onClick={onDelete}>Delete</button>
</li>

```
**Key Improvements:** 
  - Semantic Structure: Used <div> and <span> for better readability and accessibility.
  - Labeling: Replaced emojis with clear text labels.
  - Maintainability: Easier to style and extend with additional fields or actions.

**Lessons Learned:**

 - Component Separation: Keeping logic and presentation separate improves clarity and reusability.  
 - alidation Matters: Even simple forms benefit from thoughtful input handling.
 - Accessibility and Clarity: Clear labels and semantic HTML enhance user experience and maintainability.