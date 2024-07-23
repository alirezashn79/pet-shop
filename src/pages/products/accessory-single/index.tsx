import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../../components/breadcrumb";
import Gallery from "../../../components/common/gallery";
import Loading from "../../../components/loading";
import ProductsSlider from "../../../components/common/product-slider";
import TitleBar from "../../../components/common/titlebar";
import useProduct from "../../../hooks/useProduct";
import { cn } from "cn-func";
import useCart from "../../../hooks/useCart";
import Quantity from "../../../components/common/quantity";
import { baseUrl } from "../../../app/baseUrl";

export default function SingleAccessoryPage() {
  const [currentBtn, setCurrentBtn] = useState<"details" | "description">(
    "description"
  );
  const params = useParams();
  const getSingleAccessory = useProduct((state) => state.getSingleAccessory);
  const loading = useProduct((state) => state.loading);
  const allAccessories = useProduct((state) => state.accessories);
  const singleAccessory = useProduct((state) => state.singleAccessory);
  const navigate = useNavigate();

  const productCart = useCart((state) => state.product);
  const incrementProductCart = useCart((state) => state.increment);
  const product = productCart?.find(
    (item) => item.product_id === Number(params.id)
  );

  useEffect(() => {
    getSingleAccessory({ id: String(params.id) });
  }, [params, getSingleAccessory]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-white">
      <div className="page">
        <Breadcrumb />

        <hr />
        <section className="lg:p-16 mb-8 xl:mb-0">
          <div className="flex flex-col lg:flex-row gap-x-16">
            <Gallery images={singleAccessory?.images} />

            <div className="mt-10 space-y-8 md:mx-auto">
              <h1 className="text-lg md:text-2xl xl:text-4xl font-bold text-gray-800">
                {singleAccessory?.title}
              </h1>
              <p
                className={cn(
                  "text-sm md:text-base xl:text-2xl",
                  singleAccessory?.discount_amount.discount_price
                    ? "text-rose-500 line-through "
                    : "text-green-500"
                )}
              >
                {Number(singleAccessory?.price).toLocaleString()} تومان
              </p>
              {singleAccessory?.discount_amount.discount_price && (
                <p
                  className={"text-green-500 text-sm md:text-base xl:text-2xl"}
                >
                  {singleAccessory.discount_amount.discount_price.toLocaleString()}{" "}
                  تومان
                </p>
              )}
              <ul className="space-y-2 text-xs md:text-sm xl:text-base">
                <li>واحد به گرم: {singleAccessory?.unit}</li>
              </ul>

              <div className="flex-center lg:block">
                {product ? (
                  <div className="mb-4">
                    <Quantity
                      image={baseUrl + singleAccessory?.images[0].image}
                      title={singleAccessory?.title as string}
                      unit={singleAccessory?.price as number}
                      type="product"
                      price={
                        (singleAccessory?.discount_amount.discount_price ===
                        null
                          ? singleAccessory?.price
                          : singleAccessory?.discount_amount
                              .discount_price) as number
                      }
                      id={Number(params.id)}
                      quantity={product?.quantity || 1}
                    />
                  </div>
                ) : (
                  <button
                    onClick={() =>
                      incrementProductCart(
                        "product",
                        {
                          id: Number(params.id),
                          price: (singleAccessory?.discount_amount
                            .discount_price === null
                            ? singleAccessory?.price
                            : singleAccessory?.discount_amount
                                .discount_price) as number,
                          quantity: 1,
                          image: baseUrl + singleAccessory?.images[0].image,
                          title: singleAccessory?.title as string,
                          unit: singleAccessory?.price as number,
                        },
                        navigate
                      )
                    }
                    className="px-4 py-2 bg-primary text-base mb-4 font-semibold rounded shadow-sm hover:scale-95 transition-all"
                  >
                    افزودن به سبد خرید
                  </button>
                )}
              </div>
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
                        رنگ
                      </span>
                      <span className="text-gray-700 text-xs md:text-sm ">
                        {singleAccessory?.color}
                      </span>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <span className="text-gray-500 md:text-xs text-[8px] min-w-48">
                        واحد
                      </span>
                      <span className="text-gray-700 text-xs md:text-sm ">
                        {singleAccessory?.unit}
                      </span>
                    </div>
                  </li>

                  <li className="py-2">
                    <div className="flex items-center">
                      <span className="text-gray-500 md:text-xs text-[8px] min-w-48">
                        کشور تولید کننده
                      </span>
                      <span className="text-gray-700 text-xs md:text-sm ">
                        {singleAccessory?.made_by_country}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            )}
            {currentBtn === "description" && (
              <div className="border border-primary rounded p-4">
                <p className="text-justify text-slate-800 text-sm/8">
                  {singleAccessory?.description}
                </p>
              </div>
            )}
          </div>

          <div className="my-16">
            <TitleBar title="محصولات مرتبط" />
            <ProductsSlider
              type="ACCESSORY"
              id={Number(params.id)}
              data={allAccessories?.results}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
