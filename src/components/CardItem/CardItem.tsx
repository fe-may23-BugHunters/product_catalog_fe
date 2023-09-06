import React from 'react';
import './CardItem.scss';
import { NavLink } from 'react-router-dom';
import { WideBtn } from '../WideBtn';
import { LikeBtn } from '../LikeBtn';
import { Product } from '../../types/product';

type Props = {
  product: Product;
}

export const CardItem: React.FC<Props> = ({ product }) => {
  return (
    <article className="card">
      <NavLink
        to={`/${product?.category}/${product?.id}`}
        className="card__photo"
      >
        <img
          className="card__photo"
          src={`product_catalog_fe/${product?.images[0]}`}
          alt="product?.name"
        />
      </NavLink>
      <h2 className="card__title">{product?.name}</h2>

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
        <div className="card__addToCartBtn">
          <WideBtn
            mainTitle="Add to cart"
            secondaryTitle="Added to cart"
          />
        </div>

        <div className="card__likeBtn">
          <LikeBtn product={product} />
        </div>
      </div>
    </article>
  );
};
