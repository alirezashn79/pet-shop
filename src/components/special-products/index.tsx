import ProductsSlider from "../common/product-slider";
import TitleBar from "../common/titlebar";

export default function SpecialProducts() {
  return (
    <div className="my-28 md:mt-40">
      <TitleBar
        title="محصولات ویژه"
        subTitle="غذای ما حاوی مواد نگهدارنده مصنوعی نیست، بنابراین باید برای جلوگیری از انقضا زودتر از موعد ، آن را منجمد نگه دارید.​​​​​​​"
      />
      <ProductsSlider />
    </div>
  );
}
