import React from 'react';
import './PhotoPreviewItem.scss';
import phone from '../../assets/00.jpg';

export const PhotoPreviewItem: React.FC = () => {
  return (
    <button type="button" className="photo photo--active">
      <img
        className="photo__img"
        src={phone}
        alt="Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)"
      />
    </button>
  );
};
