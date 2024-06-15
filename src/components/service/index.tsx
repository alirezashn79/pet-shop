import useProduct from "../../hooks/useProduct";
import Card from "../common/card";
import TitleBar from "../common/titlebar";

interface IServiceProps {
  title: string;
  subtitle?: string;
  icon?: JSX.Element;
}
export default function Service({ title, subtitle, icon }: IServiceProps) {
  const CatProducts = useProduct((state) => state.spicialData);

  console.log("CatProducts", CatProducts);

  const loading = useProduct((state) => state.loading);
  return (
    <div className="page">
      <TitleBar title={title} />
      {icon}
      <p className="text-gray-600">{subtitle}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-8 md:mt-16">
        {CatProducts?.map((item) => <Card key={item.id} data={item} />)}
      </div>
    </div>
  );
}
