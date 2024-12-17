import capitalizeWords from "./capitalizeWords";
import determineType from "./determineType";

export default function InputField({ fieldName, userData, setUserData }) {
  const type = determineType(fieldName);

  return (
    <label>
      {`${capitalizeWords(fieldName)}: `}
      <input
        type={type}
        id={fieldName}
        name={fieldName}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, [fieldName]: e.target.value }))
        }
        value={userData[fieldName] || ""}
      />
    </label>
  );
}
