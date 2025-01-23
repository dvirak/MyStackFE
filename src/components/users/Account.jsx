// ! ----------------- IMPORTED FILES --------------------------
import logOut from "./LoginHelpers/logOut";
import { getUserAPI } from "../../API/UsersAPI";
// ! -----------------------------------------------------------

// ! ---------------- IMPORTED MODULES -------------------------
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContextProvider";
import AccountTable from "./AccountHelpers/AccountTable";
import { useNavigate } from "react-router-dom";
// ! -----------------------------------------------------------

/**
 * Description: Represents the Account component, which displays user-specific information
 * and handles logout functionality.
 *
 * @returns {JSX.Element} A JSX element displaying a logged-in message, a logout button, and any error messages.
 *
 * @precondition The user must be logged in and have access to the `getUserAPI` function to retrieve account data.
 * @postcondition Fetches the current user's information and displays it. Provides the ability to log out and displays any error messages if the logout fails.
 */
export default function Account() {
  // use context to load state
  const { setErrorMessage, isLoading, setIsLoading, userData, setUserData } =
    useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setErrorMessage("");
      setIsLoading(true);

      try {
        const storedToken = localStorage.getItem("current-user-key");
        if (!storedToken) {
          setErrorMessage("No token found. Redirecting to login.");
          navigate("/login");
          return;
        }

        // Fetch user data if not already set
        if (!userData?.username && isMounted) {
          const userInfo = await getUserAPI();
          if (isMounted) {
            setUserData(userInfo);
            // window.reload();
          }
        }
      } catch (error) {
        console.error(error);
        if (isMounted) setErrorMessage("Failed to fetch user information.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [navigate, setErrorMessage, setIsLoading, setUserData, userData]);
  console.log(userData);
  return (
    <>
      {isLoading ? <p>Loading user information...</p> : <AccountTable />}
      <button
        onClick={(e) => logOut(e, setErrorMessage, setUserData, navigate)}
      >
        LOG OUT
      </button>
      {/* Display any error messages if present. */}
    </>
  );
}
