import React from 'react';
import './ProductPhotos.scss';
import { PhotoPreviewItem } from '../PhotoPreviewItem';

export const ProductPhotos: React.FC = () => {
  return (
    <section className="photos">
      <div className="photos__photo">
        <img
          className="photos__img"
          src="http://surl.li/krahu"
          alt="Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)"
        />
      </div>

      <div className="photos__list">
        <PhotoPreviewItem />
        <PhotoPreviewItem />
        <PhotoPreviewItem />
        <PhotoPreviewItem />
        <PhotoPreviewItem />
      </div>
    </section>
  );
};
