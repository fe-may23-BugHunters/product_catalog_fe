import React, { useState } from 'react';
import './AccessoriesPage.scss';
import { SelectBlock } from '../../components/SelectBlock';
import { getMockPages } from '../../helpers/getMockPages';
import { Pagination } from '../../components/Pagination';

const cards = getMockPages(0, 20);
const options = [
  'Default',
  'Price Lowest',
  'Price Highest',
  'Newest',
  'Oldest',
];

export const AccessoriesPage: React.FC = () => {
  const [perPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedCards = cards.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );

  return (
    <article className="accessories">
      <div className="accessories__header">
        <h2 className="accessories__title">Accessories</h2>
        <p className="accessories__model">{displayedCards.length} models</p>

        <div className="accessories__select__block">
          <div className="accessories__select__item">
            <SelectBlock
              selectName="Sort by"
              defaultValue="Newest"
              options={options}
            />
          </div>

          <div className="accessories__select__item">
            <SelectBlock
              selectName="Items on page"
              defaultValue={4}
              options={[4, 8, 12, 16]}
            />
          </div>
        </div>
      </div>

      <div className="accessories__cards">
        {displayedCards.map((card) => (
          <div className="accessories__card" key={card}>
            {card}
          </div>
        ))}
      </div>

      <div className="accessories__pagination">
        <Pagination
          total={cards.length}
          perPage={perPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </article>
  );
};
