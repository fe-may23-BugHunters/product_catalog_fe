import React from 'react';
import './PhotoPreviewItem.scss';

export const PhotoPreviewItem: React.FC = () => {
  return (
    <button type="button" className="photo photo--active">
      <img
        className="photo__img"
        src="http://surl.li/krahu"
        alt="Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)"
      />
    </button>
  );
};
