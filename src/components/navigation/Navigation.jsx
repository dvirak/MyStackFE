import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">
        <span className="search-button">Search</span>
      </Link>
      <Link to="/books">All Books</Link>
      {/* {userKey ? (
        <>
          <Link to="/account">Account</Link>
        </>
      ) : (
        <Link to="/account">Log In/Register</Link>
      )} */}
    </nav>
  );
}
