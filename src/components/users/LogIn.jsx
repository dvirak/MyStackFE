// ! ---------------- IMPORTED MODULES -------------------------
import { useState } from "react";
import handleLoginSubmit from "./LoginHelpers/handleLoginSubmit";
import InputField from "./UserHelpers/InputField";
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
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  // State for any error message that may be displayed upon login failure.
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <form onSubmit={(e) => handleLoginSubmit(e, userData, setErrorMessage)}>
      <h3>Log In</h3>

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
