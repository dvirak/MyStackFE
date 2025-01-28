// ! ----------------- IMPORTED FILES --------------------------
import logOut from "./LoginHelpers/logOut";
import AccountTable from "./AccountHelpers/AccountTable";
import AccountDataFetcher from "./AccountHelpers/AccountDataFetcher";
// ! -----------------------------------------------------------

// ! ---------------- IMPORTED MODULES -------------------------
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContextProvider";
// ! -----------------------------------------------------------

/**
 * Description: Represents the Account component, which displays user-specific information
 * and handles logout functionality.
 *
 * @returns {JSX.Element} A JSX element displaying a logged-in message, a logout button,
 * and any error messages when applicable.
 */
export default function Account() {
  const { isLoading, setErrorMessage, setUserData } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <>
      {/* Handles fetching user data and redirection logic */}
      <AccountDataFetcher />

      {/* Show loading message if data is being fetched, otherwise render the AccountTable component */}
      {isLoading ? <p>Loading user information...</p> : <AccountTable />}

      {/* Logout button to clear user session and redirect */}
      <div className="account-button-div">
        <button className="edit-account-button">EDIT ACCOUNT</button>
        <button
          className="log-out-button"
          onClick={(e) => logOut(e, setErrorMessage, setUserData, navigate)}
        >
          LOG OUT
        </button>
        <button className="delete-account-button">DELETE ACCOUNT</button>
      </div>
    </>
  );
}
