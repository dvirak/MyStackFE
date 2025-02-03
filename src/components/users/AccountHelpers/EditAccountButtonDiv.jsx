// ! ----------------- IMPORTED FILES --------------------------
import { AppContext } from "../../../context/AppContextProvider";
// ! -----------------------------------------------------------

// ! ---------------- IMPORTED MODULES -------------------------
import { useContext } from "react";
import SubmitAccountChanges from "./SubmitAccountChanges";
// ! -----------------------------------------------------------

/**
 * Description: A React component that renders buttons for saving or canceling account edits.
 * It allows the user to either save changes or cancel and exit edit mode.
 *
 * @returns {JSX.Element} A div containing "Save Changes" and "Cancel Changes" buttons.
 *
 * @precondition The `AppContext` must be properly initialized and provide the `setIsEditable` state setter.
 *
 * @postcondition Clicking "Save Changes" does nothing yet (placeholder functionality).
 * Clicking "Cancel Changes" exits edit mode by setting `isEditable` to false.
 */
export default function EditAccountButtonDiv() {
  // Access global state function from context
  const { userData, editedUserData, setEditeUserData, setIsEditable } =
    useContext(AppContext);

  // Handles the cancel button click event. Exits edit mode by setting `isEditable` to false.
  function cancelEditClick(e) {
    e.preventDefault();
    setIsEditable(false);
  }

  return (
    <div className="account-button-div">
      {/* Placeholder button for saving account changes (functionality not yet implemented) */}
      <button
        className="save-account-changes-button"
        onClick={(e) =>
          SubmitAccountChanges(e, userData, editedUserData, setEditeUserData)
        }
      >
        SAVE CHANGES
      </button>

      {/* Button to cancel editing and revert to view mode */}
      <button
        className="cancel-account-changes-button"
        onClick={(e) => cancelEditClick(e)}
      >
        CANCEL CHANGES
      </button>
    </div>
  );
}
