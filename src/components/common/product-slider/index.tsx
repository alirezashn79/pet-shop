// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

export default function ProductsSlider() {
  return (
    <div className="container px-8 md:px-0">
      <div className="min-h-96">
        <Swiper
          slidesPerView={1}
          loop={true}
          breakpoints={{
            "640": {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            "768": {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            "1024": {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="swiper"
        >
          <SwiperSlide className="swiper-slide">
            <Card
              title="تشویقی سگ تاندون Madcow"
              image="https://theme51.mywebzi.ir/uploads/8731eb4b78fb4b9c936076e35be80743.w_748,h_90,r_k.jpg"
              link="#"
              price={450000}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Card
              title="تشویقی سگ تاندون Madcow"
              image="https://theme51.mywebzi.ir/uploads/8731eb4b78fb4b9c936076e35be80743.w_748,h_90,r_k.jpg"
              link="#"
              price={450000}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Card
              title="تشویقی سگ تاندون Madcow"
              image="https://theme51.mywebzi.ir/uploads/8731eb4b78fb4b9c936076e35be80743.w_748,h_90,r_k.jpg"
              link="#"
              price={450000}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Card
              title="تشویقی سگ تاندون Madcow"
              image="https://theme51.mywebzi.ir/uploads/8731eb4b78fb4b9c936076e35be80743.w_748,h_90,r_k.jpg"
              link="#"
              price={450000}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Card
              title="تشویقی سگ تاندون Madcow"
              image="https://theme51.mywebzi.ir/uploads/8731eb4b78fb4b9c936076e35be80743.w_748,h_90,r_k.jpg"
              link="#"
              price={450000}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Card
              title="تشویقی سگ تاندون Madcow"
              image="https://theme51.mywebzi.ir/uploads/8731eb4b78fb4b9c936076e35be80743.w_748,h_90,r_k.jpg"
              link="#"
              price={450000}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
