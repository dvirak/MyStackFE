// ! ----------------- IMPORTED FILES --------------------------
import { loginAPI } from "../../API/UsersAPI";
// ! -----------------------------------------------------------

// ! ---------------- IMPORTED MODULES -------------------------
import { useState } from "react";
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

  /**
   * Description: Handles form submission by calling the `loginAPI` function.
   * If the response contains a token, it saves the token and user ID to `localStorage` and reloads the page.
   * If the response does not contain a token, it sets an error message state.
   *
   * @param {Event} e - The event object for the form submission.
   * @returns {Promise<void>} This function does not return any value; it updates the state and handles page actions.
   *
   * @throws {Error} If an error occurs during the login process, it logs the response error.
   */
  async function handleSubmit(e) {
    // Prevents the default form submit action.
    e.preventDefault();

    // Calls the login API with the provided user credentials.
    const response = await loginAPI(user);

    if (response.token) {
      // Stores the token and user ID in local storage for session management.
      const token = response?.token;
      const userID = response?.user.id;
      localStorage.setItem("current-user-key", token);
      localStorage.setItem("user-id", userID);

      // Reloads the page to reflect the logged-in state.
      location.reload();
    } else {
      // Sets the error message state if login fails.
      setErrorMessage(response?.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Form heading */}
      <h3>Log In</h3>

      {/* Username input */}
      <label>
        Email:
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
