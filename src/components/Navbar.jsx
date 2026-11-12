
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">

        <NavLink to="/" className="brand">
          Bhasha<span>Bridge</span>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>

          <NavLink to="/explore" className="nav-link">
            Explore
          </NavLink>
          <NavLink to="/phrases" className="nav-link">
            Phrase Library
          </NavLink>
          <NavLink to="/practice" className="nav-link">
            Practice
          </NavLink>

          <NavLink to="/saved" className="nav-link">
            My Phrasebook
          </NavLink>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
