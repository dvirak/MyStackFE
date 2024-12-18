// ! ----------------- IMPORTED FILES --------------------------
import handleLoginSubmit from "./LoginHelpers/handleLoginSubmit";
import InputField from "./UserHelpers/InputField";
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
 * @precondition The `handleLoginSubmit` function and `InputField` component must be correctly implemented and imported.
 * @postcondition If login is successful, user credentials are stored in `localStorage` and the page is reloaded.
 * If unsuccessful, an error message is displayed to the user.
 */
export default function Login() {
  // State for user input fields (username and password).
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  // State for storing error messages when login fails.
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <form onSubmit={(e) => handleLoginSubmit(e, userData, setErrorMessage)}>
      {/* Form heading */}
      <h3>Log In</h3>

      {/* Dynamically generates input fields for user data */}
      {Object.keys(userData).map((key) => (
        <InputField
          key={key}
          fieldName={key}
          userData={userData}
          setUserData={setUserData}
        />
      ))}

      {/* Submit button */}
      <button>
        <span className="login-button">Log In</span>
      </button>

      {/* Displays an error message if login fails */}
      <h4>{errorMessage}</h4>
    </form>
  );
}
