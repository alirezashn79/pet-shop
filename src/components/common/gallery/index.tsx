import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { baseUrl } from "../../../app/baseUrl";

const Gallery = ({ images }: { images?: { image: string }[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

  return (
    <section className="w-full lg:w-2/6">
      <Swiper
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="gallery-slider"
      >
        {images?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={baseUrl + item?.image} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="gallery-slider-2"
      >
        {images?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={baseUrl + item?.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
