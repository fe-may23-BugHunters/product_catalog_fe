import React from 'react';
import logo from '../../assets/Logo.svg';
import './Logo.scss';

export const Logo: React.FC = () => {
  return (
    <div className="logo">
      <a href="home">
        <img className="logo__img" src={`${logo}`} alt="Nice gadgets logo" />
      </a>
    </div>
  );
};
