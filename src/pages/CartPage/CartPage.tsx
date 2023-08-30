import React from 'react';
import s from './CartPage.module.scss';
import { CartItem } from '../../components/CartItem';
import { BtnBack } from '../../components/BtnBack';

export const CartPage: React.FC = () => {
  return (
    <section className={s.cart}>
      <div className={s.cart__btnBack}>
        <BtnBack />
      </div>

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
