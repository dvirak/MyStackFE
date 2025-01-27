// ! ----------------- IMPORTED FILES --------------------------
import Account from "../components/users/Account";
import Errors from "../errors/Errors";
// ! -----------------------------------------------------------

/**
 * Description: A React component that displays the account page.
 * If a user is logged in (validated via a `current-user-key` in localStorage),
 * it renders the `Account` component. It also displays error messages via the `Errors` component.
 *
 * @returns {JSX.Element} The rendered account page with the `Account` component and any errors displayed.
 *
 * @precondition `localStorage` should contain a valid `current-user-key` to indicate user authentication.
 * The `Account` and `Errors` components must be correctly implemented and imported.
 *
 * @postcondition Displays the `Account` component for logged-in users and renders any errors if present.
 */
export default function AccountPage() {
  return (
    <div className="account-div">
      <Account />
      <Errors />
    </div>
  );
}
