import Banner from "../../components/banner";
import Benefits from "../../components/benefits";
// import Brands from "../../components/brands";
import CareProducts from "../../components/care-products";
import Services from "../../components/services";
import Slider from "../../components/slider";
import SpecialProducts from "../../components/special-products";

export default function HomePage() {
  return (
    <>
      <Slider />
      <div className="mb-[800px] md:mb-72">
        <Services />
      </div>
      <Benefits />
      <SpecialProducts />
      <Banner image="https://theme51.mywebzi.ir/uploads/29b2be6a6ba94d23b87ef96bf1251fd3.jpg" />

      <FoodProducts />

      <Banner image="https://theme51.mywebzi.ir/uploads/ebf29fca307747b7a5980e96a207a0b1.w_1168,h_399,r_k.jpg" />

      <CareProducts />

      {/* <Brands /> */}
    </>
  );
}
