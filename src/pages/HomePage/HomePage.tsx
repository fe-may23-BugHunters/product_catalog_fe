import React from 'react';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1 className='home-page__title'>
        Welcome to Nice Gadgets store!
      </h1>

      <section className='home-page__slider'>

      </section>

      <section className='home-page__new'>

      </section>

      <section className='home-page__category'>
        <h3 className='home-page__category-title'>
          Shop by category
        </h3>
      </section>

      <section className='home-page__hot'>

      </section>
    </div>
  );
};
