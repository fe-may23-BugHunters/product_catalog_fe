import React from 'react';
import './WideBtn.scss';
import cn from 'classnames';

interface Props {
  mainTitle: string;
  secondaryTitle?: string;
}

export const WideBtn: React.FC<Props> = ({
  mainTitle,
  secondaryTitle = '',
}) => {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <button
      className={cn('wideBtn', {
        'wideBtn--isDoubleTitle': secondaryTitle,
        'wideBtn--active': isClicked,
      })}
      onClick={() => setIsClicked(!isClicked)}
    >
      {isClicked && secondaryTitle ? secondaryTitle : mainTitle}
    </button>
  );
};
