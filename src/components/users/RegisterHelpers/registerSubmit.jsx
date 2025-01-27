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
 * @param {Object} userData - The user registration data including fields like username, password, and email.
 * @param {Function} setErrorMessage - A state updater function for displaying error messages.
 * @param {Function} setIsLoading - A state updater function for managing the loading state during API interaction.
 * @param {Function} navigate - A function to redirect the user to the account page upon successful registration.
 *
 * @throws {Error} If validation fails or an API-related issue occurs, it sets an error message using `setErrorMessage`.
 *
 * @precondition The `validateRegisterData` function must correctly validate the provided data, and the `registerAPI`
 * function must be implemented to handle the API request for user registration.
 * @postcondition If registration is successful, the user token and ID are stored in `localStorage`, and the user is
 * redirected to the account page. Otherwise, an error message is displayed to the user.
 */

export default async function registerSubmit(
  e,
  userData,
  setErrorMessage,
  setIsLoading,
  navigate
) {
  console.log("REGISTER SUBMIT!!!");

  // Prevents the default form submission behavior.
  e.preventDefault();

  // Clears any existing error messages.
  setErrorMessage("");

  // Sets the loading state to true while processing the request.
  setIsLoading(true);

  // Validates the user-provided registration data.
  const registerDataError = validateRegisterData(userData);
  if (registerDataError) {
    // If validation fails, sets the error message and stops further processing.
    setErrorMessage(registerDataError);
    setIsLoading(false);
    return;
  }

  // Prepares the user data, including assigning the password from `password1`.
  const updatedUserData = { ...userData, password: userData.password1 };

  try {
    // Sends a registration request to the API with the validated data.
    const response = await registerAPI(updatedUserData);

    if (response.token) {
      // If the API response includes a token, stores it and the user ID in localStorage.
      const token = response?.token;
      const userID = response?.user.id;
      localStorage.setItem("current-user-key", token);
      localStorage.setItem("user-id", userID);

      // Redirects the user to the account page after successful registration.
      navigate("/account");
    } else {
      // If registration fails, sets the error message from the API response.
      setErrorMessage(
        response?.message || "Registration failed. Please try again."
      );
    }
  } catch (error) {
    // Logs the error and sets the error message state.
    console.error("Error during registration:", error);
    setErrorMessage(
      error.message || "An unexpected error occurred during registration."
    );
  } finally {
    // Resets the loading state after the request is complete.
    setIsLoading(false);
  }
}
