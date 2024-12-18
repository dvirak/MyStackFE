/**
 * Description: Validates the user registration data by checking for required fields,
 * password match, and password length. Returns an error message string if validation fails,
 * or `null` if the data is valid.
 *
 * @param {Object} userData - The user registration data containing fields like username, password1, and password2.
 * @returns {string | null} An error message if validation fails, otherwise `null`.
 *
 * @throws {Error} None. Errors are returned as strings.
 *
 * @precondition The `userData` object should include `username`, `password1`, and `password2` fields.
 * @postcondition Returns validation errors or confirms the data is valid.
 */

export default function validateRegisterData(userData) {
  // Check if the username is provided.
  if (!userData.username) {
    return "Username is required. This is mine";
  }

  // Check if the passwords match.
  if (userData.password1 !== userData.password2) {
    return "Passwords do not match.";
  }

  // Check if the password meets the minimum length requirement.
  if (userData.password1.length < 8) {
    return "Password must be at least 8 characters long.";
  }

  // If all validations pass, return null.
  return null;
}
