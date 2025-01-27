// ! ----------------- IMPORTED FILES --------------------------
import { AppContext } from "../../context/AppContextProvider";
import registerSubmit from "./RegisterHelpers/registerSubmit";
import InputField from "./UserHelpers/InputField";
// ! -----------------------------------------------------------

// ! ---------------- IMPORTED MODULES -------------------------
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// ! -----------------------------------------------------------

/**
 * Description: A React component that renders a registration form with input fields for
 * user details such as username, password, and personal information. It dynamically generates
 * input fields based on the provided `userData` and handles form submission to register the user.
 *
 * @returns {JSX.Element} The rendered registration form component.
 *
 * @precondition `registerSubmit` must be correctly implemented to handle API communication and validations.
 * `userData` should be initialized with the required fields (e.g., username, email, etc.).
 * `InputField` must be implemented to update `userData` via `setUserData`.
 *
 * @postcondition On form submission, registration data is sent to the server, and the user is redirected on success.
 * Errors are displayed if the registration fails.
 */
export default function Register() {
  // Access global state and methods from AppContext.
  const { setErrorMessage, setIsLoading, userData, setUserData } =
    useContext(AppContext);

  // Hook for handling navigation.
  const navigate = useNavigate();

  return (
    <form
      className="register-form"
      onSubmit={(e) =>
        registerSubmit(e, userData, setErrorMessage, setIsLoading, navigate)
      }
    >
      <h3>Register</h3>

      {/* Input fields rendered dynamically based on `userData` keys */}
      <div className="register-input-grid">
        {Object.keys(userData).map((key) =>
          key === "password" ? null : (
            <InputField
              key={key} // Unique key for each input field.
              fieldName={key} // Name of the field to display.
              userData={userData} // Current user data state.
              setUserData={setUserData} // Function to update user data state.
            />
          )
        )}
      </div>

      {/* Submit button for registration */}
      <button className="login-button" type="submit">
        <span>Register</span>
      </button>

      {/* Link to redirect users to the login page */}
      <Link to="/login">
        <span>Already have an account? Login here!</span>
      </Link>
    </form>
  );
}
