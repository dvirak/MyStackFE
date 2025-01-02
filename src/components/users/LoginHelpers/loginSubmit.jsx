// ! ----------------- IMPORTED FILES --------------------------
import { loginAPI } from "../../../API/UsersAPI";
// ! -----------------------------------------------------------
/**
 * Description: Handles form submission by calling the `loginAPI` function.
 * If the response contains a token, it saves the token and user ID to `localStorage` and reloads the page.
 * If the response does not contain a token, it sets an error message state.
 *
 * @param {Event} e - The event object for the form submission.
 * @returns {Promise<void>} This function does not return any value; it updates the state and handles page actions.
 *
 * @throws {Error} If an error occurs during the login process, it logs the response error.
 */
export default async function loginSubmit(
  e,
  userData,
  setErrorMessage,
  setIsLoading
) {
  // Prevents the default form submit action.
  e.preventDefault();

  setErrorMessage("");

  setIsLoading(true);

  try {
    // Calls the login API with the provided user credentials.
    const response = await loginAPI(userData);

    if (response.token) {
      // Stores the token and user ID in local storage for session management.
      const token = response?.token;
      const userID = response?.user.id;
      localStorage.setItem("current-user-key", token);
      localStorage.setItem("user-id", userID);

      // Reloads the page to reflect the logged-in state.
      location.reload();
    } else {
      // Sets the error message state if login fails.
      setErrorMessage(response?.message);
    }
  } catch (error) {
    setErrorMessage(error);
  } finally {
    setIsLoading(false);
  }
}
