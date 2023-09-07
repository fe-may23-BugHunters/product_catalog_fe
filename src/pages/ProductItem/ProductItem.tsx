import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './ProductItem.scss';

import { BtnBack } from '../../components/BtnBack';
import { ProductTechSpecs } from '../../components/ProductTechSpecs';
import { ProductAbout } from '../../components/ProductAbout';
import { ProductVariants } from '../../components/ProductVariants';
import { ProductPhotos } from '../../components/ProductPhotos';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { CardSlider } from '../../components/CardSlider';
import { usePathname } from '../../hooks/usePathname';

import {
  getProductById,
  getProductByOptions,
  getRecommendedProducts,
} from '../../api/products';
import { Product, VariantOptions } from '../../types/product';
import { getNormalizedTechSpecs } from '../../helpers/products';
import { EmptyComponent } from '../../components/EmptyComponent';

export const ProductItem: React.FC = () => {
  const { pathname, onPathChange } = usePathname();
  const [product, setProduct] = useState<Product | null>(null);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  const { itemId } = useParams();

  const [options, setOptions] = useState<VariantOptions>({
    color: product?.colorsAvailable[0] as string,
    capacity: product?.capacityAvailable[0] as string,
  });

  useEffect(() => {
    getProductById(itemId as string)
      .then((dataFromServer) => {
        setProduct(dataFromServer.data);
      })
      .catch(() => {
        throw new Error('Product by id is not found');
      });
  }, [itemId]);

  useEffect(() => {
    if (!options?.color || !options?.capacity || !product?.namespaceId) {
      return;
    }

    getProductByOptions({
      color: options.color,
      capacity: options.capacity,
      namespaceId: product?.namespaceId as string,
    })
      .then((productFromServer) => {
        setProduct(productFromServer.data[0]);
      })
      .catch(() => {
        throw new Error('Product by options is not found');
      });
  }, [options]);

  useEffect(() => {
    getRecommendedProducts()
      .then((response) => setRecommendedProducts(response.data))
      .catch((error) => {
        throw new Error(error);
      });
  }, [itemId]);

  if (!product) {
    return <EmptyComponent data={product} text={'Product not found :('} />;
  }

  const techSpecs = getNormalizedTechSpecs(product);

  return (
    <div className="product">
      <div className="product__breadCrumbs">
        <BreadCrumbs
          pathname={pathname}
          onPathChange={onPathChange}
          productTitle={product?.name}
        />
      </div>

      <div className="product__btnBack">
        <BtnBack />
      </div>

      <h1 className="product__title">{product.name}</h1>

      <div className="product__content">
        <div className="product__photos">
          <ProductPhotos photos={product?.images} />
        </div>

        <div className="product__variants">
          <ProductVariants
            setOptions={setOptions}
            product={product}
            techSpecs={techSpecs.slice(0, 4)}
          />
        </div>

        <div className="product__about">
          <ProductAbout desciption={product.description} />
        </div>

        <div className="product__techSpecs">
          <ProductTechSpecs techSpecs={techSpecs} />
        </div>
      </div>

      <div className="product__recommended">
        <CardSlider models={recommendedProducts} title={'You may also like'} />
      </div>
    </div>
  );
};
