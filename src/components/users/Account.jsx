// ! ----------------- IMPORTED FILES --------------------------
import AccountTable from "./AccountHelpers/AccountTable";
import AccountDataFetcher from "./AccountHelpers/AccountDataFetcher";
import { AppContext } from "../../context/AppContextProvider";
import EditAccountButtonDiv from "./AccountHelpers/EditAccountButtonDiv";
import AccountButtonDiv from "./AccountHelpers/AccountButtonDiv";
// ! -----------------------------------------------------------

// ! ---------------- IMPORTED MODULES -------------------------
import { useContext, useEffect } from "react";
import DeleteUserPopupInitial from "./DeleteUser/DeleteUserPopups/DeleteUserPopupInitial";
import DeleteUserPopupConfirmUser from "./DeleteUser/DeleteUserPopups/DeleteUserPopupConfirmUser";
import DeleteUserPopupFinalConfirmation from "./DeleteUser/DeleteUserPopups/DeleteUserPopupFinalConfirmatiopn";
// ! -----------------------------------------------------------

/**
 * Description: Represents the Account component, which displays user-specific information
 * and handles logout functionality.
 *
 * @returns {JSX.Element} A JSX element displaying a logged-in message, a logout button,
 * and any error messages when applicable.
 */
export default function Account() {
  const {
    isLoading,
    isEditable,
    setIsEditable,
    deleteUserStep,
    setDeleteUserStep,
  } = useContext(AppContext);

  useEffect(() => {
    // Reset isEditable to false when the component unmounts
    return () => {
      setIsEditable(false);
      // setDeleteUserStep(null);
    };
  }, []);

  const renderPopup = () => {
    switch (deleteUserStep) {
      case 1:
        return <DeleteUserPopupInitial />;
      case 2:
        return <DeleteUserPopupConfirmUser />;
      case 3:
        return <DeleteUserPopupFinalConfirmation />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Handles fetching user data and redirection logic */}
      <AccountDataFetcher />

      {/* Show loading message if data is being fetched, otherwise render the AccountTable component */}
      {isLoading ? <p>Loading user information...</p> : <AccountTable />}

      {/* Displays Edit Account Buttons when editable, otherwise renders account buttons */}
      {isEditable ? <EditAccountButtonDiv /> : <AccountButtonDiv />}

      {renderPopup()}
    </>
  );
}
