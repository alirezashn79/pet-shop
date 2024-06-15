import { Link } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import { IProductList } from "../../../types";
import Quantity from "../quantity";

interface ICard {
  data: IProductList;
}

export default function Card({ data }: ICard) {
  const cartData = useCart((state) => state.data);
  const addToCart = useCart((state) => state.addToCart);

  return (
    <div className="bg-white md:border-2 rounded flex flex-col items-center overflow-hidden relative border">
      {/* <div className="absolute left-4 top-4 bg-red-500 px-1 text-sm text-white rounded-sm">
        {"سگ"}
      </div> */}

      <Link to="/shop/1">
        <img
          src={data?.thumbnail}
          alt={data?.title}
          className="w-full h-[282px] object-contain shrink-0 mx-auto"
        />

        <div className="text-center text-base py-4 space-y-2.5">
          <Link className="line-clamp-2" to={`/shop/${data?.id}`}>
            {data?.title}
          </Link>
          <p className="text-green-800">{data?.price.toLocaleString()} تومان</p>
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
          onClick={addToCart.bind(null, { ...data, quantity: 1 })}
          className="px-4 py-2 bg-primary text-xs mb-4 font-semibold rounded-sm shadow-sm hover:scale-95 transition-all"
        >
          افزودن به سبد خرید
        </button>
      )}
    </div>
  );
}
