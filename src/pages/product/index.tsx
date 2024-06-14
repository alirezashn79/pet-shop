import { MessageSquareDiff } from "lucide-react";
import { useState } from "react";
import Breadcrumb from "../../components/breadcrumb";

export default function SingleProduct() {
  const [currentBtn, setCurrentBtn] = useState<"details" | "comments">(
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

        <div className="px-16">
          <ul className="flex flex-wrap text-xs lg:text-sm font-medium text-center text-gray-500 border-b overflow-hidden rounded-lg w-fit mx-auto border-gray-200">
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
            <li className="mr-2">
              <button
                onClick={() => setCurrentBtn("comments")}
                className={`inline-block p-4   rounded-t-lg ${
                  currentBtn === "comments" && "bg-primary/20"
                }`}
              >
                کامنت ها
              </button>
            </li>
            <li className="mr-2">
              <button
                onClick={() => setCurrentBtn("comments")}
                className={`inline-block p-4   rounded-t-lg ${
                  currentBtn === "comments" && "bg-primary/20"
                }`}
              >
                توضیحات
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
            {currentBtn === "comments" && (
              <div className="h-64 w-1/2 flex flex-col gap-y-2 mx-auto items-center justify-center bg-primary/20">
                <div>
                  <MessageSquareDiff className="h-20 w-20" />
                </div>
                <p>نظری وجود ندارد</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
