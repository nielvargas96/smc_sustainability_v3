"use client"

import React from 'react'
// import Swiper core and required modules

import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export default function Slider({ images }) {
  return (
    <div className='slider-swiper full-img'>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image.src} alt={image.title} width={950} height={500} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
