import { Minus, Plus, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { useCart } from "../../../hooks/useCart";

export default function Quantity({
  id,
  quantity,
}: {
  id: string;
  quantity: number;
}) {
  const updateData = useCart((state) => state.updateData);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const [quantityState, setQuantityState] = useState(quantity);
  const [showAnimation, setShowAnimation] = useState(false);

  const incrementQuantity = async () => {
    setShowAnimation((prev) => !prev);
    await updateData(id, "increment");
    setQuantityState((prev) => prev + 1);
  };

  const decrementQuantity = async () => {
    setShowAnimation((prev) => !prev);
    await updateData(id, "decrement");
    setQuantityState((prev) => prev - 1);
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
        {quantityState}
      </div>
      {quantityState === 1 ? (
        <button
          onClick={removeFromCart.bind(null, id)}
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
