import { useContext } from "react";
import { AppContext } from "../../../context/AppContextProvider";

export default function SubmitDeleteAccount(e) {
  const { setDeleteUserStep } = useContext(AppContext);

  e.preventDefault();

  setDeleteUserStep(1);

  console.log("DELETE CLICKED!!!");
}
