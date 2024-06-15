import { Trash2Icon } from "lucide-react";
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

  const incrementQuantity = async () => {
    await updateData(id, "increment");
    setQuantityState((prev) => prev + 1);
  };

  const decrementQuantity = async () => {
    await updateData(id, "decrement");
    setQuantityState((prev) => prev - 1);
  };

  return (
    <div className="flex-center text-base">
      <button
        onClick={incrementQuantity}
        className="h-6 w-6  bg-primary flex-center font-bold text-lg"
      >
        +
      </button>
      <div className="w-8 text-center">{quantityState}</div>
      {quantityState === 1 ? (
        <button
          onClick={removeFromCart.bind(null, id)}
          className="h-6 w-6 bg-primary flex-center font-bold text-lg"
        >
          <Trash2Icon className="h-4 w-4" />
        </button>
      ) : (
        <button
          onClick={decrementQuantity}
          className="h-6 w-6 bg-primary flex-center font-bold text-lg"
        >
          -
        </button>
      )}
    </div>
  );
}
