export default function SubmitAccountChanges(
  e,
  userData,
  editedUserData,
  setEditedUserData
) {
  e.preventDefault();

  let finalEditData = [];

  Object.entries(editedUserData).map(([key, value]) => {
    console.log("key: " + key);
    console.log("value: " + value);
    if (editedUserData[key] && editedUserData[key] !== userData[key]) {
      finalEditData.push(editedUserData[key]);
    }
  });
  console.log("editedUserData: ");
  console.log(editedUserData);
  console.log("UserData: ");
  console.log(userData);
  console.log("finalEditedData: ");
  console.log(finalEditData);
}
