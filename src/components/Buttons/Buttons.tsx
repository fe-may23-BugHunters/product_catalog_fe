import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import './Buttons.scss';
import { BurgerMenu } from '../BurgerMenu';
import { FavouriteContext } from '../../context/FavouriteContext';

export const Buttons: React.FC = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  const { favouriteProducts } = useContext(FavouriteContext);

  const favouriteItemsCount = favouriteProducts.length
    ? favouriteProducts.length : null;
  const cartItemIds = null;

  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement;

    body.style.overflow = isActiveBurger ? 'hidden' : 'visible';
  }, [isActiveBurger]);

  return (
    <div className="buttons">
      <div
        className="icon-wrapper icon-wrapper--menu"
        onClick={() => setIsActiveBurger(!isActiveBurger)}
      >
        <div
          className={cn('icon icon--menu', { 'is-active': isActiveBurger })}
        ></div>
      </div>

      {isActiveBurger && (
        <div onClick={() => setIsActiveBurger(false)}>
          <BurgerMenu
            productsInFavourite={favouriteItemsCount}
            productsInCart={cartItemIds}
          />
        </div>
      )}

      <NavLink to="favourites" className="icon-wrapper">
        <div className="icon icon--favourites">
          {favouriteItemsCount && (
            <div className="ellipse">{favouriteItemsCount}</div>
          )}
        </div>
      </NavLink>

      <NavLink to="cart" className="icon-wrapper">
        <div className="icon icon--cart">
          {cartItemIds && <div className="ellipse">{cartItemIds}</div>}
        </div>
      </NavLink>
    </div>
  );
};
