import { Link } from "react-router-dom";
import Quantity from "../quantity";

export default function CartItem({
  item,
  type,
}: {
  item: {
    title: string;
    image: string;
    price: number;
    unit: number;
    quantity: number;
    id: number;
  };
  type: "food" | "product";
}) {
  return (
    <tr className="border-b border-gray-200 text-gray-700">
      <th scope="row" className="px-6 py-4">
        <Link
          to={
            type === "food"
              ? `/shop/foods/${item.id}`
              : `/shop/accessories/product/${item.id}`
          }
        >
          <div className="flex items-center">
            <img
              className="w-16 h-16 object-cover"
              src={item.image}
              alt={item.title}
            />
            <p>{item.title}</p>
          </div>
        </Link>
      </th>
      <td className="px-6 py-4">
        <Quantity
          id={item.id}
          image={item.image}
          price={item.price}
          quantity={item.quantity}
          title={item.title}
          type={type}
          unit={item.unit}
        />
      </td>
      <td className="px-6 py-4">{item.unit.toLocaleString()} تومان </td>
      <td className="px-6 py-4">
        {(item.quantity * item.unit).toLocaleString()} تومان{" "}
      </td>
    </tr>
  );
}
