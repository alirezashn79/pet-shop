import { useEffect, useState } from "react";
import Loading from "../../components/loading";
import Pagination from "../../components/pagination";
import useBlog from "../../hooks/useBlog";
import TitleBar from "../../components/common/titlebar";
import BlogCard from "../../components/blog-card";

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(
    Number(location.search.split("?page=")[1]) || 1
  );
  const loading = useBlog((state) => state.loading);
  const getData = useBlog((state) => state.getData);
  const data = useBlog((state) => state.data);

  useEffect(() => {
    getData({ current: currentPage });
  }, [currentPage, getData]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="page mb-4">
      <TitleBar title="مقاله ها" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {/* card */}

        {data?.results.map((item, idx) => (
          <BlogCard link={`/blogs/${idx}`} key={idx} data={item} />
        ))}
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
