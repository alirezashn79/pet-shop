import React, { useState } from "react";
import useProduct from "../../hooks/useProduct";
import useFood from "../../hooks/useFood";
import useBlog from "../../hooks/useBlog";

export default function SearchBar() {
  const [showResult, setShowResult] = useState(false);
  const accessories = useProduct((state) => state.accessories);
  const allFoods = useFood((state) => state.allFoods);
  const blogs = useBlog((state) => state.data);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowResult(true);
    if (e.target.value == "") {
      setShowResult(false);
    }
    const AllAccessories = accessories?.results.map((item) => ({
      title: item.title,
      image: item.images[0].image,
    }));

    const foods = allFoods?.results.map((item) => ({
      title: item.title,
      image: item.image[0].image,
    }));

    const Allblogs = blogs?.results.map((item) => ({
      title: item.title,
      image: item.image,
    }));

    let AllData;
    if (
      typeof foods === "object" &&
      typeof Allblogs === "object" &&
      typeof AllAccessories === "object"
    ) {
      AllData = [...foods, ...Allblogs, ...AllAccessories];
    }
    console.log(AllData);
  };
  return (
    <div className="relative flex justify-end text-xs group">
      <input
        className="flex-1 px-2 py-2 border-primary  rounded-r-sm border  outline-none max-w-sm lg:w-72"
        type="text"
        placeholder="نام محصول مورد نظر..."
        onChange={handleSearch}
        onBlur={() => setShowResult(false)}
      />

      {showResult && (
        <div className="absolute z-10 top-full left-0 right-0 bg-slate-50 p-2 border border-t-0">
          <div className="flex items-center justify-between">
            <p>محصول تستی</p>
            <img
              className="w-16"
              src="https://rosepetshop-dg.liara.run/media/blog/3bvp0iil.jpg"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
}
