import React from 'react';
import s from './CartPage.module.scss';
import { CartItem } from '../../components/CartItem';

export const CartPage: React.FC = () => {
  return (
    <section className={s.cart}>
      <a href="#back" className={s.cart__btnBack}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Icons/Chevron (Arrow Right)">
            <path
              id="Vector (Stroke)"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.4708 3.52861C10.2104 3.26826 9.78829
                3.26826 9.52794 3.52861L5.52794 7.52861C5.26759
                7.78896 5.26759 8.21107 5.52794 8.47141L9.52794
                12.4714C9.78829 12.7318 10.2104 12.7318 10.4708
                12.4714C10.7311 12.2111 10.7311 11.789 10.4708
                11.5286L6.94216 8.00001L10.4708 4.47141C10.7311
                4.21107 10.7311 3.78896 10.4708 3.52861Z"
              fill="#F1F2F9"
            />
          </g>
        </svg>
        Back
      </a>

      <h1 className={s.cart__title}>Cart</h1>

      <div className={s.cart__content}>
        <div className={s.cart__items}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className={s.cart__checkout}>
          <p className={s.cart__sum}>$2657</p>
          <p className={s.cart__count}>Total for 3 items</p>
          <div className={s.cart__decor}></div>
          <button className={s.cart__checkoutBtn}>Checkout</button>
        </div>
      </div>
    </section>
  );
};