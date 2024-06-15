import { Link } from "react-router-dom";
import { IBlog } from "../../types";
interface IBlogComponent {
  delay: number;
  data: IBlog;
  link: string;
}
export default function BlogCard({ delay, data, link }: IBlogComponent) {
  return (
    <div
      className="block rounded-lg bg-white shadow"
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img className="rounded-t-lg" src={data.image} alt={data.title} />
        <Link to={link}>
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </Link>
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">{data.title}</h5>
        <p className="mb-4 text-base line-clamp-3">{data.desc}</p>
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
