import React, { useRef, useState, useEffect } from 'react';
import './CardSlider.scss';
import classNames from 'classnames';
import { CardItem } from '../CardItem';
import {
  ReactComponent as ArrowLeft,
} from '../../assets/icons/arrowLeft.svg';
import {
  ReactComponent as ArrowRight,
} from '../../assets/icons/arrowRight.svg';

interface Props {}

export const CardSlider: React.FC<Props> = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const maxScrollValue
        = containerRef.current.scrollWidth - containerRef.current.offsetWidth;

      setMaxScroll(maxScrollValue);
    }
  }, [window.innerWidth]);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= containerRef.current.offsetWidth / 2;
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += containerRef.current.offsetWidth / 2;
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  const cardWidth
    = document?.querySelector('.cardContainer')?.getBoundingClientRect().width
      || 0;

  return (
    <div className="carouselContainer">
      <div className="carouselHeader">
        <div className="carouselHeader__title">You may also like</div>

        <div className="carouselHeader__arrows">
          <div
            className={classNames('carouselArrow', 'carouselArrow-left', {
              'carouselArrow__left--disabled': scrollPosition === 0,
            })}
            onClick={handleScrollLeft}
          >
            <ArrowLeft />
          </div>

          <div
            className={classNames('carouselArrow', 'carouselArrow-right', {
              'carouselArrow__right--disabled':
                maxScroll - scrollPosition <= cardWidth,
            })}
            onClick={handleScrollRight}
          >
            <ArrowRight />
          </div>
        </div>
      </div>
      <div
        className="CarouselSliderContainer"
        ref={containerRef}
        onScroll={handleScroll}
      >
        <div className="carouselSlider">
          <div className="cardContainer">
            <CardItem />
          </div>
          <div className="cardContainer">
            <CardItem />
          </div>
          <div className="cardContainer">
            <CardItem />
          </div>
          <div className="cardContainer">
            <CardItem />
          </div>
          <div className="cardContainer">
            <CardItem />
          </div>
          <div className="cardContainer">
            <CardItem />
          </div>
          <div className="cardContainer">
            <CardItem />
          </div>
          <div className="cardContainer">
            <CardItem />
          </div>
          <div className="cardContainer">
            <CardItem />
          </div>
          <div className="cardContainer">
            <CardItem />
          </div>
          <div className="cardContainer">
            <CardItem />
          </div>
        </div>
      </div>
    </div>
  );
};
