import React from 'react';
import './FavouritesPage.scss';

export const FavouritesPage: React.FC = () => {
  return (
    <div className='container'>
       <div className='contentHeader'>
          <div className='contentHeader__title'>
            Favourites
          </div>

          <div className='contentHeader__itemsCount'>
            5 items
          </div>
        </div>

        <div className='cardsGridContainer'>
          <div className='card' />
          <div className='card' />
          <div className='card' />
          <div className='card' />
          <div className='card' />
          <div className='card' />
          <div className='card' />
          <div className='card' />
          <div className='card' />
          <div className='card' />
          <div className='card' />
          <div className='card' />
          <div className='card' />
          <div className='card' />
        </div>

    </div>
  );
};
