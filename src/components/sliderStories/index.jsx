"use client"

// import Swiper core and required modules
import { useEffect, useState } from 'react';
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import './style.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import Image from 'next/image';

export default function Slider({ storiesItem }) {
  const pathname = usePathname();

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      {storiesItem.filter((item) => pathname !== `${item.link}/`).length >= 1 && (
        <>
          <h2>Other related stories</h2>
        </>
      )
      }

      <div className='slider-swiper slider-stories'>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          // navigationx
          navigation={{
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
          }}
          breakpoints={{
            340: {
              slidesPerView: 1,
            },
            540: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => setSwiperRef(swiper)}
        >
          {!storiesItem ? '' :
            storiesItem.filter((item) => pathname !== `${item.link}/`).map((item, index) => (
              <div key={`${item.id}-${index}`}>
                {/* {pathname !== `${item.link}/` && ( */}
                <SwiperSlide key={index}>
                  <figure className='stories-item'>
                    <div className='img-wrapper'>
                      <Link href={item.link} title={item.title}></Link>
                      <Image src={item.src} alt={item.title} fill={true} />
                    </div>
                    <figcaption>
                      <span className='date'>
                        {item.category}
                      </span>
                      <p className='title'> <Link href={item.link} title={item.title}>{item.title}</Link></p>
                      <p className='desc'>{item.desc}</p>
                      <Link href={item.link} title="Read More"> Read More</Link>
                      {/* <p>{`${pathname}`} <br /> {item.link}</p> */}
                    </figcaption>
                    <br />
                  </figure>
                </SwiperSlide>
                {/* )} */}
              </div>
            ))

          }
        </Swiper >

        <div className='swiper-btn-next swiper-button-next bg-white/60  rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <div className='swiper-btn-prev swiper-button-prev bg-white/60  rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>

        </div>

        {/* {storiesItem.filter((item) => pathname !== `${item.link}/`).length >= 4 && (
          <>
            <div className={`swiper-button-prev ${isBeginning ? 'disabled' : ''}`} onClick={prevHandler}></div>
            <div className={`swiper-button-next ${isEnd ? 'disabled' : ''}`} onClick={nextHandler}></div>
          </>
        )
        } */}

      </div >
    </>
  )
}
