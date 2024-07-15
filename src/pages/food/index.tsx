import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";
import Gallery from "../../components/common/gallery";
import Loading from "../../components/loading";
import useFood from "../../hooks/useFood";
import ProductsSlider from "../../components/common/product-slider";
import TitleBar from "../../components/common/titlebar";

export default function FoodPage() {
  // const [currentBtn, setCurrentBtn] = useState<"details" | "description">(
  //   "details"
  // );
  const params = useParams();
  const getSingleFood = useFood((state) => state.getSingleFood);
  const loading = useFood((state) => state.loading);
  const allFoods = useFood((state) => state.allFoods);
  const singleFood = useFood((state) => state.singleFood);

  useEffect(() => {
    getSingleFood({ id: String(params.foodId) });
  }, [params, getSingleFood]);

  if (loading) {
    return <Loading />;
  }

  console.log("singleFood?.image", singleFood?.image);

  return (
    <div className="bg-white">
      <div className="page">
        <Breadcrumb />

        <hr />
        <section className="lg:p-16 mb-8 xl:mb-0">
          <div className="flex flex-col lg:flex-row gap-x-16">
            <Gallery images={singleFood?.image} />

            <div className="mt-10 space-y-8 md:mx-auto">
              <h1 className="text-lg md:text-2xl xl:text-4xl font-bold text-gray-800">
                {singleFood?.title}
              </h1>
              <p className="text-green-800 text-sm md:text-base xl:text-2xl">
                {Number(singleFood?.price).toLocaleString()} تومان
              </p>
              <ul className="space-y-2 text-xs md:text-sm xl:text-base">
                <li>واحد به گرم: {singleFood?.unit}</li>
              </ul>

              <div className="flex-center lg:block">
                <button className="px-8 py-2 bg-primary rounded-sm mx-auto">
                  اضافه به سبد خرید
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="px-4  lg:px-16">
          <ul className="flex flex-wrap text-xs lg:text-sm font-medium text-center text-slate-700 border-b overflow-hidden rounded-lg w-fit mx-auto border-gray-200">
            <li className="mr-2">
              <button
                // onClick={() => setCurrentBtn("description")}
                className="inline-block p-4   rounded-t-lg bg-primary/40"
              >
                توضیحات
              </button>
            </li>
          </ul>

          <div className="mt-4">
            <div className="border border-primary rounded p-4">
              <p className="text-justify text-slate-800 text-sm/8">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </div>

          <div className="my-16">
            <TitleBar title="محصولات مرتبط" />
            <ProductsSlider
              type="FOOD"
              id={Number(params.id)}
              data={allFoods?.results}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
