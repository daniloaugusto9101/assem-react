import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules"

const SlideCoverflow = ({ imagensData }) => {
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
        className="w-full pt-12 pb-12"
      >
        {imagensData.map((obj, id) => (
          <SwiperSlide key={id} className="bg-center w-60 h-60 md:w-80 md:h-80">
            <img src={obj.url} className="object-cover w-full h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default SlideCoverflow
