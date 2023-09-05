import React, { useRef, useState, useEffect } from 'react';
import './CardSlider.scss';
import classNames from 'classnames';
import { CardItem } from '../CardItem';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrowLeft.svg';
// eslint-disable-next-line max-len
import { ReactComponent as ArrowRight } from '../../assets/icons/arrowRight.svg';

interface Props {}

export const CardSlider: React.FC<Props> = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const setOrUpdateMaxScroll = () => {
      if (containerRef.current) {
        const maxScrollValue
          = containerRef.current.scrollWidth - containerRef.current.offsetWidth;

        setMaxScroll(maxScrollValue);
      }
    };

    setOrUpdateMaxScroll();
    window.addEventListener('resize', setOrUpdateMaxScroll);
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
                maxScroll - scrollPosition <= 10,
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
