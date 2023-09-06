import React, { createContext } from 'react';
import { getAllByUserId } from '../api/favourites';

interface Context {
  favouriteProducts: string[];
  addFavouriteProduct: (id: string) => void;
  removeFavouriteProduct: (id: string) => void;
  total: number;
}

export const FavouriteContext = createContext({} as Context);

type Props = {
  children: React.ReactNode;
};

export const FavoriteProvider: React.FC<Props> = ({ children }) => {
  const [
    favouriteProducts,
    setFavouriteProducts,
  ] = React.useState<string[]>([]);

  React.useEffect(() => {
    getAllByUserId()
      .then(dataFromServer => {
        setFavouriteProducts(() =>
          dataFromServer.data.map(
            ({ productId }: { productId: string}) => productId,
          ));
      })
      .catch(() => {
        throw new Error('Product by id is not found');
      });
  }, []);

  const addFavouriteProduct = (favouriteId: string) => {
    const isProductExist = favouriteProducts.find(
      (id) => id === favouriteId,
    );

    if (isProductExist) {
      return;
    }

    setFavouriteProducts((ids) => [...ids, favouriteId]);
  };

  const removeFavouriteProduct = (id: string) => {
    setFavouriteProducts((current) =>
      current.filter((favouriteProductId) => favouriteProductId !== id));
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
