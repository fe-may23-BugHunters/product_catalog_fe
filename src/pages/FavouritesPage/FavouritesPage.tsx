import React from 'react';
import './FavouritesPage.scss';
import { CardItem } from '../../components/CardItem';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { usePathname } from '../../hooks/usePathname';

export const FavouritesPage: React.FC = () => {
  const { pathname, onPathChange } = usePathname();

  return (
    <article className="favourites">
      <div className="favourites__breadCrumbs">
        <BreadCrumbs pathname={pathname} onPathChange={onPathChange} />
      </div>

      <h1 className="favourites__title">Favourites</h1>

      <p className="favourites__count">5 items</p>

      <div className="favourites__cards">
        <div className="favourites__card">
          <CardItem />
        </div>
        <div className="favourites__card">
          <CardItem />
        </div>
        <div className="favourites__card">
          <CardItem />
        </div>
        <div className="favourites__card">
          <CardItem />
        </div>
        <div className="favourites__card">
          <CardItem />
        </div>
        <div className="favourites__card">
          <CardItem />
        </div>
        <div className="favourites__card">
          <CardItem />
        </div>
      </div>
    </article>
  );
};
