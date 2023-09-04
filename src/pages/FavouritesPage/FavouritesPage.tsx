import React from 'react';
import './FavouritesPage.scss';
import { CardItem } from '../../components/CardItem';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { usePathname } from '../../hooks/usePathname';

export const FavouritesPage: React.FC = () => {
  const { pathname, onPathChange } = usePathname();

  return (
    <article className="favourites">
      <div className="tablets__breadCrumbs">
        <BreadCrumbs pathname={pathname} onPathChange={onPathChange} />
      </div>

      <div className="headerContent">
        <div className="headerContent__title">Favourites</div>

        <div className="headerContent__itemsCount">5 items</div>
      </div>

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
