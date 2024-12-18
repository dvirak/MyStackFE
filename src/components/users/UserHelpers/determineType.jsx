/**
 * Description: Determines the appropriate input type for a given field name.
 * Maps specific field names (e.g., "phone", "email", "password") to corresponding HTML input types
 * and defaults to "text" for all other fields.
 *
 * @param {string} field - The name of the field for which the input type is to be determined.
 * @returns {string} The appropriate HTML input type for the field (e.g., "tel", "email", "password", or "text").
 *
 * @throws {Error} None. Handles strings directly and does not throw exceptions.
 *
 * @precondition `field` must be a valid string representing a field name.
 * Any field names not covered by the defined cases will default to "text".
 * @postcondition Returns a string representing a valid HTML input type for the provided field.
 */

export default function determineType(field) {
  // Return "tel" for phone fields
  if (field === "phone") return "tel";

  // Return "email" for email fields
  if (field === "email") return "email";

  // Return "password" for fields starting with "password"
  if (field.startsWith("password")) return "password";

  // Default to "text" for all other fields
  return "text";
}
