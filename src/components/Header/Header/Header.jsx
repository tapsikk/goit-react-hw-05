import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>

          <nav>
            <ul className={styles.nav}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};