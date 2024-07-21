import { Link } from "react-router-dom";
import { baseUrl } from "../../../app/baseUrl";
import { useCart } from "../../../hooks/useCart";
import Quantity from "../quantity";
import { cn } from "cn-func";

export default function Card({ data }: { data: any }) {
  const cartData = useCart((state) => state.data);
  const addToCart = useCart((state) => state.addToCart);

  return (
    <div
      data-aos={location.pathname.includes("/shop") ? "fade-up" : undefined}
      className="bg-white md:border-2 rounded flex flex-col items-center overflow-hidden relative border"
    >
      <Link to={`/shop/accessories/product/${data.id}`}>
        <img
          src={baseUrl + data?.images[0].image}
          alt={data?.title}
          loading="lazy"
          className="w-full h-[282px] object-contain shrink-0 mx-auto"
        />

        <div className="text-center text-base py-4 px-0.5 space-y-2.5">
          <Link
            className="line-clamp-2"
            to={`/shop/accessories/product/${data?.id}`}
          >
            {data?.title}
          </Link>

          {data.discount_price ? (
            <div className="min-h-16">
              <p
                className={cn(
                  data.discount_price
                    ? "text-rose-500 text-lg line-through"
                    : "text-green-800 text-lg "
                )}
              >
                {data?.price.toLocaleString()} تومان
              </p>
              {data.discount_price && (
                <p className="text-green-800 text-lg ">
                  {data?.discount_amount.discount_price.toLocaleString()} تومان
                </p>
              )}
            </div>
          ) : (
            <div className="min-h-16">
              <p
                className={cn(
                  data.discount_amount.discount_price
                    ? "text-rose-500 text-lg line-through"
                    : "text-green-800 text-lg "
                )}
              >
                {data?.price.toLocaleString()} تومان
              </p>
              {data.discount_amount.discount_price && (
                <p className="text-green-800 text-lg ">
                  {data?.discount_amount.discount_price.toLocaleString()} تومان
                </p>
              )}
            </div>
          )}
        </div>
      </Link>

      {cartData?.some((item) => item.id === data?.id) ? (
        <div className="mb-4">
          <Quantity
            id={data?.id}
            quantity={
              cartData?.find((item) => item.id === data?.id)?.quantity || 1
            }
          />
        </div>
      ) : (
        <button
          onClick={() =>
            addToCart({ id: data.id, quantity: 1, type: "Product" })
          }
          className="px-4 py-2 bg-primary text-base mb-4 font-semibold rounded shadow-sm hover:scale-95 transition-all"
        >
          افزودن به سبد خرید
        </button>
      )}
    </div>
  );
}
