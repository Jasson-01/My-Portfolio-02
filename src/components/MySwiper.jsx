import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MySwiper = () => (
  <Swiper
    spaceBetween={50}
    slidesPerView={1}
    pagination={{ clickable: true }}
    navigation
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
  </Swiper>
);

export default MySwiper;
