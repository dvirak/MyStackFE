import confirmUserAPI from "../../../../API/UsersAPI/confirmUserAPI";

export default async function confirmUserForDelete(
  username,
  password,
  setDeleteUserStep,
  setErrorMessage
) {
  const isConfirmed = await confirmUserAPI(username, password);
  console.log("isConfirmed: ");
  console.log(isConfirmed.status === true);
  if (isConfirmed.status === true) {
    setDeleteUserStep(3);
    setErrorMessage(""); // Clear error if successful
  } else {
    setErrorMessage(isConfirmed.message || "Invalid username or password.");
  }
}
