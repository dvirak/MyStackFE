// ! ----------------- IMPORTED FILES --------------------------
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContextProvider";
import loginSubmit from "./LoginHelpers/loginSubmit";
import InputField from "./UserHelpers/InputField";
// ! -----------------------------------------------------------

// ! ---------------- IMPORTED MODULES -------------------------
import { useContext, useState } from "react";
// ! -----------------------------------------------------------

/**
 * Description: A React component that provides a login form with input fields for username and password.
 * Handles form submission, interacts with the login API, and displays appropriate messages based on the response.
 *
 * @returns {JSX.Element} The rendered login form component.
 *
 * @precondition The `loginSubmit` function must handle form submission and API interaction properly,
 * and the `InputField` component must correctly manage and display user input fields.
 * @postcondition If login is successful, user credentials are stored in `localStorage`,
 * and the user is redirected to the appropriate page. If unsuccessful, an error message is displayed.
 */

export default function Login() {
  // State for storing login form input data (username and password).
  const [loginUserData, setLoginUserData] = useState({
    username: "",
    password: "",
  });

  // Destructures global state and methods from the application context.
  const { setUserData, setErrorMessage, setIsLoading } = useContext(AppContext);

  // Hook to programmatically navigate to other routes.
  const navigate = useNavigate();

  return (
    <form
      className="login-form"
      onSubmit={(e) =>
        loginSubmit(
          e, // The form submission event.
          loginUserData, // The login data entered by the user.
          setUserData, // State updater for global user data after successful login.
          setErrorMessage, // State updater for displaying login error messages.
          setIsLoading, // State updater to indicate loading status during login.
          navigate // Function to redirect the user after a successful login.
        )
      }
    >
      {/* Form heading */}
      <h3>Log In</h3>

      {/* Dynamically generates input fields for each key in `loginUserData`. */}
      {Object.keys(loginUserData).map((key) => (
        <InputField
          key={key} // Unique key for each input field.
          fieldName={key} // The name of the field (e.g., "username", "password").
          userData={loginUserData} // The current state of login form data.
          setUserData={setLoginUserData} // State updater for input field changes.
        />
      ))}

      {/* Submit button */}
      <button className="login-button">
        <span>Log In</span>
      </button>

      {/* Link to the registration page */}
      <Link to={"/register"}>
        <span>No account yet? Register here!</span>
      </Link>
    </form>
  );
}
