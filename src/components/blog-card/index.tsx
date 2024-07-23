import { Link } from "react-router-dom";
import { baseUrl } from "../../app/baseUrl";
interface IBlogComponent {
  data: {
    id: number;
    aparat_video_link: string;
    description: string;
    image: "/product/media/blog/3bvp0iil_XgFNNBg.jpg";
    tags: { id: number; title: string }[];
    title: string;
  };
  link: string;
}

export default function BlogCard({ data, link }: IBlogComponent) {
  console.log(data.tags);
  return (
    <div className="block rounded-lg bg-white shadow" data-aos="zoom-in">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img
          className="rounded-t-lg"
          src={baseUrl + data.image.split("/product")[1]}
          alt={data.title}
        />

        <div className="flex items-start flex-wrap gap-1 px-4 h-full min-h-6 my-1 text-xs">
          {data?.tags.map((item) => (
            <div
              key={item.id}
              className="bg-primary min-w-8 py-0.5 rounded flex-center"
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <div className="py-2 px-4">
        <h5 className="mb-2 text-xl font-medium leading-tight">{data.title}</h5>
        <p className="mb-4 text-base line-clamp-3">{data.description}</p>
        <Link
          to={link}
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary/90 hover:shadow-primary focus:bg-primary focus:shadow-primary focus:outline-none focus:ring-0 active:bg-primary active:shadow-primary"
        >
          مشاهده بیشتر ...
        </Link>
      </div>
    </div>
  );
}
