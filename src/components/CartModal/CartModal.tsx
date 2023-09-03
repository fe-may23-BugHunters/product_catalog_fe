import React from 'react';
import './CartModal.scss';
import { getCurrentTime } from '../../utils/products';
import { BtnClose } from '../BtnClose';

interface Props {
  handleClick: () => void;
}

export const CartModal: React.FC<Props> = ({ handleClick }) => {
  const orderDate = getCurrentTime();

  return (
    <div className="cartModal">
      <div className="cartModal__content">
        <div className="cartModal__backBtn">
          <BtnClose handleClick={handleClick} />
        </div>

        <h2 className="cartModal__title">Thank you for your order!</h2>

        <p className="cartModal__orderNumber">Order number: 487-FG4-48</p>

        <p className="cartModal__orderDate">Order date: {orderDate}</p>
      </div>
    </div>
  );
};
