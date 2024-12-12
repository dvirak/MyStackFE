// ! ---------------- IMPORTED MODULES -------------------------
import { useState } from "react";
import handleLoginSubmit from "./LoginHelpers/handleLoginSubmit";
// ! -----------------------------------------------------------

/**
 * Description: A React component that provides a login form with input fields for username and password.
 * Handles form submission, interacts with the login API, and displays appropriate messages based on the response.
 *
 * @returns {JSX.Element} The rendered login form component.
 *
 * @precondition The `loginAPI` function should be correctly implemented and imported.
 * @postcondition If login is successful, user credentials are stored in `localStorage` and the page is reloaded.
 * If unsuccessful, an error message is displayed.
 */
export default function Login() {
  // State for the username input field.
  const [username, setUsername] = useState("");

  // State for the password input field.
  const [password, setPassword] = useState("");

  // State for any error message that may be displayed upon login failure.
  const [errorMessage, setErrorMessage] = useState("");

  // User object constructed from state for submission.
  const user = {
    username: username,
    password: password,
  };

  return (
    <form onSubmit={(e) => handleLoginSubmit(e, user, setErrorMessage)}>
      {/* Form heading */}
      <h3>Log In</h3>

      {/* Username input */}
      <label>
        Username:
        <input
          type="username" // Set as 'username' for semantic purposes.
          id="username"
          onChange={(e) => setUsername(e.target.value)} // Updates state with user input.
          value={username} // Binds the input value to the username state.
        />
      </label>

      {/* Password input */}
      <label>
        Password:
        <input
          type="password" // Set as 'password' for secure input.
          id="password"
          onChange={(e) => setPassword(e.target.value)} // Updates state with user input.
          value={password} // Binds the input value to the password state.
        />
      </label>

      {/* Submit button */}
      <button>
        <span className="login-button">Log In</span>
      </button>

      {/* Displays an error message if login fails */}
      <h4>{errorMessage}</h4>
    </form>
  );
}
