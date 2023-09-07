import React, { useState, useEffect } from 'react';
import './AccessoriesPage.scss';
import { SelectBlock } from '../../components/SelectBlock';
import { Pagination } from '../../components/Pagination';
import { CardItem } from '../../components/CardItem';
import { usePathname } from '../../hooks/usePathname';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { Loader } from '../../components/Loader';
import { EmptyComponent } from '../../components/EmptyComponent';
import { getProductsByCategory } from '../../api/products';
import { Categories, Product } from '../../types/product';

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
  const { pathname, onPathChange } = usePathname();
  const [accessories, setAccessories] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getProductsByCategory(10, 0, Categories.ACCESSORIES)
      .then((response) => setAccessories(response.data.rows))
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedCards = accessories.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );

  return (
    <article className="accessories">
      <div className="accessories__breadCrumbs">
        <BreadCrumbs pathname={pathname} onPathChange={onPathChange} />
      </div>

      <div className="accessories__header">
        <h2 className="accessories__title">Accessories</h2>
        <p className="accessories__model">{displayedCards.length} models</p>
        {displayedCards.length > 0 && (
          <>
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
          </>
        )}
      </div>

      <Loader isLoading={isLoading}>
        <EmptyComponent
          data={displayedCards}
          text={'Cannot get accessories :('}
        >
          <div className="accessories__cards">
            {displayedCards.map((accessory) => (
              <div className="accessories__card" key={accessory.id}>
                <CardItem product={accessory} />
              </div>
            ))}
          </div>

          <div className="accessories__pagination">
            <Pagination
              total={accessories.length}
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
