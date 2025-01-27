// ! ----------------- IMPORTED FILES --------------------------
import { getUserAPI, loginAPI } from "../../../API/UsersAPI";
// ! -----------------------------------------------------------

/**
 * Description: Handles form submission by calling the `loginAPI` function.
 * If the response contains a token, it saves the token and user ID to `localStorage`,
 * retrieves additional user details via `getUserAPI`, updates the app state, and navigates
 * to the account page. If the response lacks a token, it updates the error message state.
 *
 * @param {Event} e - The event object for the form submission.
 * @param {Object} loginUserData - The user credentials required for login.
 * @param {Function} setUserData - Function to update the user data in the app's state.
 * @param {Function} setErrorMessage - Function to set an error message if login fails.
 * @param {Function} setIsLoading - Function to toggle the loading state of the form.
 * @param {Function} navigate - Function to navigate to a different page after a successful login.
 * @returns {Promise<void>} This function does not return any value; it updates app state and handles navigation.
 *
 * @throws {Error} If an error occurs during the login process, it updates the error message state.
 */

export default async function loginSubmit(
  e,
  loginUserData,
  setUserData,
  setErrorMessage,
  setIsLoading,
  navigate
) {
  console.log("LOG IN SUBMIT!!!");

  // Prevents the default form submit action.
  e.preventDefault();

  // Clears any existing error message before starting the login process.
  setErrorMessage("");

  // Sets the loading state to true while the login process is in progress.
  setIsLoading(true);

  try {
    // Calls the login API with the provided user credentials.
    const response = await loginAPI(loginUserData);

    if (response.token) {
      // Stores the token and user ID in local storage for session management.
      const token = response?.token;
      const userID = response?.user.id;
      localStorage.setItem("current-user-key", token);
      localStorage.setItem("user-id", userID);

      // Retrieves user details from the API using the saved token.
      const userInfo = await getUserAPI();

      // Updates the app's user data state with the retrieved information.
      setUserData(userInfo);

      // Navigates to the account page after successful login.
      navigate("/account");
    } else {
      // Sets the error message state if the login API response indicates failure.
      setErrorMessage(response?.message);
    }
  } catch (error) {
    // Updates the error message state if an exception occurs during the login process.
    setErrorMessage(error);
  } finally {
    // Resets the loading state after the login process is complete.
    setIsLoading(false);
  }
}
