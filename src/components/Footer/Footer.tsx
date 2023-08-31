import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import '../../styles/blocks/_container.scss';
import './Footer.scss';

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
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo">
            <Logo />
          </div>

          <nav className="footer__nav nav">
            <ul className="nav__list">
              {footerLinks.map((link) => (
                <li key={link.title} className="nav__item">
                  <NavLink
                    to={link.path}
                    target="_blank"
                    className="nav__link"
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__moveUp">
            <span className="footer__label">Back to top</span>
            <a href="#root" className="footer__btn-wrapper">
              <div className="footer__btn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
