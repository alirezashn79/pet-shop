import { Minus, Plus, Trash2Icon } from "lucide-react";
import { useState } from "react";
import useCart from "../../../hooks/useCart";
// import { useCart } from "../../../hooks/useCart";

export default function Quantity({
  id,
  quantity,
  price,
  type,
  title,
  image,
  unit,
}: {
  id: number;
  quantity: number;
  type: "food" | "product";
  price: number;
  title: string;
  image: string;
  unit: number;
}) {
  const increment = useCart((state) => state.increment);
  const decrement = useCart((state) => state.decrement);
  const [showAnimation, setShowAnimation] = useState(false);

  const incrementQuantity = () => {
    setShowAnimation((prev) => !prev);
    increment(type, {
      id,
      price,
      quantity: quantity + 1,
      image,
      title,
      unit,
    });
  };

  const decrementQuantity = () => {
    setShowAnimation((prev) => !prev);
    decrement(type, {
      id,
      price,
      quantity: quantity - 1,
      title,
      image,
      unit,
    });
  };

  return (
    <div className="flex-center text-base">
      <button
        onClick={incrementQuantity}
        className="h-10 w-10  bg-primary flex-center font-bold text-lg rounded focus:scale-110 transition-all"
      >
        <Plus className="h-6 w-6" />
      </button>
      <div
        className={`w-12 text-center text-lg ${showAnimation ? "quantity_animation_up" : "quantity_animation_down"}`}
      >
        {quantity}
      </div>
      {quantity === 1 ? (
        <button
          onClick={decrementQuantity}
          className="h-10 w-10 bg-rose-500 flex-center font-bold text-lg rounded focus:scale-110 transition-all"
        >
          <Trash2Icon className="h-6 w-6 text-white" />
        </button>
      ) : (
        <button
          onClick={decrementQuantity}
          className="h-10 w-10 bg-primary flex-center font-bold text-lg rounded focus:scale-110 transition-all"
        >
          <Minus className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
