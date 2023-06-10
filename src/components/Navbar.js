import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Books' },
    { path: 'categories', text: 'Categories' },
  ];
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.logoLink}>
          <h1>Bookstore CMS</h1>
          <nav>
            <ul>
              {links.map((link) => (
                <React.Fragment key={link.text}>
                  <li>
                    <NavLink to={link.path}>{link.text.toUpperCase()}</NavLink>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.iconPerson}>
          <span className="material-icons">account_circle</span>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
