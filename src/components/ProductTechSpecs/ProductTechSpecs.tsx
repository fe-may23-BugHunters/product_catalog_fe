import React from 'react';
import './ProductTechSpecs.scss';
import { TechSpecsRow } from '../TechSpecsRow';

const data = [
  {
    param: 'Screen',
    value: '6.5” OLED',
  },
  {
    param: 'Resolution',
    value: '2688x1242',
  },
  {
    param: 'Processor',
    value: 'Apple A12 Bionic',
  },
  {
    param: 'RAM',
    value: '3 GB',
  },
  {
    param: 'Built in memory',
    value: '64 GB',
  },
  {
    param: 'Camera',
    value: '12 Mp + 12 Mp + 12 Mp (Triple)',
  },
  {
    param: 'Zoom',
    value: 'Optical, 2x',
  },
  {
    param: 'Cell',
    value: 'GSM, LTE, UMTS',
  },
];

export const ProductTechSpecs: React.FC = () => {
  return (
    <section className="techSpecs">
      <h2 className="techSpecs__title">Tech specs</h2>

      <ul className="techSpecs__list">
        {data.map(({ param, value }) => (
          <React.Fragment key={param}>
            <TechSpecsRow param={param} value={value} />
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};
