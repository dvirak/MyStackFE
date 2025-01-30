// ! ----------------- IMPORTED FILES --------------------------
import { AppContext } from "../../../context/AppContextProvider";
import AccountRow from "./AccountRow";
// ! -----------------------------------------------------------

// ! ---------------- IMPORTED MODULES -------------------------
import { useContext } from "react";
// ! -----------------------------------------------------------

/**
 * Description: A table component that displays user account information
 * retrieved from the application context.
 *
 * @returns {JSX.Element} A JSX element representing a table with user account information.
 *
 * @precondition The `AppContext` must provide `userData` with properties
 * like `username`, `first_name`, `last_name`, etc.
 * @postcondition Renders a table with user information displayed in rows.
 */

export default function AccountTable() {
  // Retrieve the `userData` object from the application context
  const { userData, isEditable } = useContext(AppContext);

  return (
    <table className="account-table">
      {/* Table header displaying the section title */}
      <thead>
        <th colSpan={2}>User Information</th>
      </thead>

      {/* Table rows displaying user data properties */}
      <tbody>
        {Object.entries(userData).map(([key, value]) => (
          <AccountRow
            key={key}
            field={key}
            value={value}
            isEditable={isEditable}
          />
        ))}
      </tbody>
    </table>
  );
}
