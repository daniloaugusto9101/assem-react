import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

// css local
import "./styles.css"

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules"

export default function SlideCoverflow({ imagensData }) {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="w-full py-12 "
      >
        {imagensData.map((item, id) => (
          <SwiperSlide className="bg-cover" key={id}>
            <img src={item.url} className="h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
