import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import './Buttons.scss';
import { BurgerMenu } from '../BurgerMenu';

export const Buttons: React.FC = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  const favouriteItemsCount = 10;
  const cartItemIds = [];

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
            productsInCart={cartItemIds.length}
          />
        </div>
      )}
      {favouriteItemsCount ? (
        <NavLink to="favourites" className="icon-wrapper">
          <div className="icon icon--favourites">
            <div className="ellipse">{favouriteItemsCount}</div>
          </div>
        </NavLink>
      ) : (
        <NavLink to="favourites" className="icon-wrapper">
          <div className="icon icon--favourites"></div>
        </NavLink>
      )}
      {cartItemIds.length ? (
        <NavLink to="cart" className="icon-wrapper">
          <div className="icon icon--cart">
            <div className="ellipse">{cartItemIds.length}</div>
          </div>
        </NavLink>
      ) : (
        <NavLink to="cart" className="icon-wrapper">
          <div className="icon icon--cart"></div>
        </NavLink>
      )}
    </div>
  );
};
