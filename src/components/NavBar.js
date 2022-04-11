import { Link } from "react-router-dom";

const NavBar = () => (
  <nav>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/about">About</Link>
    </p>
  </nav>
);

export default NavBar;
