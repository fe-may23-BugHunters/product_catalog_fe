import React, { useEffect, useState } from 'react';
import './styles/main.scss';
import { MainLayout } from './layouts/MainLayout';
import { Outlet } from 'react-router-dom';
import { getProductById, getSpecifiedProducts } from './api/fetchClient';

const App: React.FC = () => {
  const [products, setProducts] = useState<any>([]);
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    getSpecifiedProducts()
    .then(products => {
      setProducts(products.data);
      console.log(products);
    })
    .catch(err => {
      console.log(err);

      return Promise.reject();
    });

    getProductById('e50752f4-46a4-11ee-ac61-fed709f87b70')
    .then(product => {
      setProduct(product.data);
      console.log(product);
    })
    .catch(err => {
      console.log(err);

      return Promise.reject();
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
