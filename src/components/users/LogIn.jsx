import { useState } from "react";
import { loginAPI } from "../../API/UsersAPI/loginAPI";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const user = {
    username: username,
    password: password,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await loginAPI(user);
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
        Email:
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
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button>
        <span className="login-button">Log In</span>
      </button>
      <h4>{errorMessage}</h4>
    </form>
  );
}
