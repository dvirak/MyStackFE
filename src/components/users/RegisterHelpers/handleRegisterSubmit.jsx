import { registerAPI } from "../../../API/UsersAPI";
import validateRegisterData from "./validateRegisterData";

export default async function handleRegisterSubmit(
  e,
  userData,
  setErrorMessage
) {
  e.preventDefault();

  const registerDataError = validateRegisterData(userData);
  if (registerDataError) {
    console.log("DID WE GET HGERE");
    console.log("registerDataError: " + registerDataError);
    setErrorMessage(registerDataError);
    return;
  } else {
    const updatedUserData = { ...userData, password: userData.password1 };
    const response = await registerAPI(updatedUserData);

    if (response.token) {
      const token = response?.token;
      localStorage.setItem("current-user-key", token);
      location.reload();
    } else {
      setErrorMessage(response?.message);
    }
  }
}
