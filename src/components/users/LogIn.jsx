import { useState } from "react";
import { loginAPI } from "../../API/UsersAPI";

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
      const userID = response?.user.id;
      localStorage.setItem("current-user-key", token);
      localStorage.setItem("user-id", userID);
      location.reload();
    } else {
      setErrorMessage(response?.message);
    }
    // console.log("RESPONSE: ");
    // const printUser = parseInt(localStorage.getItem("user-id"));
    // console.log(printUser);
    // console.log(typeof printUser);
    // console.log("Parsed User: ");
    // console.log(JSON.parse(printUser));
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
