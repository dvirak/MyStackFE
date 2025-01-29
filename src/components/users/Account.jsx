// ! ----------------- IMPORTED FILES --------------------------
import AccountTable from "./AccountHelpers/AccountTable";
import AccountDataFetcher from "./AccountHelpers/AccountDataFetcher";
import { AppContext } from "../../context/AppContextProvider";
import EditAccountButtonDiv from "./AccountHelpers/EditAccountButtonDiv";
import AccountButtonDiv from "./AccountHelpers/AccountButtonDiv";
// ! -----------------------------------------------------------

// ! ---------------- IMPORTED MODULES -------------------------
import { useContext } from "react";
// ! -----------------------------------------------------------

/**
 * Description: Represents the Account component, which displays user-specific information
 * and handles logout functionality.
 *
 * @returns {JSX.Element} A JSX element displaying a logged-in message, a logout button,
 * and any error messages when applicable.
 */
export default function Account() {
  const { isLoading, isEditable } = useContext(AppContext);

  return (
    <>
      {/* Handles fetching user data and redirection logic */}
      <AccountDataFetcher />

      {/* Show loading message if data is being fetched, otherwise render the AccountTable component */}
      {isLoading ? <p>Loading user information...</p> : <AccountTable />}

      {/* Displays Edit Account Buttons when editable, otherwise renders account buttons */}
      {isEditable ? <EditAccountButtonDiv /> : <AccountButtonDiv />}
    </>
  );
}
