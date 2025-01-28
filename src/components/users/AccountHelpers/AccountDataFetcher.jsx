// ! ----------------- IMPORTED FILES --------------------------
import getUserAPI from "../../../API/UsersAPI/getUserAPI";
// ! -----------------------------------------------------------

// ! ---------------- IMPORTED MODULES -------------------------
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContextProvider";
// ! -----------------------------------------------------------

/**
 * Description: Handles the logic for fetching user data and redirecting
 * if the user is not authenticated.
 *
 * @returns {null} This component does not render anything itself but handles side effects.
 */
export default function AccountDataFetcher() {
  const { setErrorMessage, setIsLoading, setUserData, userData } =
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

        if (!userData?.username && isMounted) {
          const userInfo = await getUserAPI();
          if (isMounted) {
            setUserData(userInfo);
          }
        }
      } catch (error) {
        console.error(error);
        if (isMounted) {
          setErrorMessage("Failed to fetch user information.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [navigate, setErrorMessage, setIsLoading, setUserData, userData]);

  return null; // This component handles only logic, not rendering.
}
