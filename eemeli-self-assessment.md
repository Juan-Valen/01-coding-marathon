
### Example 1: Improving Code Quality

Initially, my SignupPage component was functional but lacked user-friendly validation feedback. The basic setup only captured input values without guiding the user on whether their email or password met requirements:  

```javascript
<input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
```

Refactored implementation: 

```javascript
<input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className={email ? (isValidEmail(email) ? "valid" : "invalid") : ""}
/>
{email && (
  <p className={isValidEmail(email) ? "success-text" : "error-text"}>
    {isValidEmail(email) ? "You typed a valid email" : "Invalid email"}
  </p>
)}

<input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className={password ? (isStrongPassword(password) ? "valid" : "invalid") : ""}
/>
{password && (
  <p className={isStrongPassword(password) ? "success-text" : "error-text"}>
    {isStrongPassword(password)
      ? "Your password is strong"
      : "Your password is too weak"}
  </p>
)}

```

### Key Improvements:
- **Live Feedback:** Users immediately see if their email or password is valid.
- **Stronger Security:** Password validation enforces minimum length and character requirements.

---

### Example 2: Adding Personalized Greetings
 
```javascript
<button className="signup-btn">Sign up</button>
``` 

### Solution:

```javascript
const greetings = {
  fi: "Moi",
  en: "Hello",
  de: "Hallo",
  fr: "Bonjour",
};

<p>{greetings[nationality]}</p>
<p>Your email address is: {email}</p>
{isValidEmail(email) && <p>Your email address is correct</p>}

```

**Lessons Learned:**

1. **Validation in react:** Handling validation at the component level provides instant feedback.  
2. **UX:** Small touches like localized greetings improve user engagement.  
