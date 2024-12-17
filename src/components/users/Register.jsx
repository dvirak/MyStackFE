import { useState } from "react";
import handleRegisterSubmit from "./RegisterHelpers/handleRegisterSubmit";
import InputField from "./UserHelpers/InputField";

export default function Register() {
  const [userData, setUserData] = useState({
    username: "",
    password1: "",
    password2: "",
    password: "",
    first_name: "",
    last_name: "",
    preferred_name: "",
    phone: "",
    email: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <form onSubmit={(e) => handleRegisterSubmit(e, userData, setErrorMessage)}>
      <h3>Register</h3>

      {Object.keys(userData).map((key) =>
        key === "password" ? null : (
          <InputField
            key={key}
            fieldName={key}
            userData={userData}
            setUserData={setUserData}
          />
        )
      )}

      <button>
        <span className="login-button">Register</span>
      </button>
      <h4>{errorMessage}</h4>
    </form>
  );
}
