// import function to register Swiper custom elements
import { register } from "swiper/element/bundle"
// register Swiper custom elements
register()

import "./styles.css"

const SlideThumbsGallery = ({ imagensData }) => {
  return (
    <section className="mb-40">
      <swiper-container
        class="mySwiper"
        thumbs-swiper=".mySwiper2"
        loop="true"
        space-between="10"
        navigation="true"
      >
        {imagensData.map((item, id) => (
          <swiper-slide className="bg-cover" key={id}>
            <img src={item.url} className="h-full object-cover" />
          </swiper-slide>
        ))}
      </swiper-container>
      <swiper-container
        loop="true"
        space-between="10"
        slides-per-view="4"
        free-mode="true"
        watch-slides-progress="true"
        class="mySwiper2"
      >
        {imagensData.map((item, id) => (
          <swiper-slide key={id}>
            <img src={item.url} />
          </swiper-slide>
        ))}
      </swiper-container>
    </section>
  )
}

export default SlideThumbsGallery
