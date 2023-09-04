/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import './styles/main.scss';
import { MainLayout } from './layouts/MainLayout';
import { Outlet } from 'react-router-dom';
import { getProductById, getProductsByCategory } from './api/fetchClient';

const App: React.FC = () => {
  const [products, setProducts] = useState<any>([]);
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    getProductsByCategory()
      .then((someProducts) => {
        setProducts(someProducts.data);
        console.log(someProducts);
      })
      .catch((err) => {
        console.log(err);

        throw new Error(err);
      });

    getProductById('e50752f4-46a4-11ee-ac61-fed709f87b70')
      .then((someProduct) => {
        setProduct(someProduct.data);
        console.log(someProduct);
      })
      .catch((err) => {
        console.log(err);

        throw new Error(err);
      });
  }, []);

  return (
    <>
      {JSON.stringify(products.rows)}
      <img src={`product_catalog_fe/${product.image}`}></img>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
};

export default App;
