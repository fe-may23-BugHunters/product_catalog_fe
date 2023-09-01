import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/LogoHeader.svg';
import './LogoHeader.scss';

export const Logo: React.FC = () => {
  return (
    <div className="logo">
      <NavLink to="/home">
        <img className="logo__img" src={logo} alt="Nice gadgets logo" />
      </NavLink>
    </div>
  );
};
