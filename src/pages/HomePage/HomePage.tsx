import React from 'react';
import './HomePage.scss';
import { BannerSlider } from '../../components/BannerSlider';
import { Categories } from '../../components/Categories';
import { CardSlider } from '../../components/CardSlider';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1 className="home-page__title">Welcome to Nice Gadgets store!</h1>

      <section className="home-page__slider">
        <BannerSlider />
      </section>

      <section className="home-page__new">
        <CardSlider title={'Brand new models'}/>
      </section>

      <section className="home-page__category">
        <h3 className="home-page__category-title">Shop by category</h3>
        <Categories />
      </section>

      <section className="home-page__hot">
        <CardSlider title={'Hot prices'}/>
      </section>
    </div>
  );
};
