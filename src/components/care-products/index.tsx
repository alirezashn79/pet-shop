import ProductsSlider from "../common/product-slider";
import TitleBar from "../common/titlebar";

export default function CareProducts() {
  return (
    <div className="my-9 md:mt-40">
      <TitleBar
        title="محصولات مراقبتی"
        subTitle="غذای ما حاوی مواد نگهدارنده مصنوعی نیست، بنابراین باید برای جلوگیری از انقضا زودتر از موعد ، آن را منجمد نگه دارید.​​​​​​​"
      />
      <ProductsSlider />
    </div>
  );
}
