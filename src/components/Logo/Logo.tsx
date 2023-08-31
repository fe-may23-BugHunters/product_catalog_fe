import React from 'react';
import { NavLink } from 'react-router-dom';
import './Logo.scss';

type Props = object;

export const Logo: React.FC<Props> = () => {
  return (
    <div className="logo">
      <NavLink to="/" className="logo_link">
        <div className="logo__text" />
      </NavLink>
    </div>
  );
};
