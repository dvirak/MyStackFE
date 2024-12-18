// ! ----------------- IMPORTED FILES --------------------------
import capitalizeWords from "./capitalizeWords";
import determineType from "./determineType";
// ! -----------------------------------------------------------

/**
 * Description: A React component that renders an input field with a label.
 * The label is dynamically generated based on the field name and the value is managed
 * in the `userData` state. The input type is determined based on the field name.
 *
 * @param {string} fieldName - The name of the field (used for input's `id`, `name`, and state).
 * @param {Object} userData - The state object that holds the values for all form fields.
 * @param {Function} setUserData - A function used to update the `userData` state.
 *
 * @returns {JSX.Element} The rendered input field component, including the label and input element.
 *
 * @throws {Error} None. The component operates without throwing any errors.
 *
 * @precondition `fieldName` must be a valid string representing the name of the field.
 * `userData` should be an object where each key corresponds to a form field.
 * @postcondition Renders an input field with the appropriate label and type,
 * updates the `userData` state on user input.
 */

export default function InputField({ fieldName, userData, setUserData }) {
  // Determine the input type for the field
  const type = determineType(fieldName);

  return (
    <label>
      {/* Dynamically capitalize the field name for the label */}
      {`${capitalizeWords(fieldName)}: `}

      {/* Render the input field with the determined type */}
      <input
        type={type}
        id={fieldName}
        name={fieldName}
        onChange={
          (e) =>
            setUserData((prev) => ({ ...prev, [fieldName]: e.target.value })) // Update the state on input change
        }
        value={userData[fieldName] || ""} // Set the current value from the state or default to an empty string
      />
    </label>
  );
}
