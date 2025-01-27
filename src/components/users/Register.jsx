// ! ----------------- IMPORTED FILES --------------------------
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContextProvider";
import registerSubmit from "./RegisterHelpers/registerSubmit";
import InputField from "./UserHelpers/InputField";
// ! -----------------------------------------------------------

// ! ---------------- IMPORTED MODULES -------------------------
import { useContext, useState } from "react";
// ! -----------------------------------------------------------

/**
 * Description: A React component that renders a registration form with input fields for
 * user details including username, password, and personal information.
 * Handles form submission and displays any error messages based on validation and API response.
 *
 * @returns {JSX.Element} The rendered registration form component.
 *
 * @precondition `handleRegisterSubmit` should be correctly implemented and imported.
 * `userData` should be an object with the required fields for registration.
 * @postcondition On successful form submission, the user's registration details are sent to the API.
 * If unsuccessful, an error message is displayed.
 */
export default function Register() {
  // Loading context for user, error and loading data
  const { setErrorMessage, setIsLoading, userData, setUserData } =
    useContext(AppContext);

  const navigate = useNavigate();

  return (
    <form
      className="register-form"
      onSubmit={(e) =>
        registerSubmit(e, userData, setErrorMessage, setIsLoading, navigate)
      }
    >
      <h3>Register</h3>

      <div className="register-input-grid">
        {/* Render input fields dynamically from userData, excluding password field */}
        {Object.keys(userData).map((key) =>
          key === "password" ? null : (
            <InputField
              key={key}
              fieldName={key}
              userData={userData}
              setUserData={setUserData}
            />
          )
        )}
      </div>

      {/* Submit button for registering the user */}
      <button className="login-button">
        <span>Register</span>
      </button>
      <Link to={"/login"}>
        <span>Already have an account? Login here!</span>
      </Link>
    </form>
  );
}
