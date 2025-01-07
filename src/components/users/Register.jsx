// ! ----------------- IMPORTED FILES --------------------------
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

  return (
    <form
      onSubmit={(e) =>
        registerSubmit(e, userData, setErrorMessage, setIsLoading)
      }
    >
      <h3>Register</h3>

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

      {/* Submit button for registering the user */}
      <button>
        <span className="login-button">Register</span>
      </button>
    </form>
  );
}
