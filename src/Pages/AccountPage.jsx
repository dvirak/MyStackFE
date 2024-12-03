import Login from "../components/users/LogIn";
import Account from "../components/users/Account";
import Register from "../components/users/Register";

export default function AccountPage() {
  const userKey = localStorage.getItem("current-user-key");

  return (
    <div className="account-div">
      {userKey ? (
        <Account />
      ) : (
        <>
          <Login />
          <Register />
        </>
      )}
    </div>
  );
}
