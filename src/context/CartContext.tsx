import React, { createContext } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Product } from '../types/product';

interface Context {
  cartProducts: Product[];
  totalPrice?: number;
  addCartProduct: (product: Product) => void;
  removeCartProduct: (id: string) => void;
  total: number;
}

export const CartContext = createContext({} as Context);

type Props = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cartProducts, setCartProducts] = useLocalStorage<Product[]>(
    'cartProducts',
    [],
  );

  const addCartProduct = (cartProduct: Product) => {
    const isProductExist = cartProducts.find(
      (product) => product.id === cartProduct.id,
    );

    if (isProductExist) {
      return;
    }

    setCartProducts((current) => [...current, cartProduct]);
  };

  const removeCartProduct = (id: string) => {
    setCartProducts((current) =>
      current.filter((cartProductId) => cartProductId.id !== id));
  };

  const countPrice = () => {
    if (cartProducts.length === 0) {
      return;
    }

    return cartProducts
      .map((product) => product.priceDiscount || product.priceRegular)
      .reduce((a, b) => a + b);
  };

  const totalPrice = countPrice();

  const value = {
    cartProducts,
    totalPrice,
    addCartProduct,
    removeCartProduct,
    total: cartProducts.length,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
