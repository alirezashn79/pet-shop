import Blog from "../../components/blog";
import TitleBar from "../../components/common/titlebar";

export default function Blogs() {
  return (
    <div className="page mb-4">
      <TitleBar title="مقاله ها" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {/* card */}
        <Blog delay="100" />
        <Blog delay="150" />
        <Blog delay="200" />
        <Blog delay="250" />
        <Blog delay="300" />
        <Blog delay="300" />
        <Blog delay="250" />
        <Blog delay="200" />
        <Blog delay="150" />
        <Blog delay="100" />
      </div>
    </div>
  );
}
