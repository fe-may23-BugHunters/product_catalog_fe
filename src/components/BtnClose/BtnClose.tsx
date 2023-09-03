import React from 'react';
import './BtnClose.scss';
import { ReactComponent as CloseImg } from '../../assets/icons/Close.svg';

interface Props {
  handleClick: () => void;
}

export const BtnClose: React.FC<Props> = ({ handleClick }) => {
  return (
    <button type="button" className="btnClose" onClick={handleClick}>
      <CloseImg />
    </button>
  );
};
