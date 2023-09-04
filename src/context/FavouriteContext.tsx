/*eslint-disable*/
import React, { createContext } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Product } from '../types/product';

interface Context {
  favouriteProducts: Product[];
  addFavouriteProduct: (product: Product) => void;
  removeFavouriteProduct: (id: string) => void;
  total: number;
}

export const FavouriteContext = createContext({} as Context);

type Props = {
  children: React.ReactNode;
};

export const FavoriteProvider: React.FC<Props> = ({ children }) => {
  const [favouriteProducts, setFavouriteProducts] = useLocalStorage<Product[]>(
    'favouriteProducts',
    [],
  );

  const addFavouriteProduct = (favouriteProduct: Product) => {
    const isProductExist = favouriteProducts.find(
      (product) => product.id === favouriteProduct.id,
    );

    if (isProductExist) {
      return;
    }

    setFavouriteProducts((current) => [...current, favouriteProduct]);
  };

  const removeFavouriteProduct = (id: string) => {
    setFavouriteProducts(current =>
      current.filter(favouriteProductId => favouriteProductId.id !== id),
    );
  };

  const value = {
    favouriteProducts,
    addFavouriteProduct,
    removeFavouriteProduct,
    total: favouriteProducts.length,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};
