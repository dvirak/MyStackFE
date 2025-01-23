/**
 * Description: Handles the logout process by clearing the user's key from local storage and refreshing the page.
 * If the user is not logged in, an error message is set instead.
 *
 * @param {Event} e - The event object from the button click.
 * @param {Function} setErrorMessage - A state setter function to display an error message if the user is not logged in.
 * @returns {void} This function does not return a value.
 *
 * @precondition The function must be called in response to a user interaction, such as a button click.
 * @postcondition Clears the `current-user-key` from local storage and reloads the page if the user was logged in.
 * If not logged in, sets an error message.
 */

import { useContext } from "react";
import {
  AppContext,
  initialUserState,
} from "../../../context/AppContextProvider";
// const { userData } = useContext(AppContext);
export default function logOut(e, setErrorMessage, setUserData, navigate) {
  e.preventDefault();
  console.log("WE CLICKED LOG OUT!!!!");
  try {
    const currentPath = window.location.pathname;
    console.log("current path: " + currentPath);
    localStorage.removeItem("current-user-key");
    setUserData(initialUserState);
    setErrorMessage("");
    if (currentPath === "/account") {
      navigate("/login");
    } else {
      window.location.reload();
    }
  } catch (error) {
    console.error("Error during logout: " + error);
    setErrorMessage(error.message || "Failed to log out. Please try again");
  }
}
