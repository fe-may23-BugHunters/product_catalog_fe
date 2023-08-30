import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import './Buttons.scss';
import { BurgerMenu } from '../BurgerMenu';

export const Buttons: React.FC = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);
  const favouriteItemIds = [1, 2, 3, 4, 5, 6, 10, 11,
    11, 21, 1, 2, 3, 4, 5, 6, 10, 11, 11, 21,
    1, 2, 3, 4, 5, 6, 10, 11, 11, 21,
    1, 2, 3, 4, 5, 6, 10, 11, 11, 21,
    1, 2, 3, 4, 5, 6, 10, 11, 11, 21,
    1, 2, 3, 4, 5, 6, 10, 11,
    11, 21, 1, 2, 3, 4, 5, 6, 10, 11, 11, 21,
    1, 2, 3, 4, 5, 6, 10, 11, 11, 21,
    1, 2, 3, 4, 5, 6, 10, 11, 11, 21,
    1, 2, 3, 4, 5, 6, 10, 11, 11, 21];
  const cartItemIds = [];

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
          productsInFavourite={favouriteItemIds.length}
          productsInCart={cartItemIds.length}
          />
        </div>
      )}
      {favouriteItemIds.length ? (
        <NavLink to="favourites" className="icon-wrapper">
        <div className="icon icon--favourites">
         <div className="ellipse">{favouriteItemIds.length}</div>
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
