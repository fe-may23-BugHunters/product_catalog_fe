import React, { useState } from 'react';
import './TabletsPage.scss';
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

export const TabletsPage: React.FC = () => {
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
    <article className="tablets">
      <div className="tablets__header">
        <h2 className="tablets__title">Tablets</h2>
        <p className="tablets__model">{displayedCards.length} models</p>

        <div className="tablets__select__block">
          <div className="tablets__select__item">
            <SelectBlock
              selectName="Sort by"
              defaultValue="Newest"
              options={options}
            />
          </div>

          <div className="tablets__select__item">
            <SelectBlock
              selectName="Items on page"
              defaultValue={4}
              options={[4, 8, 12, 16]}
            />
          </div>
        </div>
      </div>

      <div className="tablets__cards">
        {displayedCards.map((card) => (
          <div className="tablets__card" key={card}>
            {card}
          </div>
        ))}
      </div>

      <div className="tablets__pagination">
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
