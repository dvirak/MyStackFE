// ! ----------------- IMPORTED FILES --------------------------
import Register from "../components/users/Register";
import Errors from "../errors/Errors";
// ! -----------------------------------------------------------

/**
 * Description: A React component that displays the registration page.
 * It renders the `Register` component for user registration and the `Errors` component for displaying error messages.
 *
 * @returns {JSX.Element} The rendered registration page with the `Register` component and any errors displayed.
 *
 * @precondition The `Register` and `Errors` components must be correctly implemented and imported.
 *
 * @postcondition Displays the `Register` component for user registration and renders any errors if present.
 */
export default function RegisterPage() {
  return (
    <div className="account-div">
      <Register />
      <Errors />
    </div>
  );
}
