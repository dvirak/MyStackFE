import { useContext } from "react";
import { AppContext } from "../../../../context/AppContextProvider";

export default function DeleteUserPopupInitial() {
  const { setDeleteUserStep } = useContext(AppContext);

  return (
    <div className="popup">
      <p>Are you sure you want to delete your account?</p>
      <button onClick={() => setDeleteUserStep(2)}>Confim</button>
      <button onClick={() => setDeleteUserStep(null)}>Cancel</button>
    </div>
  );
}
