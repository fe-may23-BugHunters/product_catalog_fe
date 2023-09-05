import React from 'react';
import './ProductItem.scss';
import { BtnBack } from '../../components/BtnBack';
import { ProductTechSpecs } from '../../components/ProductTechSpecs';
import { ProductAbout } from '../../components/ProductAbout';
import { ProductVariants } from '../../components/ProductVariants';
import { ProductPhotos } from '../../components/ProductPhotos';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { usePathname } from '../../hooks/usePathname';
import { CardSlider } from '../../components/CardSlider';

export const ProductItem: React.FC = () => {
  const { pathname, onPathChange } = usePathname();

  return (
    <div className="product">
      <div className="product__breadCrumbs">
        <BreadCrumbs pathname={pathname} onPathChange={onPathChange} />
      </div>

      <div className="product__btnBack">
        <BtnBack />
      </div>

      <h1 className="product__title">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>

      <div className="product__content">
        <div className="product__photos">
          <ProductPhotos />
        </div>

        <div className="product__variants">
          <ProductVariants />
        </div>

        <div className="product__about">
          <ProductAbout />
        </div>

        <div className="product__techSpecs">
          <ProductTechSpecs />
        </div>
      </div>

      <div className="product__recommended">
        <CardSlider title={'You may also like'}/>
      </div>
    </div>
  );
};
