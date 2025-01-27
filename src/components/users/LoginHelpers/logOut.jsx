// ! ----------------- IMPORTED FILES --------------------------
import { initialUserState } from "../../../context/AppContextProvider";
// ! -----------------------------------------------------------

/**
 * Description: Handles the logout process by clearing the user's key from local storage,
 * resetting user data to its initial state, and refreshing the page or navigating to the
 * login page. If an error occurs during the process, an error message is set.
 *
 * @param {Event} e - The event object from the button click.
 * @param {Function} setErrorMessage - A state setter function to display an error message if the process fails.
 * @param {Function} setUserData - A state setter function to reset user data after logout.
 * @param {Function} navigate - Function to navigate to the login page if the user is on the account page.
 * @returns {void} This function does not return a value.
 *
 * @precondition The function must be called in response to a user interaction, such as a button click.
 * @postcondition Removes the `current-user-key` from local storage, resets user data, and reloads the page
 * or navigates to the login page if the user was logged in. If an error occurs, sets an error message.
 */

export default function logOut(e, setErrorMessage, setUserData, navigate) {
  // Prevents the default action triggered by the button click.
  e.preventDefault();

  console.log("WE CLICKED LOG OUT!!!!");

  try {
    // Stores the current path to determine the next action after logout.
    const currentPath = window.location.pathname;

    // Removes the user's session key from local storage.
    localStorage.removeItem("current-user-key");

    // Resets the user data state to its initial value.
    setUserData(initialUserState);

    // Clears any existing error message.
    setErrorMessage("");

    // Navigates to the login page if the user is on the account page.
    if (currentPath === "/account") {
      navigate("/login");
    } else {
      // Reloads the page to reflect the logged-out state.
      window.location.reload();
    }
  } catch (error) {
    // Logs the error and updates the error message state if logout fails.
    console.error("Error during logout: " + error);
    setErrorMessage(error.message || "Failed to log out. Please try again");
  }
}
