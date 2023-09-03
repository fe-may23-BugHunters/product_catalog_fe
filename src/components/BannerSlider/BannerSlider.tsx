import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper as SwiperClass } from 'swiper/types';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/swiper-bundle.min.css';

import './BannerSlider.scss';
import { BannerItem } from '../BannerItem';
import PhonesBannerImg from '../../assets/banners/banner-phones.png';
import TabletsBannerImg from '../../assets/banners/banner-tablets.png';
import AccessoriesBannerImg from '../../assets/banners/banner-accessories.png';

const banners = [PhonesBannerImg, TabletsBannerImg, AccessoriesBannerImg];

SwiperCore.use([Autoplay]);

export const BannerSlider: React.FC = () => {
  return (
    <div className="bannerSlider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {banners.map((banner, index) => (
          <React.Fragment key={index}>
            <SwiperSlide className="bannerSlider__slide">
              <BannerItem banner={banner} />
            </SwiperSlide>
          </React.Fragment>
        ))}
      </Swiper>
    </div>
  );
};
