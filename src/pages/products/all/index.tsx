import { Loader } from "lucide-react";
import { useEffect } from "react";
import Card from "../../../components/common/card";
import TitleBar from "../../../components/common/titlebar";
import useCategory from "../../../hooks/useCategory";
import useProduct from "../../../hooks/useProduct";

export default function AllProducts() {
  const filteredData = useProduct((state) => state.filteredData);
  const ProductsLoading = useProduct((state) => state.loading);
  const filteringData = useProduct((state) => state.filteringData);
  const sortingData = useProduct((state) => state.sortingData);
  const categoriesDate = useCategory((state) => state.data);
  const getCategoriesData = useCategory((state) => state.getData);
  const categoriesLoading = useCategory((state) => state.loading);

  const changeFilterHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    filteringData({ tags: Number(e.target.value) });
  };

  const changeSortingHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    sortingData({ tags: e.target.value });
  };

  useEffect(() => {
    filteringData({ tags: 0 });
    getCategoriesData();
  }, []);
  return (
    <div className="page">
      <TitleBar title="فروشگاه" />
      <div className="flex-center gap-x-8 max-w-4xl mx-auto">
        <div className="flex-1">
          <label
            htmlFor="countries"
            className="block mb-2 text-xs md:text-sm xl:text-base font-medium text-gray-900"
          >
            دسته بندی محصول
          </label>

          {categoriesLoading ? (
            <div className="bg-gray-100 border-2 border-gray-300 text-gray-800 text-xs lg:text-sm rounded-lg  w-full p-2.5 flex-center">
              <Loader className="animate-spin" />
            </div>
          ) : (
            <select
              onChange={changeFilterHandler}
              className="bg-gray-100 border-2 border-gray-300 text-gray-800 text-xs lg:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              defaultValue={0}
            >
              <option value={0}>همه محصولات</option>
              {categoriesDate?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="flex-1">
          <label
            htmlFor="countries"
            className="block mb-2 text-xs md:text-sm xl:text-base font-medium text-gray-900"
          >
            مرتب سازی بر اساس
          </label>
          <select
            onChange={changeSortingHandler}
            className="bg-gray-100 border-2 border-gray-300 text-gray-800 text-xs lg:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
            defaultValue="newest"
          >
            <option value="newest">جدیدترین</option>
            <option value="cheapest">ارزانترین</option>
            <option value="expensive">گرانترین</option>
            <option value="discounted">تخفیف دارها</option>
          </select>
        </div>
      </div>
      <hr className="my-4" />

      {ProductsLoading ? (
        <div className="h-96 flex-center">
          <Loader className="h-10 w-10 text-primary animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {filteredData?.map((item) => <Card key={item.id} data={item} />)}
        </div>
      )}
    </div>
  );
}
