import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <header>
      <article>
        <h1>
          <Link to="/">
            Screen<span>Views</span>
          </Link>
        </h1>
      </article>
      <nav>
        <ul>
          <li>
            <Link to="/screen/shows">All Shows</Link>
          </li>
          <li>
            <Link to="/screen/movies">All Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
