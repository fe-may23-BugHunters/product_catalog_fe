import React, { useState, useEffect } from 'react';
import './TabletsPage.scss';
import { SelectBlock } from '../../components/SelectBlock';
import { Pagination } from '../../components/Pagination';
import { CardItem } from '../../components/CardItem';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { usePathname } from '../../hooks/usePathname';
import { Categories, Product } from '../../types/product';
import { getProductsByCategory } from '../../api/products';

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
  const [tablets, setTablets] = useState<Product[]>([]);

  useEffect(() => {
    getProductsByCategory(10, 0, Categories.TABLETS)
      .then((response) => setTablets(response.data.rows))
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedCards = tablets.slice(
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
        {displayedCards.map((tablet) => (
          <div className="tablets__card" key={tablet.id}>
            <CardItem product={tablet}/>
          </div>
        ))}
      </div>

      <div className="tablets__pagination">
        <Pagination
          total={tablets.length}
          perPage={perPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </article>
  );
};
