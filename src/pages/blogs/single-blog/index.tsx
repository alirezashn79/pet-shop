import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../../app/baseUrl";
import ProductsSlider from "../../../components/common/product-slider";
import TitleBar from "../../../components/common/titlebar";
import Loading from "../../../components/loading";
import useBlog from "../../../hooks/useBlog";
import Iframe from "../../../utils/ifream";

export default function BlogPage() {
  const getData = useBlog((state) => state.getSingleData);
  const data = useBlog((state) => state.singleData);
  const loading = useBlog((state) => state.loading);

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getData({ id: params.id });
    }
  }, [params, getData]);

  useEffect(() => {
    document.title = "پت شاپ رز | " + `بلاگ ها - ${data?.title}`;
  }, [data]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="page min-h-screen">
      <h1 className="text-xl md:text-2xl xl:text-3xl mb-8 font-bold text-gray-800">
        {data?.title}
      </h1>
      <div className="flex flex-col  items-start">
        <div className="lg:basis-1/3 shadow-lg mx-auto">
          <img
            src={baseUrl + data?.image.split("/product")[1]}
            alt={data?.title}
            className="w-full max-h-[400px] object-center rounded-lg"
          />
        </div>
        <div className="lg:basis-2/3 pl-4">
          <p
            className=" text-justify
       ml-auto mt-8 text-gray-700 text-sm/8 md:text-base/8"
          >
            {data?.description}
          </p>
        </div>
      </div>
      {data?.aparat_video_link && (
        <div>
          <Iframe src={data?.aparat_video_link} />
        </div>
      )}

      {data?.tags && data?.tags.length > 0 && (
        <div className="mt-8 flex items-center gap-4">
          <h1 className="text-sm lg:text-base text-slate-600 font-semibold">
            تگ ها:
          </h1>
          <div className="flex items-center gap-2">
            {data?.tags.map((item) => (
              <div
                key={item.id}
                className="px-4 py-1 text-xs bg-green-700 text-white rounded"
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      )}

      {data?.product && data?.product?.length > 0 && (
        <div className="mt-16">
          <TitleBar title="محصولات مرتبط" />
          <ProductsSlider type="ACCESSORY" data={data?.product} />
        </div>
      )}
    </div>
  );
}
