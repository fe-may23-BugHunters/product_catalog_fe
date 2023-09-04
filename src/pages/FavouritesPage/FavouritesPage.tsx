import React from 'react';
import './FavouritesPage.scss';
import { CardItem } from '../../components/CardItem';

export const FavouritesPage: React.FC = () => {
  return (
    <article className='favourites'>
       <div className='headerContent'>
          <div className='headerContent__title'>
            Favourites
          </div>

          <div className='headerContent__itemsCount'>
            5 items
          </div>
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
