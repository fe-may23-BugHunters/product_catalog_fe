import React from 'react';
import './ProductVariants.scss';
import cn from 'classnames';
import { TechSpecsRow } from '../TechSpecsRow';
import { WideBtn } from '../WideBtn';
import { LikeBtn } from '../LikeBtn';

const colors = ['#FCDBC1', '#5F7170', '#4C4C4C', '#F0F0F0'];

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
];

const memories = [64, 256, 512];

export const ProductVariants: React.FC = () => {
  const [selectedMemory, setMemory] = React.useState(memories[0]);
  const [selectedColor, setColor] = React.useState(colors[0]);

  return (
    <section className="variants">
      <div className="variants__labels">
        <h2 className="variants__title">Available colors</h2>

        <span className="variants__productId">ID: 802390</span>
      </div>

      <div className="variants__wrapper">
        <ul className="variants__colorsList">
          {colors.map((hex) => (
            <li className="variants__colorsItem" key={hex}>
              <button
                className={cn('variants__colorsBtn', {
                  'variants__colorsBtn--active': hex === selectedColor,
                })}
                style={{ backgroundColor: `${hex}` }}
                onClick={() => setColor(hex)}
              />
            </li>
          ))}
        </ul>

        <h2 className="variants__label">Select capacity</h2>

        <ul className="variants__memories">
          {memories.map((memory) => (
            <li className="variants__memoryItem" key={memory}>
              <button
                className={cn('variants__memoryBtn', {
                  'variants__memoryBtn--active': memory === selectedMemory,
                })}
                onClick={() => setMemory(memory)}
              >
                {memory} GB
              </button>
            </li>
          ))}
        </ul>

        <p className="variants__price">
          <span className="variants__newPrice">$799</span>
          <span className="variants__oldPrice">$1199</span>
        </p>

        <p className="variants__buttons">
          <div className="variants__wideBtn">
            <WideBtn
              mainTitle={'Add to cart'}
              secondaryTitle={'Added to cart'}
            />
          </div>

          <div className="variants__favouriteBtn">
            <LikeBtn />
          </div>
        </p>

        <ul className="variants__techSpecs">
          {data.map(({ param, value }) => (
            <React.Fragment key={param}>
              <TechSpecsRow param={param} value={value} />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
};
