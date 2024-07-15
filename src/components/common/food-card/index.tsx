import { Link } from "react-router-dom";
import { baseUrl } from "../../../app/baseUrl";
import { useCart } from "../../../hooks/useCart";
import Quantity from "../quantity";

export default function Card({ data }: { data: any }) {
  const cartData = useCart((state) => state.data);
  const addToCart = useCart((state) => state.addToCart);
  const cartClear = useCart((state) => state.cartClear);
  const cartCreate = useCart((state) => state.cartCreate);

  return (
    <div
      data-aos={location.pathname.includes("/shop") ? "fade-up" : undefined}
      className="bg-white md:border-2 rounded flex flex-col items-center overflow-hidden relative border"
    >
      <button onClick={cartClear}>cart clear</button>
      <button onClick={cartCreate}>cart create</button>
      <Link to={`/shop/foods/${data.id}`}>
        <img
          src={data.image ? baseUrl + data?.image[0].image : ""}
          alt={data?.title}
          loading="lazy"
          // style={{
          //   display: isShowImage ? "block" : "none",
          // }}
          className="w-full h-[282px] object-contain shrink-0 mx-auto"
        />

        <div className="text-center text-base py-4 px-0.5 space-y-2.5">
          <Link className="line-clamp-2" to={`/shop/foods/${data?.id}`}>
            {data?.title}
          </Link>
          <p className="text-green-800 text-lg">
            {data?.price.toLocaleString()} تومان
          </p>
        </div>
      </Link>

      {/* {cartData?.some((item) => item.id === data?.id) ? (
        <div className="mb-4">
          <Quantity
            id={data?.id}
            quantity={
              cartData?.find((item) => item.id === data?.id)?.quantity || 1
            }
          />
        </div>
      ) : ( */}
      <button
        onClick={() =>
          addToCart({ id: Number(data.id), quantity: 1, type: "Food" })
        }
        className="px-4 py-2 bg-primary text-base mb-4 font-semibold rounded shadow-sm hover:scale-95 transition-all"
      >
        افزودن به سبد خرید
      </button>
      {/* )} */}
    </div>
  );
}
