import React from 'react';
import { CartButton } from '../Buttons/CartButton/CartButton';
import './CardItem.scss';
import { FavouriteButton } from '../Buttons/FavouriteButton';
import { NavLink } from 'react-router-dom';

export const CardItem: React.FC = () => {
  return (
    <article className="card">
      <NavLink to="/products" target="_blank" className="card__photo">
        <img className="card__photo" src="http://surl.li/krahu" alt="name" />
      </NavLink>
      <h2 className="card__title">Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</h2>

      <div className="card__price">
        <span className="card__price__now">$799</span>
        <span className="card__price__old">$899</span>
      </div>
      <span className="card__line" />

      <ul className="card__details">
        <li className="detail">
          <span className="detailTitle">Screen</span>
          <span className="detailValue">5.8” OLED</span>
        </li>
        <li className="detail">
          <span className="detailTitle">Capacity</span>
          <span className="detailValue">64 GB</span>
        </li>
        <li className="detail">
          <span className="detailTitle">RAM</span>
          <span className="detailValue">4 GB</span>
        </li>
      </ul>
      <div className="card__buttons">
        {<CartButton />}
        {<FavouriteButton />}
      </div>
    </article>
  );
};
