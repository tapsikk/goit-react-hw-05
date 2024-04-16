import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies/" className={({ isActive }) => isActive ? styles.active : styles.link}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;