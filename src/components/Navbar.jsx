import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Resume <span>Analyzer</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Tips</li>
        <li>Contact</li>
      </ul>

    </nav>
  );
}

export default Navbar;