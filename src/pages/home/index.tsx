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
    </div>
  );
}
