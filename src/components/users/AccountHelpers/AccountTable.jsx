import { useContext } from "react";
import { AppContext } from "../../../context/AppContextProvider";

export default function AccountTable() {
  const { userData, setUserData } = useContext(AppContext);
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
