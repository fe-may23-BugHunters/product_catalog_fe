import './Navigation.scss';
import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="home">
            home
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="phones">
            phones
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="tablets">
            tablets
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="accessories">
            accessories
          </a>
        </li>
      </ul>
    </nav>
  );
};