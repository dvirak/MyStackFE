import updateUserAPI from "../../../API/UsersAPI/updateUser";

export default async function SubmitAccountChanges(
  e,
  userData,
  setUserData,
  editedUserData,
  setEditedUserData,
  setIsEditable
) {
  e.preventDefault();

  let finalEditData = {};

  const userID = localStorage.getItem("user-id");

  Object.entries(editedUserData).map(([key, value]) => {
    console.log("key: " + key);
    console.log("value: " + value);
    if (userData[key] && editedUserData[key] !== userData[key]) {
      finalEditData[key] = value;
    }
  });

  if (!finalEditData) {
    setIsEditable(false);
    setEditedUserData("");
    return;
  }

  const response = await updateUserAPI(finalEditData);

  let updatedUserData = response.updatedUser;

  setUserData({ ...updatedUserData, id: userID });

  setEditedUserData("");

  setIsEditable(false);
}
