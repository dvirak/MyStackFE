import { useContext } from "react";
import { AppContext } from "../../../context/AppContextProvider";
import capitalizeWords from "../UserHelpers/capitalizeWords";
import determineType from "../UserHelpers/determineType";

export default function AccountRow({ field, value, isEditable }) {
  const { editedUserData, setEditedUserData } = useContext(AppContext);

  if (field === "id" || field === "admin") {
    return;
  }

  console.log("value: " + value);

  const handleChange = (e) => {
    setEditedUserData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const type = determineType(field);
  console.log("type: " + type);

  console.log("field: " + field);

  console.log("Edited user data: " + editedUserData[field]);

  return (
    <tr>
      <td>{capitalizeWords(field)}</td>
      <td>
        {isEditable ? (
          <input
            type={type}
            value={editedUserData[field] || value}
            onChange={handleChange}
          />
        ) : (
          value
        )}
      </td>
    </tr>
  );
}
