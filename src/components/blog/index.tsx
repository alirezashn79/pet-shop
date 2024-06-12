import { Link } from "react-router-dom";

export default function Blog({ delay }: { delay: string }) {
  return (
    <div
      className="block rounded-lg bg-white shadow"
      data-aos="flip-up"
      data-aos-delay={delay}
    >
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img
          className="rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
          alt=""
        />
        <Link to={`/blogs/${"1"}`}>
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </Link>
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">مقاله تستی</h5>
        <p className="mb-4 text-base line-clamp-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <Link
          to={`/blogs/${"1"}`}
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary/90 hover:shadow-primary focus:bg-primary focus:shadow-primary focus:outline-none focus:ring-0 active:bg-primary active:shadow-primary"
        >
          مشاهده بیشتر ...
        </Link>
      </div>
    </div>
  );
}
