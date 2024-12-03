import { useState } from "react";
import { loginAPI } from "../../API/UsersAPI/loginAPI";
import { registerAPI } from "../../API/UsersAPI/registerAPI";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [preferred_name, setPreferredName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const user = {
    username: username,
    password: password,
    first_name: first_name,
    last_name: last_name,
    preferred_name: preferred_name,
    phone: phone,
    email: email,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await registerAPI(user);
    if (password1 === password2) {
      setPassword(password1);
    } else {
      setErrorMessage("Please ensure passwords match");
    }
    if (response.token) {
      const token = response?.token;
      localStorage.setItem("current-user-key", token);
      location.reload();
    } else {
      setErrorMessage(response?.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Log In</h3>
      <label>
        Username:
        <input
          type="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          id="password1"
          onChange={(e) => setPassword1(e.target.value)}
          value={password1}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          id="password2"
          onChange={(e) => setPassword2(e.target.value)}
          value={password2}
        />
      </label>{" "}
      <label>
        First Name:
        <input
          type="first_name"
          id="first_name"
          onChange={(e) => setFirstName(e.target.value)}
          value={first_name}
        />
      </label>{" "}
      <label>
        Last Name:
        <input
          type="last_name"
          id="last_name"
          onChange={(e) => setLastName(e.target.value)}
          value={last_name}
        />
      </label>{" "}
      <label>
        Preferred Name:
        <input
          type="preferred_name"
          id="preferred_name"
          onChange={(e) => setPreferredName(e.target.value)}
          value={preferred_name}
        />
      </label>{" "}
      <label>
        Phone:
        <input
          type="phone"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </label>{" "}
      <label>
        Email:
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <button>
        <span className="login-button">Register</span>
      </button>
      <h4>{errorMessage}</h4>
    </form>
  );
}
