import { useContext, useState } from "react";
import { AppContext } from "../../../../context/AppContextProvider";
import confirmUserAPI from "../../../../API/UsersAPI/confirmUserAPI";
import confirmUserForDelete from "./ConfirmUserForDelete";

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
        onClick={async () =>
          confirmUserForDelete(
            username,
            password,
            setDeleteUserStep,
            setErrorMessage
          )
        }
      >
        Confirm
      </button>
    </div>
  );
}
