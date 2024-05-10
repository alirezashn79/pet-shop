// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
export default function Slider() {
  return (
    <div className="h-52 lg:h-[720px]">
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="swiper"
      >
        <SwiperSlide className="swiper-slide">
          <img
            src="https://theme51.mywebzi.ir/uploads/c663929801944087ae01f108923632a0.w_1920,h_569,r_k.jpg"
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src="https://theme51.mywebzi.ir/uploads/c1b5dc43cb0b43a8878e9dc4ed18ef19.w_1920,h_569,r_k.jpg"
            alt="banner"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
