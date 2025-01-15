/**
 * Description: A simple React functional component that renders the header section of the page.
 * Displays a title within a styled `div` element.
 *
 * @returns {JSX.Element} The rendered header component containing the title.
 *
 * @precondition None
 * @postcondition The header is displayed with the title "My Stack".
 */

export default function Header() {
  return (
    <header className="header">
      <h1>My Stack</h1>
    </header>
  );
}
