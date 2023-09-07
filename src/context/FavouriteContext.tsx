import React, { createContext } from 'react';
import { getAllByUserId } from '../api/favourites';
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
  const [favouriteProducts, setFavouriteProducts] = React.useState<Product[]>(
    [],
  );

  React.useEffect(() => {
    getAllByUserId()
      .then((dataFromServer) => {
        setFavouriteProducts(() =>
          dataFromServer.data.map(
            ({ product }: { product: Product }) => product,
          ));
      })
      .catch(() => {
        throw new Error('Product by id is not found');
      });
  }, []);

  const addFavouriteProduct = (newFavourite: Product) => {
    const isProductExist = favouriteProducts
      .find((product) => product.id === newFavourite.id);

    if (isProductExist) {
      return;
    }

    setFavouriteProducts((products) => [...products, newFavourite]);
  };

  const removeFavouriteProduct = (id: string) => {
    setFavouriteProducts((current) =>
      current.filter((product) => product.id !== id));
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
