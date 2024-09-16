import { Link } from "react-router-dom";
import { baseUrl } from "../../../app/baseUrl";
import useCart from "../../../hooks/useCart";
import Quantity from "../quantity";

export default function Card({ data }: { data: any }) {
  const foodCart = useCart((state) => state.food);
  const incrementCartItem = useCart((state) => state.increment);
  const food = foodCart?.find((item) => item.food_id === data?.id);

  return (
    <div
      data-aos={location.pathname.includes("/shop") ? "fade-up" : undefined}
      className="bg-white md:border-2 rounded flex flex-col items-center overflow-hidden relative border"
    >
      <Link to={`/shop/foods/${data.id}`}>
        <img
          src={data.image ? baseUrl + data?.image[0].image : ""}
          alt={data?.title}
          loading="lazy"
          // style={{
          //   display: isShowImage ? "block" : "none",
          // }}
          className="!w-11/12 !h-64 mx-auto"
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

      {food ? (
        <div className="mb-4">
          <Quantity
            type="food"
            price={data.price}
            id={data?.id}
            quantity={food?.quantity || 1}
            image={baseUrl + data?.image[0].image}
            title={data.title}
            unit={data.price}
          />
        </div>
      ) : (
        <button
          onClick={() =>
            incrementCartItem("food", {
              id: data.id,
              price: data.price,
              quantity: 1,
              image: baseUrl + data?.image[0].image,
              title: data.title,
              unit: data.price,
            })
          }
          className="px-4 py-2 bg-primary text-base mb-4 font-semibold rounded shadow-sm hover:scale-95 transition-all"
        >
          افزودن به سبد خرید
        </button>
      )}
    </div>
  );
}
