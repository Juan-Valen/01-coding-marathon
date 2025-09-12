import React, { useState } from "react";
import "./SignupPage.css";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("en");

  // Email validation
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Password strength validation (at least 6 characters, one number, one letter)
  const isStrongPassword = (password) =>
    password.length >= 6 && /\d/.test(password) && /[a-zA-Z]/.test(password);

  // Greeting by nationality
  const greetings = {
    fi: "Moi",
    en: "Hello",
    de: "Hallo",
    fr: "Bonjour",
  };

  return (
    <div className="signup-container">
      <label>Email</label>
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

      <label>Password</label>
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

      <label>Nationality</label>
      <select
        value={nationality}
        onChange={(e) => setNationality(e.target.value)}
      >
        <option value="fi">Finnish</option>
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
      </select>

      <button className="signup-btn">Sign up</button>

      <hr />

      <p>{greetings[nationality]}</p>
      <p>Your email address is: {email}</p>
      {isValidEmail(email) && <p>Your email address is correct</p>}
    </div>
  );
}

export default SignupPage;
