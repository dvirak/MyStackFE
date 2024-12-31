// ! ----------------- IMPORTED FILES --------------------------
import validateRegisterData from "./validateRegisterData";
import { registerAPI } from "../../../API/UsersAPI";
// ! -----------------------------------------------------------

/**
 * Description: Handles the form submission process for user registration.
 * Validates user input, communicates with the registration API, and manages
 * state updates or errors based on the API response.
 *
 * @param {Event} e - The form submission event object.
 * @param {Object} userData - The user registration data including username, password, etc.
 * @param {Function} setErrorMessage - State updater function for displaying error messages.
 *
 * @throws {Error} Displays validation or API-related error messages via `setErrorMessage`.
 *
 * @precondition The `validateRegisterData` function and `registerAPI` function must be properly implemented and imported.
 * @postcondition If registration is successful, the user token is stored in `localStorage` and the page is reloaded.
 * Otherwise, an error message is displayed to the user.
 */

export default async function registerSubmit(e, userData, setErrorMessage) {
  e.preventDefault();

  // Validate the user data. If validation fails, set the error message and exit.
  const registerDataError = validateRegisterData(userData);
  if (registerDataError) {
    setErrorMessage(registerDataError);
    return;
  } else {
    // Prepare user data with the password from `password1`.
    const updatedUserData = { ...userData, password: userData.password1 };

    // Attempt to register the user with the API.
    const response = await registerAPI(updatedUserData);

    if (response.token) {
      // If registration is successful, store the token and reload the page.
      const token = response?.token;
      localStorage.setItem("current-user-key", token);
      location.reload();
    } else {
      // If registration fails, set the error message from the response.
      setErrorMessage(response?.message);
    }
  }
}
