/**
 * Description: Capitalizes the first letter of each word in a string and replaces underscores with spaces.
 * Specifically formats "password1" as "Password" and "password2" as "Confirm Password" for clarity in user interfaces.
 *
 * @param {string} str - The input string to be transformed.
 * @returns {string} The formatted string with proper capitalization and spaces.
 *
 * @throws {Error} None. The function handles strings directly and does not throw exceptions.
 *
 * @precondition `str` must be a valid string. Edge cases such as empty strings or unexpected input should be handled externally.
 * @postcondition Returns the input string with formatting applied, or specific substitutions for "password1" and "password2".
 */

export default function capitalizeWords(str) {
  // Special case for "password1" -> "Password"
  if (str === "password1") return "Password";

  // Special case for "password2" -> "Confirm Password"
  if (str === "password2") return "Confirm Password";

  // General case: replace underscores with spaces, capitalize each word
  return str
    .replace(/_/g, " ") // Replace underscores with spaces
    .split(" ") // Split the string into individual words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join the words back into a single string
}
