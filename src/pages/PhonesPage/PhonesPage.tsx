import React, { useState, useEffect } from 'react';
import './PhonesPage.scss';
import { SelectBlock } from '../../components/SelectBlock';
import { Pagination } from '../../components/Pagination';
import { usePathname } from '../../hooks/usePathname';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { EmptyComponent } from '../../components/EmptyComponent';
import { Loader } from '../../components/Loader';
import { Product } from '../../types/product';
import { getProductsByCategory } from '../../api/products';
import { CardItem } from '../../components/CardItem';

const options = [
  'Default',
  'Price Lowest',
  'Price Highest',
  'Newest',
  'Oldest',
];

export const PhonesPage: React.FC = () => {
  const { pathname, onPathChange } = usePathname();
  const [perPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [phones, setPhones] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getProductsByCategory()
      .then((response) => setPhones(response.data.rows))
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const displayedCards = phones.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );

  return (
    <article className="phones">
      <div className="phones__breadCrumbs">
        <BreadCrumbs pathname={pathname} onPathChange={onPathChange} />
      </div>

      <div className="phones__header">
        <h2 className="phones__title">Phones</h2>
        <p className="phones__model">{displayedCards.length} models</p>
        {displayedCards.length > 0 && (
          <>
            <div className="phones__select__block">
              <div className="phones__select__item">
                <SelectBlock
                  selectName="Sort by"
                  defaultValue="Newest"
                  options={options}
                />
              </div>

              <div className="phones__select__item">
                <SelectBlock
                  selectName="Items on page"
                  defaultValue={4}
                  options={[4, 8, 12, 16]}
                />
              </div>
            </div>
          </>
        )}
      </div>

      <Loader isLoading={isLoading}>
        <EmptyComponent
          data={displayedCards}
          text={'Cannot get phones :('}
        >
          <div className="phones__cards">
            {displayedCards.map((phone) => (
              <div className="phones__card" key={phone.id}>
                <CardItem product={phone} />
              </div>
            ))}
          </div>

          <div className="phones__pagination">
            <Pagination
              total={phones.length}
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
