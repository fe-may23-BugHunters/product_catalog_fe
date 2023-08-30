import React from 'react';
import s from './ProductItem.module.scss';
import { BtnBack } from '../../components/BtnBack';
import { ProductsSlider } from '../../components/ProductsSlider';
import { ProductTechSpecs } from '../../components/ProductTechSpecs';
import { ProductAbout } from '../../components/ProductAbout';
import { ProductVariants } from '../../components/ProductVariants';
import { ProductPhotos } from '../../components/ProductPhotos';

export const ProductItem: React.FC = () => {
  return (
    <div className={s.product}>
      <div className={s.product__btnBack}>
        <BtnBack />
      </div>

      <h1 className={s.product__title}>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>

      <div className={s.product__content}>
        <div className={s.product__photos}>
            <ProductPhotos />
        </div>

        <div className={s.product__variants}>
            <ProductVariants />
        </div>

        <div className={s.product__about}>
            <ProductAbout />
        </div>

        <div className={s.product__techSpecs}>
            <ProductTechSpecs />
        </div>
      </div>

      <div className={s.product__recommended}>
        <ProductsSlider />
      </div>
    </div>
  );
};
