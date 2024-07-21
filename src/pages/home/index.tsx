import Benefits from "../../components/benefits";
import ProductsSlider from "../../components/common/product-slider";
import TitleBar from "../../components/common/titlebar";
import Services from "../../components/services";
import Slider from "../../components/slider";
import useFood from "../../hooks/useFood";
import useProduct from "../../hooks/useProduct";

export default function HomePage() {
  const discountData = useProduct((state) => state.discountData);
  const mostVisitData = useProduct((state) => state.mostVisitData);
  const accessories = useProduct((state) => state.accessories);
  const allFoods = useFood((state) => state.allFoods);
  return (
    <>
      <Slider />
      <div className="mb-[800px] md:mb-72">
        <Services />
      </div>
      <Benefits />

      {discountData && discountData?.length > 0 && (
        <div className="my-9 md:mt-40">
          <TitleBar
            title="محصولات تخفیف دار"
            subTitle="محصولات پرتخفیف امروز​​​​​​​"
          />
          <ProductsSlider type="ACCESSORY" data={discountData} />
        </div>
      )}
      {/* <Banner image="https://theme51.mywebzi.ir/uploads/29b2be6a6ba94d23b87ef96bf1251fd3.jpg" /> */}

      <div className="my-9 md:mt-40">
        <TitleBar
          title="محصولات پربازدید"
          subTitle="لیست محصولاتی که از آن ها اخیرا بازدید کرده اید"
        />
        <ProductsSlider type="ACCESSORY" data={mostVisitData} />
      </div>

      {/* <Banner image="https://theme51.mywebzi.ir/uploads/ebf29fca307747b7a5980e96a207a0b1.w_1168,h_399,r_k.jpg" /> */}

      <div className="my-9 md:mt-40">
        <TitleBar title="محصولات غذایی" subTitle="محصولات غذایی برای پت" />
        <ProductsSlider type="FOOD" data={allFoods?.results} />
      </div>

      <div className="my-9 md:mt-40">
        <TitleBar
          title="لوازم جانبی ها"
          subTitle="محصولات اسباب بازی، دارو ... "
        />
        <ProductsSlider type="ACCESSORY" data={accessories?.results} />
      </div>

      {/* <Brands /> */}
    </>
  );
}
