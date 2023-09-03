import React from 'react';
import './LikeBtn.scss';
import HeartImg from '../../assets/icons/Heart.svg';
import RedHeartImg from '../../assets/icons/RedHeart.svg';

export const LikeBtn: React.FC = () => {
  const [isFavourite, setIsFavourite] = React.useState(false);

  return (
    <button className="likeBtn" onClick={() => setIsFavourite(!isFavourite)}>
      <img src={isFavourite ? RedHeartImg : HeartImg} alt="Favourite button" />
    </button>
  );
};
