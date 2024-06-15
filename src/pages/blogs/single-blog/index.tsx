import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../components/loading";
import useBlog from "../../../hooks/useBlog";

export default function BlogPage() {
  const data = useBlog((state) => state.singleData);
  const getData = useBlog((state) => state.getSingleData);
  const loading = useBlog((state) => state.loading);

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getData({ id: params.id });
    }
  }, [params]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="page min-h-screen">
      <h1 className="text-xl md:text-2xl xl:text-3xl mb-8 font-bold text-gray-800">
        {data?.title}
      </h1>
      <img
        src={data?.image}
        alt={data?.title}
        className="mx-auto w-full lg:w-2/3 max-h-96 object-cover object-center shadow-lg rounded-lg"
      />
      <p className="max-w-screen-xl text-pretty mx-auto mt-8 text-gray-700 text-sm/8 md:text-base/8">
        {data?.desc}
      </p>
    </div>
  );
}
