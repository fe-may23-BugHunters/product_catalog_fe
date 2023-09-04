import React from 'react';
import cn from 'classnames';
import './LikeBtn.scss';
import HeartImg from '../../assets/icons/heart.svg';
import RedHeartImg from '../../assets/icons/heartRed.svg';

export const LikeBtn: React.FC = () => {
  const [isFavourite, setIsFavourite] = React.useState(false);

  return (
    <button
      className={cn('likeBtn', {
        'likeBtn--active': isFavourite,
      })}
      onClick={() => setIsFavourite(!isFavourite)}
    >
      <img src={isFavourite ? RedHeartImg : HeartImg} alt="Favourite button" />
    </button>
  );
};
