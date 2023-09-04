import React from 'react';
import './BtnBack.scss';
import { ReactComponent as ArrowLeft } from '../../assets/icons/backBtn.svg';
import { NavLink } from 'react-router-dom';

export const BtnBack: React.FC = () => {
  return (
    <NavLink to="/phones" className="btnBack">
      <ArrowLeft className="btnBack__img" id="arrowBackBtn" />
      Back
    </NavLink>
  );
};
