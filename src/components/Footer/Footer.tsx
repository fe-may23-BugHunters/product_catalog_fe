import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import '../../styles/blocks/_container.scss';
import styles from './Footer.module.scss';

const footerLinks = [
  {
    title: 'Github',
    path: 'https://fe-may23-BugHunters.github.io/product_catalog_fe',
  },
  { title: 'Contacts', path: '/' },
  { title: 'Rights', path: '/' },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__content}>
          <div className={styles.footer__logo}>
            <Logo />
          </div>

          <nav className={`${styles.footer__nav} ${styles.nav}`}>
            <ul className={styles.nav__list}>
              {footerLinks.map((link) => (
                <li key={link.title} className={styles.nav__item}>
                  <NavLink
                    to={link.path}
                    target="_blank"
                    className={styles.nav__link}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#root" className={styles.footer__button}>
            <span className={styles.footer__button__text}>Back to top</span>
            <button type="button" className={styles.button}>
              <div className={styles.button__up} />
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};
