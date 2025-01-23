// ! ----------------- IMPORTED FILES --------------------------
import Register from "../components/users/Register";
import Errors from "../errors/Errors";
// ! -----------------------------------------------------------

/**
 * Description: A React component that handles the account page display.
 * If a user is logged in (determined by the presence of a valid `current-user-key` in localStorage),
 * it renders the `Account` component. Otherwise, it renders both the `Login` and `Register` components.
 *
 * @returns {JSX.Element} The rendered account page with conditional components.
 *
 * @precondition `localStorage` should contain a `current-user-key` to indicate if a user is logged in.
 * `Login`, `Register`, and `Account` components must be correctly implemented and imported.
 * @postcondition The account page either shows the `Account` component for logged-in users
 * or the `Login` and `Register` components for users who are not logged in.
 */
export default function RegisterPage() {
  return (
    <div className="account-div">
      <Register />
      <Errors />
    </div>
  );
}
