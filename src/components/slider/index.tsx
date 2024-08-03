// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft } from "lucide-react";
export default function Slider() {
  return (
    <div className="h-52 lg:h-[720px] relative flex items-center">
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        navigation={{
          enabled: true,
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
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
      <div className="absolute left-0 z-10 swiper-button-next-custom">
        <ChevronLeft className="h-12 w-12 lg:h-14 lg:w-14 text-primary" />
      </div>
      <div className="absolute right-0 z-10 swiper-button-prev-custom">
        <ChevronLeft className="rotate-180 h-12 w-12 lg:h-14 lg:w-14 text-primary" />
      </div>
    </div>
  );
}
