import React, { useState } from 'react';
import './TabletsPage.scss';
import { SelectBlock } from '../../components/SelectBlock';
import { getMockPages } from '../../helpers/getMockPages';
import { Pagination } from '../../components/Pagination';
import { CardItem } from '../../components/CardItem';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { usePathname } from '../../hooks/usePathname';
import { Loader } from '../../components/Loader';
import { EmptyComponent } from '../../components/EmptyComponent';

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
  const { pathname, onPathChange } = usePathname();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedCards = cards.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );

  return (
    <article className="tablets">
      <div className="tablets__breadCrumbs">
        <BreadCrumbs pathname={pathname} onPathChange={onPathChange} />
      </div>

      <div className="tablets__header">
        <h2 className="tablets__title">Tablets</h2>
        <p className="tablets__model">{displayedCards.length} models</p>
        {displayedCards.length > 0
          && <>
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
            </>
        }
      </div>

      <Loader isLoading={false} >
        <EmptyComponent
          data={displayedCards}
          text={'There are no tablets available :('}
        >
          <div className="tablets__cards">
            {displayedCards.map((card) => (
              <div className="tablets__card" key={card}>
                <CardItem />
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
        </EmptyComponent>
      </Loader>
    </article>
  );
};
