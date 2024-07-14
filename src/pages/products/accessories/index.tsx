import { useEffect, useState } from "react";
import useProduct from "../../../hooks/useProduct";
import Loading from "../../../components/loading";
import TitleBar from "../../../components/common/titlebar";
import Card from "../../../components/common/card";
import Pagination from "../../../components/pagination";

export default function AccessoriesPage() {
  const [currentPage, setCurrentPage] = useState(
    Number(location.search.split("?page=")[1]) || 1
  );
  const loading = useProduct((state) => state.loading);
  const getData = useProduct((state) => state.getAllAccessories);
  const data = useProduct((state) => state.accessories);

  useEffect(() => {
    getData({ current: currentPage });
  }, [currentPage, getData]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="page mb-4">
      <TitleBar title="همه لوازم جانبی ها" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {/* card */}

        {data?.results.map((item) => <Card data={item} key={item.id} />)}
      </div>

      <Pagination
        setCurrentPage={setCurrentPage}
        current={currentPage}
        count={data?.count}
        next={data?.next}
        prev={data?.previous}
      />
    </div>
  );
}
