import { MessageCircle } from "lucide-react";

export default function MainFooter() {
  return (
    <div className="mt-20 md:mt-60 bg-white">
      <div className="flex flex-col  gap-y-4 pb-8 relative">
        <div className="w-full md:flex md:items-center md:gap-x-24 bg-green-700 text-center py-8 px-4 space-y-4 order-2 lg:order-1 md:px-20  xl:px-40">
          <h5 className="text-white text-xl xl:text-3xl font-bold">
            جستجو در سایت
          </h5>
          <div className="flex flex-1 xl:max-w-xs lg:max-w-xs 2xl:max-w-lg">
            <input
              type="text"
              placeholder="نام برند یا محصول مورد نظر..."
              className="bg-white text-gray-700 px-4 py-2 rounded-r-full flex-1"
            />
            <button className="bg-yellow px-4 py-2 rounded-l-full">
              جستجو
            </button>
          </div>
        </div>

        <div className="px-8  w-fit order-1 lg:order-2  mx-auto lg:absolute lg:left-4 xl:left-16">
          <div className="w-full bg-[#fef9c3] border-4 p-8 xl:p-12 border-yellow flex-center flex-col lg:mb-4 gap-4 ">
            <h5 className="text-2xl md:text-3xl xl:text-4xl font-bold">
              ساعت کاری
            </h5>
            <div className="space-y-4 font-medium text-sm md:text-base xl:text-lg mt-8">
              <div className="flex items-center gap-x-8">
                <span>شنبه</span>
                <span className="self-start text-left flex-1">
                  {" "}
                  7 صبح الی 19 بعدازظهر
                </span>
              </div>
              <div className="flex items-center gap-x-8">
                <span>یکشنبه</span>
                <span className="self-start text-left flex-1">
                  {" "}
                  7 صبح الی 19 بعدازظهر
                </span>
              </div>
              <div className="flex items-center gap-x-8">
                <span>دوشنبه</span>
                <span className="self-start text-left flex-1">
                  {" "}
                  7 صبح الی 19 بعدازظهر
                </span>
              </div>
              <div className="flex items-center gap-x-8">
                <span>سه شنبه</span>
                <span className="self-start text-left flex-1">
                  {" "}
                  7 صبح الی 19 بعدازظهر
                </span>
              </div>
              <div className="flex items-center gap-x-8">
                <span>چهارشنبه</span>
                <span className="self-start text-left flex-1">
                  {" "}
                  7 صبح الی 19 بعدازظهر
                </span>
              </div>
              <div className="flex items-center gap-x-8">
                <span>پنجشنبه</span>
                <span className="self-start text-left flex-1">
                  {" "}
                  7 صبح الی 19 بعدازظهر
                </span>
              </div>
              <div className="flex items-center gap-x-8">
                <span>جمعه</span>
                <span className="self-start text-left flex-1">
                  {" "}
                  7 صبح الی 19 بعدازظهر
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start  justify-around lg:justify-start lg:gap-x-72 xl:gap-x-96 px-8 order-3 lg:mt-20 container">
          <div>
            <h6 className="text-base lg:text-xl font-semibold mb-4">لینک ها</h6>
            <ul className="text-sm lg:text-lg text-gray-500 mr-2 space-y-1">
              <li>
                <a href="#">خانه</a>
              </li>
              <li>
                <a href="#">محصولات ویژه</a>
              </li>
              <li>
                <a href="#">محصولات غذایی</a>
              </li>
              <li>
                <a href="#">محصولات مراقبتی</a>
              </li>
              <li>
                <a href="#">بلاگ ها</a>
              </li>
              <li>
                <a href="#">ارتباط با ما</a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <a className="text-yellow font-bold text-2xl lg:text-3xl" href="#">
              پت شاپ
            </a>

            <p className="lg:text-lg">آدرس: فروشگاه ...</p>

            <a className="block lg:text-lg" href="mailto:test@test.com">
              info@test.ir
            </a>

            <div className="flex gap-x-4">
              <div className="bg-blue-600 text-white p-1 lg:p-2 rounded">
                <MessageCircle className="lg:h-8 lg:w-8" />
              </div>
              <div className="bg-lime-500 text-white p-1 lg:p-2 rounded">
                <MessageCircle className="lg:h-8 lg:w-8" />
              </div>
              <div className="bg-purple-600 text-white p-1 lg:p-2 rounded">
                <MessageCircle className="lg:h-8 lg:w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
