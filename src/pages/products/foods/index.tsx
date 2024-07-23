import { useEffect, useState } from "react";
import FoodCard from "../../../components/common/food-card";
import TitleBar from "../../../components/common/titlebar";
import Loading from "../../../components/loading";
import Pagination from "../../../components/pagination";
import useFood from "../../../hooks/useFood";

export default function Foods() {
  const [currentPage, setCurrentPage] = useState(
    Number(location.search.split("?page=")[1]) || 1
  );
  const loading = useFood((state) => state.loading);
  const getData = useFood((state) => state.getAllFoods);
  const data = useFood((state) => state.allFoods);

  useEffect(() => {
    document.title = "پت شاپ رز | " + "غذا ها";

    getData({ current: currentPage });
  }, [currentPage, getData]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="page mb-4">
      <TitleBar title="غذا ها" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {/* card */}

        {data?.results?.map((item) => <FoodCard data={item} key={item.id} />)}
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
