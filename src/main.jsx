// ! ----------------- IMPORTED FILES --------------------------
import "./index.css";
import App from "./App.jsx";
// ! -----------------------------------------------------------

// ! ----------------- IMPORTED MODULES --------------------------
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// ! -----------------------------------------------------------

/**
 * Description: The entry point for the React application. It initializes the app
 * and renders the `App` component inside the root element. The `StrictMode` is enabled
 * to help with identifying potential problems in the app during development.
 *
 * @returns {JSX.Element} The app is rendered to the DOM within the `StrictMode`.
 *
 * @precondition The `root` element must exist in the HTML, and the necessary React packages must be installed.
 * @postcondition The app is initialized and rendered in development mode with extra checks for potential issues.
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
