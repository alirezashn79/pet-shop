import { useEffect } from "react";
import BlogCard from "../../components/blog-card";
import Overlay from "../../components/common/overlay";
import TitleBar from "../../components/common/titlebar";
import useBlog from "../../hooks/useBlog";

export default function Blogs() {
  const loading = useBlog((state) => state.loading);
  const getData = useBlog((state) => state.getData);
  const data = useBlog((state) => state.data);

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="h-[800px]">
        <Overlay isLoading={true} />
      </div>
    );
  }
  return (
    <div className="page mb-4">
      <TitleBar title="مقاله ها" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {/* card */}

        {data?.map((item, idx) => (
          <BlogCard
            link={`/blogs/${item.id}`}
            key={item.id}
            data={item}
            delay={idx * 50}
          />
        ))}
      </div>
    </div>
  );
}
