import { useContext } from "react";
import { AppContext } from "../../../context/AppContextProvider";

export default function AccountTable() {
  const { userData, setUserData } = useContext(AppContext);
  return (
    <table className="account-table">
      <caption className="user-table-caption">User Information</caption>
      <thead>
        <th>Username</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Preferred Name</th>
        <th>Phone</th>
        <th>Email</th>
      </thead>
      <tr>
        <td>{userData.username}</td>
        <td>{userData.first_name}</td>
        <td>{userData.last_name}</td>
        <td>{userData.preferred_name}</td>
        <td>{userData.phone}</td>
        <td>{userData.email}</td>
      </tr>
    </table>
  );
}
