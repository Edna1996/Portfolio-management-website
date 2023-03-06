import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="portfolio-logo">
        Portfolio
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
