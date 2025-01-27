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
 * @precondition The `handleLoginSubmit` function and `InputField` component must be correctly implemented and imported.
 * @postcondition If login is successful, user credentials are stored in `localStorage` and the page is reloaded.
 * If unsuccessful, an error message is displayed to the user.
 */
export default function Login() {
  // State for user input fields (username and password).
  const [loginUserData, setLoginUserData] = useState({
    username: "",
    password: "",
  });

  // State for storing error messages when login fails.
  const { userData, setUserData, setErrorMessage, setIsLoading } =
    useContext(AppContext);

  const navigate = useNavigate();

  return (
    <form
      className="login-form"
      onSubmit={(e) =>
        loginSubmit(
          e,
          loginUserData,
          setUserData,
          setErrorMessage,
          setIsLoading,
          navigate
        )
      }
    >
      {/* Form heading */}
      <h3>Log In</h3>
      {/* <div className="login-form-div"> */}
      {/* Dynamically generates input fields for user data */}
      {Object.keys(loginUserData).map((key) => (
        <InputField
          key={key}
          fieldName={key}
          userData={loginUserData}
          setUserData={setLoginUserData}
        />
      ))}
      {/* </div> */}
      {/* Submit button */}
      <button className="login-button">
        <span>Log In</span>
      </button>
      <Link to={"/register"}>
        <span>No account yet? Register here!</span>
      </Link>
    </form>
  );
}
