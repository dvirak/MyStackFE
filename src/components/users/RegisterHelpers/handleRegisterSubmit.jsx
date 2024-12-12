import { registerAPI } from "../../../API/UsersAPI";

export default async function handleSubmit(
  e,
  userData,
  setUserData,
  setErrorMessage
) {
  e.preventDefault();

  if (userData.password1 === userData.password2) {
    setUserData((prev) => ({ ...prev, password: userData.password1 }));
  } else {
    setErrorMessage("Please ensure passwords match");
    return;
  }

  console.log(userData);
  const response = await registerAPI(userData);

  if (response.token) {
    const token = response?.token;
    localStorage.setItem("current-user-key", token);
    location.reload();
  } else {
    setErrorMessage(response?.message);
  }
}
