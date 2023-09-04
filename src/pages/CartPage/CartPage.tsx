import React from 'react';
import './CartPage.scss';
import { CartItem } from '../../components/CartItem';
import { BtnBack } from '../../components/BtnBack';
import { WideBtn } from '../../components/WideBtn';
import { CartModal } from '../../components/CartModal';
import { BannerSlider } from '../../components/BannerSlider';
import { CardItem } from '../../components/CardItem';

export const CartPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="cart">
      {isModalOpen && <CartModal handleClick={() => setIsModalOpen(false)} />}

      <div className="cart__btnBack">
        <BtnBack />
      </div>

      <h1 className="cart__title">Cart</h1>

      <div className="cart__content">
        <div className="cart__items">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="cart__checkout">
          <p className="cart__sum">$2657</p>
          <p className="cart__count">Total for 3 items</p>
          <div className="cart__decor"></div>

          <div
            className="cart__checkoutBtn"
            role="button"
            onClick={() => setIsModalOpen(true)}
          >
            <WideBtn mainTitle={'Checkout'} />
          </div>
        </div>
      </div>

      <BannerSlider />
      <div style={{ width: '300px', height: '100%' }}>
        <CardItem />
      </div>
    </section>
  );
};
