import { useContext, useState } from "react";
import { AppContext } from "../../../../context/AppContextProvider";
import confirmUserAPI from "../../../../API/UsersAPI/confirmUserAPI";

export default function DeleteUserPopupConfirmUser() {
  const { setDeleteUserStep, errorMessage, setErrorMessage } =
    useContext(AppContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="popup">
      <p>Please enter your username and password.</p>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => setDeleteUserStep(null)}>Cancel</button>
      <button
        onClick={async () => {
          const isConfirmed = await confirmUserAPI(username, password);
          console.log("isConfirmed: ");
          console.log(isConfirmed.status === true);
          if (isConfirmed.status === true) {
            setDeleteUserStep(3);
            setErrorMessage(""); // Clear error if successful
          } else {
            setErrorMessage(
              isConfirmed.message || "Invalid username or password."
            );
          }
        }}
      >
        Confirm
      </button>
    </div>
  );
}
