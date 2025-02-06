import { useContext } from "react";
import { AppContext } from "../../../../context/AppContextProvider";
import deleteUserAPI from "../../../../API/UsersAPI/deleteUserAPI";
import logOut from "../../LoginHelpers/logOut";

export default function DeleteUserPopupFinalConfirmation() {
  const {
    errorMessage,
    setErrorMessage,
    setUserData,
    setIsEditable,
    navigate,
    setDeleteUserStep,
  } = useContext(AppContext);

  return (
    <div className="popup">
      <p>
        Just to confirm, you are sure you want to <strong>PERMANENTLY</strong>{" "}
        delete your account? This cannot be undone.
      </p>
      <button onClick={() => setDeleteUserStep(null)}>Cancel</button>
      <button
        onClick={async (e) => {
          let confirmDelete = await deleteUserAPI();
          if (confirmDelete) {
            setDeleteUserStep(null);
            logOut(e, setErrorMessage, setUserData, setIsEditable, navigate);
          } else setErrorMessage("An error occurred");
        }}
      >
        Confirm
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
