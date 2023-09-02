import React, { useRef, useState, useEffect } from 'react';
import './CardSlider.scss';
import classNames from 'classnames';

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
  }, []);

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
            className={classNames('carouselArrow', 'carouselArrow__left', {
              'carouselArrow__left--disabled': scrollPosition === 0,
            })}
            onClick={handleScrollLeft}
          />
          <div
            className={classNames('carouselArrow', 'carouselArrow__right', {
              'carouselArrow__right--disabled':
                maxScroll - scrollPosition <= cardWidth,
            })}
            onClick={handleScrollRight}
          />
        </div>
      </div>
      <div
        className="CarouselSliderContainer"
        ref={containerRef}
        onScroll={handleScroll}
      >
        <div className="carouselSlider">
          <div className="cardContainer">1</div>
          <div className="cardContainer">2</div>
          <div className="cardContainer">3</div>
          <div className="cardContainer">4</div>
          <div className="cardContainer">5</div>
          <div className="cardContainer">6</div>
          <div className="cardContainer">7</div>
          <div className="cardContainer">8</div>
          <div className="cardContainer">9</div>
          <div className="cardContainer">10</div>
          <div className="cardContainer">11</div>
          <div className="cardContainer">12</div>
          <div className="cardContainer">13</div>
          <div className="cardContainer">14</div>
          <div className="cardContainer">15</div>
          <div className="cardContainer">16</div>
          <div className="cardContainer">17</div>
          <div className="cardContainer">18</div>
          <div className="cardContainer">19</div>
          <div className="cardContainer">20</div>
        </div>
      </div>
    </div>
  );
};
