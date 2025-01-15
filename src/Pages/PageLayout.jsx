// ! ----------------- IMPORTED FILES --------------------------
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
// ! -----------------------------------------------------------

// ! ----------------- IMPORTED MODULES -------------------------
import { Outlet } from "react-router-dom";
// ! -----------------------------------------------------------

/**
 * Description: Main application layout with a flexbox structure.
 *
 * @returns {JSX.Element} A structured layout with a header, navigation, dynamic main content, and footer.
 *
 * @precondition React Router's `<Outlet>` must render the current route's component.
 * @postcondition The layout is displayed with the routed content in the main section.
 */
export default function MainLayout() {
  return (
    <div className="app-container">
      {/* Header Section */}
      <Header />

      {/* Navigation Bar */}
      <Navigation />

      {/* Main Content Section */}
      <main>
        <Outlet /> {/* Renders the current page's content */}
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
