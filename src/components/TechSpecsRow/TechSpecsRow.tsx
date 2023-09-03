import React from 'react';
import './TechSpecsRow.scss';

interface Props {
  param: string;
  value: string;
}

export const TechSpecsRow: React.FC<Props> = ({ param, value }) => {
  return (
    <li className="techSpecsRow__item">
      <span className="techSpecsRow__param">{param}</span>
      <span className="techSpecsRow__value">{value}</span>
    </li>
  );
};
