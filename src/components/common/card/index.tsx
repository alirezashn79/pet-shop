import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../../app/baseUrl";
import useCart from "../../../hooks/useCart";
import Quantity from "../quantity";

export default function Card({ data }: { data: any }) {
  const navigate = useNavigate();

  const productCart = useCart((state) => state.product);
  const incrementProductCart = useCart((state) => state.increment);
  const product = productCart?.find((item) => item.product_id === data?.id);

  return (
    <div
      data-aos={location.pathname.includes("/shop") ? "fade-up" : undefined}
      className="bg-white md:border-2 rounded flex flex-col items-center overflow-hidden relative border"
    >
      <Link to={`/shop/accessories/product/${data.id}`}>
        {data.images && (
          <img
            src={baseUrl + data?.images[0].image}
            alt={data?.title}
            loading="lazy"
            className="w-full h-[282px] object-contain shrink-0 mx-auto"
          />
        )}

        <div className="text-center text-base py-4 px-0.5 space-y-2.5">
          <p className="line-clamp-2">{data?.title}</p>

          {data.discount_amount.discount_price !== null ? (
            <div className="min-h-16">
              <p className="text-red-800 text-lg line-through">
                {data?.price.toLocaleString()} تومان
              </p>

              <p className="text-green-800 text-lg ">
                {data?.discount_amount.discount_price.toLocaleString()} تومان
              </p>
            </div>
          ) : (
            <div className="min-h-16">
              <p className="text-green-800 text-lg">
                {data?.price.toLocaleString()} تومان
              </p>
              {data?.discount_amount?.discount_price && (
                <p className="text-green-800 text-lg ">
                  {data?.discount_amount.discount_price.toLocaleString()} تومان
                </p>
              )}
            </div>
          )}
        </div>
      </Link>

      {product ? (
        <div className="mb-4">
          <Quantity
            type="product"
            price={
              data.discount_amount.discount_price === null
                ? data.price
                : data.discount_amount.discount_price
            }
            id={data?.id}
            quantity={product?.quantity || 1}
            image={baseUrl + data?.images[0].image}
            title={data.title}
            unit={data.price}
          />
        </div>
      ) : (
        <button
          onClick={() =>
            incrementProductCart(
              "product",
              {
                id: data.id,
                price:
                  data.discount_amount.discount_price === null
                    ? data.price
                    : data.discount_amount.discount_price,
                quantity: 1,
                image: baseUrl + data?.images[0].image,
                title: data.title,
                unit: data.price,
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
  );
}
