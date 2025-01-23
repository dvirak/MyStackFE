import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/AppContextProvider";
import { useNavigate } from "react-router-dom";

export default function AccountTable() {
  const { userData } = useContext(AppContext);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("IN AccountTable useEffect...");
  //   if (!userData && !isLoading) {
  //     console.log("NO USERDATA AND NOT LOADING???");
  //     setErrorMessage("No user data available");
  //     navigate("/account");
  //   }
  // }, [userData, setErrorMessage, isLoading, navigate]);

  // Return null if userData is not yet available (to avoid rendering the table)
  if (!userData) {
    return <p>FUCKIGN LOADIUNG BITCH WAIT</p>; // Or display a fallback UI like a spinner
  }

  return (
    <table className="account-table">
      {/* <caption className="user-table-caption"></caption> */}
      <thead>
        <th colSpan={2}>User Information</th>
      </thead>
      <tr>
        <td>Username</td>
        <td>{userData.username}</td>
      </tr>
      <tr>
        <td>First Name</td>
        <td>{userData.first_name}</td>
      </tr>
      <tr>
        <td>Last Name</td>
        <td>{userData.last_name}</td>
      </tr>
      <tr>
        <td>Preferred Name</td>
        <td>{userData.preferred_name}</td>
      </tr>
      <tr>
        <td>Phone</td>
        <td>{userData.phone}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{userData.email}</td>
      </tr>
    </table>
  );
}
