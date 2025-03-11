import { useContext } from "react";
import deleteUserAPI from "../../../../API/UsersAPI/deleteUserAPI";
import { AppContext } from "../../../../context/AppContextProvider";
import logOut from "../../LoginHelpers/logOut";

export default async function DeleteUser(
  e,
  setDeleteUserStep,
  setErrorMessage,
  setUserData,
  setIsEditable,
  navigate
) {
  let confirmDelete = await deleteUserAPI();
  if (confirmDelete) {
    setDeleteUserStep(null);
    logOut(e, setErrorMessage, setUserData, setIsEditable, navigate);
  } else setErrorMessage("An error occurred");
}
