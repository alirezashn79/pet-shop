import { useState } from "react";
import Breadcrumb from "../../components/breadcrumb";

export default function FoodPage() {
  const [currentBtn, setCurrentBtn] = useState<"details" | "description">(
    "details"
  );

  return (
    <div className="bg-white">
      <div className="page">
        <Breadcrumb />
        <hr />
        <section className="lg:p-16 mb-8 xl:mb-0">
          <div className="flex flex-col lg:flex-row gap-x-16">
            <img
              src="https://theme51.mywebzi.ir/uploads/8731eb4b78fb4b9c936076e35be80743.w_1170,h_2071,r_k.jpg"
              alt="product"
              className="h-72 w-72 md:w-96 md:h-96 mx-auto xl:h-[420px] xl:w-[420px]"
            />

            <div className="mt-10 space-y-8 md:mx-auto">
              <h1 className="text-lg md:text-2xl xl:text-3xl font-bold text-gray-800">
                تشویقی سگ تاندون
              </h1>
              <p className="text-green-800 text-sm md:text-base xl:text-lg">
                {Number(550000).toLocaleString()} تومان
              </p>
              <ul className="space-y-2 text-xs md:text-sm xl:text-base">
                <li>وزن: 800</li>
                <li>ابعاد: 80*80</li>
                <li>کشور تولیدکننده: ایران</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="px-4  lg:px-16">
          <ul className="flex flex-wrap text-xs lg:text-sm font-medium text-center text-gray-500 border-b overflow-hidden rounded-lg w-fit mx-auto border-gray-200">
            <li className="mr-2">
              <button
                onClick={() => setCurrentBtn("description")}
                className={`inline-block p-4   rounded-t-lg ${
                  currentBtn === "description" && "bg-primary/20"
                }`}
              >
                توضیحات
              </button>
            </li>
            <li className="ml-2">
              <button
                onClick={() => setCurrentBtn("details")}
                aria-current="page"
                className={`inline-block p-4   rounded-t-lg ${
                  currentBtn === "details" && "bg-primary/20"
                }`}
              >
                مشخصات
              </button>
            </li>
          </ul>

          <div className="mt-4">
            {currentBtn === "details" && (
              <div className="shadow border p-2 rounded-lg">
                <ul className="divide-y">
                  <li className="py-2">
                    <div className="flex items-center">
                      <span className="text-gray-500 md:text-xs text-[8px]  min-w-48">
                        وزن
                      </span>
                      <span className="text-gray-700 text-xs md:text-sm ">
                        800 گرم
                      </span>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <span className="text-gray-500 md:text-xs text-[8px] min-w-48">
                        ابعاد
                      </span>
                      <span className="text-gray-700 text-xs md:text-sm ">
                        80 * 80
                      </span>
                    </div>
                  </li>

                  <li className="py-2">
                    <div className="flex items-center">
                      <span className="text-gray-500 md:text-xs text-[8px] min-w-48">
                        کشور تولید کننده
                      </span>
                      <span className="text-gray-700 text-xs md:text-sm ">
                        ایران
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            )}
            {currentBtn === "description" && (
              <div className="border border-primary rounded p-4">
                <p className="text-justify text-slate-800 text-sm/8">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
