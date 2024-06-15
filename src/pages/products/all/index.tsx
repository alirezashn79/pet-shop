import Service from "../../../components/service";
import useProduct from "../../../hooks/useProduct";

export default function AllProducts() {
  const productsData = useProduct((state) => state.data);

  console.log(productsData);
  return <Service title="همه محصولات" />;
}
