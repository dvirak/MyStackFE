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
 * and handles logout functionality. It manages user state, fetches user data if not already set,
 * and provides a logout option.
 *
 * @returns {JSX.Element} A JSX element displaying a logged-in message, a logout button,
 * and any error messages when applicable.
 *
 * @precondition The user must be logged in with a valid token in `localStorage`.
 * The `getUserAPI` function must be correctly implemented to fetch user data.
 * @postcondition Fetches and displays the current user's information. Allows the user to log out
 * and handles redirection if no valid token is found or an error occurs during data fetch.
 */
export default function Account() {
  // Load global state and methods from context.
  const { setErrorMessage, isLoading, setIsLoading, userData, setUserData } =
    useContext(AppContext);

  // Hook to handle navigation.
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true; // Prevents state updates if the component is unmounted.

    const fetchData = async () => {
      // Clear any existing error messages and indicate loading.
      setErrorMessage("");
      setIsLoading(true);

      try {
        // Retrieve the token from localStorage.
        const storedToken = localStorage.getItem("current-user-key");
        if (!storedToken) {
          setErrorMessage("No token found. Redirecting to login.");
          navigate("/login");
          return;
        }

        // Fetch and set user data if not already present.
        if (!userData?.username && isMounted) {
          const userInfo = await getUserAPI();
          if (isMounted) {
            setUserData(userInfo);
          }
        }
      } catch (error) {
        console.error(error); // Log error for debugging.
        if (isMounted) {
          setErrorMessage("Failed to fetch user information.");
        }
      } finally {
        // Stop the loading spinner after data fetch or error.
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to prevent state updates after unmounting.
    return () => {
      isMounted = false;
    };
  }, [navigate, setErrorMessage, setIsLoading, setUserData, userData]);

  return (
    <>
      {/* Show loading message if data is being fetched, otherwise render the AccountTable component */}
      {isLoading ? <p>Loading user information...</p> : <AccountTable />}

      {/* Logout button to clear user session and redirect */}
      <button
        onClick={(e) => logOut(e, setErrorMessage, setUserData, navigate)}
      >
        LOG OUT
      </button>

      {/* Any error messages are displayed automatically via global context state */}
    </>
  );
}
