import React from 'react';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';

import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__left">
        <Logo />

        <Navigation />
      </div>
    </header>
  );
};
