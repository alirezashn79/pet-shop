import { AlignStartVertical, ChevronDown, Coins } from "lucide-react";
import { useEffect, useState } from "react";
import client from "../../app/client";
import CoinImg from "../../assets/image/coin.png";

export default function Lig() {
  const [data, setData] = useState<
    | null
    | {
        first_name: string;
        score: number;
      }[]
  >();
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    document.title = "پت شاپ رز | " + "باشگاه مشتریان";

    const getData = async () => {
      const res = await client.get("/home/user-score/");

      const sortedData = res?.data.sort(
        (a: { score: number }, b: { score: number }) => a.score < b.score
      );

      setData(sortedData);
    };

    getData();
  }, []);

  return (
    <div>
      <div className="container py-8 space-y-16">
        <div
          className={`border p-4 rounded-md  overflow-hidden transition-all duration-300`}
        >
          <div className="flex items-center gap-4">
            <img
              src={CoinImg}
              alt="coin"
              className="h-10 w-10 md:w-16 md:h-16"
            />
            <h1 className="text-xl md:text-3xl text-gray-800">
              باشگاه مشتریان
            </h1>
          </div>
          <div className=" my-2 space-y-2">
            <h4 className="text-base md:text-xl">چطوری امتیاز بدست بیاریم؟</h4>
            <p
              className={`text-gray-600 leading-8 text-justify text-sm md:text-base ${
                showMore ? "line-clamp-none" : "line-clamp-2"
              }`}
            >
              با خرید از محصولات ما امتیاز جمع کنید
            </p>
          </div>
          <div className={` my-2 space-y-2 ${showMore ? "block" : "hidden"}`}>
            <h4 className="text-base md:text-xl">جوایز:</h4>
            <p className="text-gray-600 leading-8 text-justif text-sm md:text-base">
              کد های تخفیف و ...
            </p>
          </div>
          <div className="flex justify-center my-2">
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="bg-primary px-4 py-2 rounded-lg font-bold text-sm md:text-base ease-in-out hover:bg-transparent hover:text-primary duration-300 border-primary border-2 flex-center gap-x-2"
            >
              {showMore ? <span>بستن</span> : <span>مشاهده بیشتر...</span>}
              <ChevronDown
                className={`${showMore ? "rotate-180" : "rotate-0"} transition-all`}
              />
            </button>
          </div>
        </div>

        {/* table */}
        <div className="flex items-center gap-4">
          <AlignStartVertical className="w-6 h-6 md:w-10 md:h-10 text-primary" />
          <h1 className="text-xl md:text-3xl text-gray-800">جدول</h1>
        </div>
        <div>
          <div
            data-aos="fade-up"
            className="relative overflow-x-auto shadow-md sm:rounded-lg"
          >
            <table className="w-full text-sm border  text-gray-500">
              <thead className="text-xs  text-gray-700 uppercase dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    رتبه
                  </th>

                  <th scope="col" className="px-6 py-3">
                    نام
                  </th>
                  <th scope="col" className="px-6 py-3">
                    امتیاز
                  </th>
                </tr>
              </thead>
              <tbody className="[&>*:nth-child(2)]:bg-gray-100 [&>*:nth-child(1)]:bg-[#FFEEA9] [&>*:nth-child(3)]:bg-red-100">
                {data?.map((item: any, idx: number) => (
                  <tr
                    className={`border-b border-gray-200 text-gray-700 first:font-bold`}
                  >
                    <th scope="row" className="px-6 py-4   whitespace-nowrap ">
                      {idx + 1}#
                    </th>

                    <td className="px-6 py-4">{item.full_name}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4  ">
                        <Coins className="h-6 w-6 text-primary" />
                        {item.score}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
