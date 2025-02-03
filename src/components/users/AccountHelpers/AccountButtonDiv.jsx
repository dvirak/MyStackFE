// ! ----------------- IMPORTED FILES --------------------------
import logOut from "../LoginHelpers/logOut";
// ! -----------------------------------------------------------

// ! ---------------- IMPORTED MODULES -------------------------
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContextProvider";
// ! -----------------------------------------------------------

/**
 * Description: A React component that renders account-related action buttons.
 * It provides options to edit the account, log out, and delete the account.
 *
 * @returns {JSX.Element} A div containing "Edit Account", "Log Out", and "Delete Account" buttons.
 *
 * @precondition The `AppContext` must be properly initialized and provide `setErrorMessage`,
 * `setUserData`, and `setIsEditable` state setters. The `logOut` function must be correctly implemented.
 *
 * @postcondition Clicking "Edit Account" enables account editing mode.
 * Clicking "Log Out" clears user session data and redirects to the login page.
 * The "Delete Account" button is present but currently non-functional.
 */
export default function AccountButtonDiv() {
  // Access global state functions from context
  const {
    setErrorMessage,
    userData,
    setUserData,
    editedUserData,
    setIsEditable,
  } = useContext(AppContext);

  // Hook for navigation
  const navigate = useNavigate();

  // Handles the edit button click event, enables edit mode by setting `isEditable` to true.
  function handleEditClick(e) {
    e.preventDefault();
    setIsEditable(true);
  }

  return (
    <div className="account-button-div">
      {/* Button to enable account editing */}
      <button
        className="edit-account-button"
        onClick={(e) => handleEditClick(e)}
      >
        EDIT ACCOUNT
      </button>

      {/* Button to log out the user and clear session data */}
      <button
        className="log-out-button"
        onClick={(e) =>
          logOut(e, setErrorMessage, setUserData, setIsEditable, navigate)
        }
      >
        LOG OUT
      </button>

      {/* Placeholder button for account deletion (not yet functional) */}
      <button className="delete-account-button">DELETE ACCOUNT</button>
    </div>
  );
}
