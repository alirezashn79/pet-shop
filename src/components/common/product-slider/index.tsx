// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import FoodCard from "../../common/food-card";
import Card from "../card";
import { IProduct } from "../../../types";

export default function ProductsSlider({
  data,
  id,
  type,
}: {
  data:
    | IProduct[]
    | {
        title: string;
        description: string;
        discount_amount: string;
        images: string;
        made_by_country: string;
        unit: string;
        price: number;
        color: string;
        id: number;
      }[]
    | null
    | undefined
    | {
        title: string;
        description: string;
        unit: string;
        price: number;
        image: string;
        id: number;
      }[]
    | {
        title: string;
        description: string;
        discount_amount: {
          discount_price: number;
        };
        images: string;
        made_by_country: string;
        unit: string;
        price: number;
        color: string;
        id: number;
      }[];
  id?: number;
  type: "ACCESSORY" | "FOOD";
}) {
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
