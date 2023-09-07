import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './CartItem.scss';
import cn from 'classnames';
import { ReactComponent as CloseImg } from '../../assets/icons/Close.svg';
import { ReactComponent as PlusImg } from '../../assets/icons/Plus.svg';
import { ReactComponent as MinusImg } from '../../assets/icons/Minus.svg';
import { Product } from '../../types/product';
import { CartContext } from '../../context/CartContext';

type Props = {
  product: Product;
};

export const CartItem: React.FC<Props> = ({ product }) => {
  const { removeCartProduct } = useContext(CartContext);

  return (
    <article className="cartItem">
      <div className="cartItem__row">
        <button
          className="cartItem__remove"
          onClick={() => removeCartProduct(product.id)}
        >
          <CloseImg className="cartItem__closeIcon" />
        </button>

        <NavLink
          to={`/${product?.category}/${product?.id}`}
          className="cartItem__imageBlock"
        >
          <img
            src={`${location.origin}/product_catalog_fe/${product?.images[0]}`}
            className="cartItem__image"
            alt="product?.name"
          />
        </NavLink>

        <p className="cartItem__title">{product.name}</p>
      </div>

      <div className="cartItem__row">
        <div className="cartItem__count">
          <button
            className={cn('cartItem__decreaseBtn', {
              cartItem__disabled: true,
            })}
          >
            <MinusImg />
          </button>
          <span className="cartItem__amount">1</span>
          <button className="cartItem__increase">
            <PlusImg />
          </button>
        </div>

        <p className="cartItem__price">
          {product.priceDiscount ? (
            <>
              <span className="card__price__now">
                ${product?.priceDiscount}
              </span>
              <span className="card__price__old">${product?.priceRegular}</span>
            </>
          ) : (
            <span className="card__price__old">${product?.priceRegular}</span>
          )}
        </p>
      </div>
    </article>
  );
};
