// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import FoodCard from "../../common/food-card";
import Card from "../card";

export default function ProductsSlider({
  data,
  id,
  type,
}: {
  data: any;
  id?: number;
  type: "ACCESSORY" | "FOOD";
}) {
  console.log(data);
  return (
    <div className="container md:px-0">
      <div data-aos="fade-up" className="min-h-96">
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
          {type === "FOOD"
            ? id
              ? data
                  ?.filter((res) => res.id !== id)
                  .map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide">
                      <FoodCard data={item} />
                    </SwiperSlide>
                  ))
              : data?.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                    <FoodCard data={item} />
                  </SwiperSlide>
                ))
            : id
              ? data
                  ?.filter((res) => res.id !== id)
                  .map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide">
                      <Card data={item} />
                    </SwiperSlide>
                  ))
              : data?.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                    <Card data={item} />
                  </SwiperSlide>
                ))}

          {}
        </Swiper>
      </div>
    </div>
  );
}
