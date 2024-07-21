import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../../components/common/card";
import TitleBar from "../../../components/common/titlebar";
import Loading from "../../../components/loading";
import useProduct from "../../../hooks/useProduct";
import useCategory from "../../../hooks/useCategory";

export default function AccessoryPage() {
  const loading = useProduct((state) => state.loading);
  const getData = useProduct((state) => state.getSingleAccessoryCategory);
  const data = useProduct((state) => state.accessoryProducts);
  const category = useCategory((state) => state.data);
  const params = useParams();

  useEffect(() => {
    getData({ id: String(params.id) });
  }, [params, getData]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="page mb-4">
      <TitleBar
        title={
          category?.filter((item) => item.id === Number(params.id))[0].title ||
          ""
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {/* card */}

        {data?.map((item) => <Card data={item} key={item.id} />)}
      </div>
    </div>
  );
}
