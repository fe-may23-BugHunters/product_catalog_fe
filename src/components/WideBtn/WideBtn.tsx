import React from 'react';
import './WideBtn.scss';
import cn from 'classnames';

interface Props {
  mainTitle: string;
  secondaryTitle: string;
}

export const WideBtn: React.FC<Props> = ({ mainTitle, secondaryTitle }) => {
  const [isAddedToCart, setIsAddedToCart] = React.useState(false);

  return (
    <button
      className={cn('wideBtn', {
        'wideBtn--isDoubleTitle': secondaryTitle,
        'wideBtn--active': isAddedToCart,
      })}
      onClick={() => setIsAddedToCart(!isAddedToCart)}
    >
      {isAddedToCart && secondaryTitle ? secondaryTitle : mainTitle}
    </button>
  );
};
