import React, { useState } from 'react';
import './PhonesPage.scss';
import { SelectBlock } from '../../components/SelectBlock';
import { getMockPages } from '../../helpers/getMockPages';
import { Pagination } from '../../components/Pagination';

const cards = getMockPages(0, 20);
const options = [
  'Default', 'Price Lowest', 'Price Highest', 'Newest', 'Oldest',
];

export const PhonesPage: React.FC = () => {
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
    <article className="phones">
      <h2 className="phones__title">Phones</h2>
      <p className="phones__model">{displayedCards.length} models</p>

      <div className="phones__select__block">
        <div className="phones__select__item">
          <SelectBlock
            selectName='Sort by'
            defaultValue='Newest'
            options={options}
          />
        </div>

        <div className="phones__select__item">
          <SelectBlock
            selectName='Items on page'
            defaultValue={4}
            options={[4, 8, 12, 16]}
          />
        </div>
      </div>

      <div className="phones__cards">
        {displayedCards.map(card => (
          <div
            className="phones__card"
            key={card}>
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
