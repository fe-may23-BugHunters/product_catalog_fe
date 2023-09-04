import React from 'react';
import { NavLink } from 'react-router-dom';
import './CartItem.scss';
import cn from 'classnames';
import { ReactComponent as CloseImg } from '../../assets/icons/Close.svg';
import { ReactComponent as PlusImg } from '../../assets/icons/Plus.svg';
import { ReactComponent as MinusImg } from '../../assets/icons/Minus.svg';

export const CartItem: React.FC = () => {
  return (
    <article className="cartItem">
      <div className="cartItem__row">
        <button className="cartItem__remove">
          <CloseImg className="cartItem__closeIcon" />
        </button>

        <NavLink to="/phones/1" className="cartItem__imageBlock">
          <img
            src="http://surl.li/krahu"
            className="cartItem__image"
            alt="Apple iPhone 14 Pro 128GB Silver (MQ023)"
          />
        </NavLink>

        <p className="cartItem__title">
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </p>
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
          $<span>999</span>
        </p>
      </div>
    </article>
  );
};
