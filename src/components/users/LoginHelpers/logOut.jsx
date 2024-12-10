// ! ----------------- IMPORTED FILES --------------------------
// None
// ! -----------------------------------------------------------

// ! ---------------- IMPORTED MODULES -------------------------
// None
// ! -----------------------------------------------------------

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

export default function logOut(e, setErrorMessage) {
  e.preventDefault();

  // Check if the current-user-key exists in local storage
  if (localStorage.getItem("current-user-key")) {
    // Clear the key and reload the page
    localStorage.setItem("current-user-key", "");
    location.reload();
  } else {
    // Set an error message if no user is logged in
    setErrorMessage("You are not logged in");
  }
}
