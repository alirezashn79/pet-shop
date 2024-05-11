import TitleBar from "../common/titlebar";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Autoplay, Navigation } from "swiper/modules";

export default function Brands() {
  return (
    <div className="container">
      <div className="my-20 lg:mt-40 md:h-[70px]">
        <TitleBar
          title="برند ها"
          subTitle="غذای ما حاوی مواد نگهدارنده مصنوعی نیست، بنابراین باید برای جلوگیری از انقضا زودتر از موعد، آن را منجمد نگه دارید.​​​​​​​"
        />
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 32,
            },

            1024: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
          }}
          loop={true}
          navigation={{
            enabled: true,
          }}
          freeMode={true}
          modules={[FreeMode, Autoplay, Navigation]}
          className="swiper"
        >
          <SwiperSlide className="bg-transparent">
            <div className="h-14 md:h-[70px]">
              <img
                src="https://theme51.mywebzi.ir/uploads/5330376b988249198b22922c1d06e484.w_228,h_72,r_k.jpg"
                alt="brand"
                className="object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-transparent">
            <div className="h-14 md:h-[70px]">
              <img
                src="https://theme51.mywebzi.ir/uploads/5330376b988249198b22922c1d06e484.w_228,h_72,r_k.jpg"
                alt="brand"
                className="object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-transparent">
            <div className="h-14 md:h-[70px]">
              <img
                src="https://theme51.mywebzi.ir/uploads/5330376b988249198b22922c1d06e484.w_228,h_72,r_k.jpg"
                alt="brand"
                className="object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-transparent">
            <div className="h-14 md:h-[70px]">
              <img
                src="https://theme51.mywebzi.ir/uploads/5330376b988249198b22922c1d06e484.w_228,h_72,r_k.jpg"
                alt="brand"
                className="object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-transparent">
            <div className="h-14 md:h-[70px]">
              <img
                src="https://theme51.mywebzi.ir/uploads/5330376b988249198b22922c1d06e484.w_228,h_72,r_k.jpg"
                alt="brand"
                className="object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-transparent">
            <div className="h-14 md:h-[70px]">
              <img
                src="https://theme51.mywebzi.ir/uploads/5330376b988249198b22922c1d06e484.w_228,h_72,r_k.jpg"
                alt="brand"
                className="object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-transparent">
            <div className="h-14 md:h-[70px]">
              <img
                src="https://theme51.mywebzi.ir/uploads/5330376b988249198b22922c1d06e484.w_228,h_72,r_k.jpg"
                alt="brand"
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
