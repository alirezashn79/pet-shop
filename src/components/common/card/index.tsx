import { Link } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import Quantity from "../quantity";

interface ICard {
  title: string;
  image: string;
  link: string;
  price: number;
}

export default function Card({ title, link, image, price }: ICard) {
  const cartData = useCart((state) => state.data);
  const addToCart = useCart((state) => state.addToCart);

  return (
    <div className="bg-white md:border-2 md:rounded flex flex-col items-center overflow-hidden">
      <Link to="/shop/1">
        <img
          src={image}
          alt={title}
          className="w-full h-[282px] object-contain shrink-0 mx-auto"
        />

        <div className="text-center text-base py-4 space-y-2.5">
          <a href={link}>{title}</a>
          <p className="text-rose-500 text-sm">
            {price.toLocaleString()} تومان
          </p>
        </div>
      </Link>

      {cartData?.some((item) => item.id === "3") ? (
        <div className="mb-4">
          <Quantity id="3" quantity={1} />
        </div>
      ) : (
        <button
          onClick={addToCart.bind(null, {
            id: "3",
            img: image,
            product: title,
            quantity: 1,
            unitPrice: price,
          })}
          className="px-4 py-2 bg-primary text-xs mb-4 font-semibold rounded-sm shadow-sm hover:scale-95 transition-all"
        >
          افزودن به سبد خرید
        </button>
      )}
    </div>
  );
}
