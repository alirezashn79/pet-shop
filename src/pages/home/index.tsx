import Banner from "../../components/banner";
import Benefits from "../../components/benefits";
import Services from "../../components/services";
import Slider from "../../components/slider";
import SpecialProducts from "../../components/special-products";

export default function HomePage() {
  return (
    <div>
      <Slider />
      <div className="mb-[800px] md:mb-72">
        <Services />
      </div>
      <Benefits />
      <SpecialProducts />
      <Banner image="https://theme51.mywebzi.ir/uploads/29b2be6a6ba94d23b87ef96bf1251fd3.jpg" />
    </div>
  );
}
