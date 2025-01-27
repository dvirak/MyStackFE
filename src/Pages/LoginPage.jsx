// ! ----------------- IMPORTED FILES --------------------------
import Login from "../components/users/LogIn";
import Errors from "../errors/Errors";
// ! -----------------------------------------------------------

/**
 * Description: A React component that displays the login page.
 * It renders the `Login` component for user authentication and the `Errors` component for displaying error messages.
 *
 * @returns {JSX.Element} The rendered login page with the `Login` component and any errors displayed.
 *
 * @precondition The `Login` and `Errors` components must be correctly implemented and imported.
 *
 * @postcondition Displays the `Login` component for user authentication and renders any errors if present.
 */
export default function LoginPage() {
  return (
    <div className="account-div">
      <Login />
      <Errors />
    </div>
  );
}
