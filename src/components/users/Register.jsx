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
      <h3>Log In</h3>

      {Object.keys(userData).map((key) => (
        <InputField
          key={key}
          fieldName={key}
          userData={userData}
          setUserData={setUserData}
        />
      ))}

      <button>
        <span className="login-button">Register</span>
      </button>
      <h4>{errorMessage}</h4>
    </form>
  );
}

// function handleInputChange(e) {
//   const { name, value } = e.target;
//   setUserData((prev) => ({ ...prev, [name]: value }));
// }

{
  /* <label>
        Username:
        <input
          type="text"
          id="username"
          name="username"
          value={userData.username || ""}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          id="password1"
          name="password1"
          value={userData.password1 || ""}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          id="password2"
          name="password2"
          value={userData.password2 || ""}
          onChange={handleInputChange}
        />
      </label>{" "}
      <label>
        First Name:
        <input
          type="text"
          id="first_name"
          name="first_name"
          value={userData.first_name || ""}
          onChange={handleInputChange}
        />
      </label>{" "}
      <label>
        Last Name:
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={userData.last_name || ""}
          onChange={handleInputChange}
        />
      </label>{" "}
      <label>
        Preferred Name:
        <input
          type="text"
          id="preferred_name"
          name="preferred_name"
          value={userData.preferred_name || ""}
          onChange={handleInputChange}
        />
      </label>{" "}
      <label>
        Phone:
        <input
          type="phone"
          id="phone"
          name="phone"
          value={userData.phone || ""}
          onChange={handleInputChange}
        />
      </label>{" "}
      <label>
        Email:
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email || ""}
          onChange={handleInputChange}
        />
      </label> */
}
