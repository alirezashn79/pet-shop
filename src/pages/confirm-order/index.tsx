import Cookies from "js-cookie";
import { CircleCheckBig } from "lucide-react";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import client from "../../app/client";
import useCart from "../../hooks/useCart";

interface DataRow {
  title: string;
  image: string;
  price: number;
  unit: number;
  quantity: number;
  product_id?: number;
  food_id?: number;
}

const columns: TableColumn<DataRow>[] = [
  {
    name: "#",
    cell: (_, idx) => <p>{idx + 1}</p>,
  },
  {
    name: "محصول",
    selector: (row) => row.title,
    cell: (row) => <p>{row.title}</p>,
  },
  {
    name: "تعداد",
    selector: (row) => row.quantity,
  },
  {
    name: "قیمت کل ",
    selector: (row) => (row.quantity * row.unit).toLocaleString(),
  },
];
export default function ConfirmationOrder() {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const clear = useCart((state) => state.clear);
  const navigate = useNavigate();
  const productCookie = Cookies.get("product_cart");
  const foodCookie = Cookies.get("food_cart");

  const data = [
    ...JSON.parse(productCookie || "[]"),
    ...JSON.parse(foodCookie || "[]"),
  ];

  const orderHandler = async () => {
    try {
      setLoading(true);
      const products = JSON.parse(productCookie || "[]").map((item: any) => ({
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.price,
      }));
      const foods = JSON.parse(foodCookie || "[]").map((item: any) => ({
        food_id: item.food_id,
        quantity: item.quantity,
        price: item.price,
      }));

      const allOrders = {
        food: foods,
        product: products,
      };
      await client.post("/order/create/", allOrders);
      clear();
      setIsSuccess(true);

      toast.success("سفارش شما با موفقیت ثبت شد");
      navigate(1);
    } catch (error) {
      toast.error("خطا");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (
      (!productCookie || JSON.parse(productCookie as string).length == 0) &&
      (!foodCookie || JSON.parse(foodCookie as string).length == 0) &&
      !isSuccess
    ) {
      navigate("/", { replace: true });
    }
  }, [foodCookie, productCookie]);

  useEffect(() => {
    document.title = "پت شاپ رز | " + "پیش فاکتور";
  }, []);

  if (isSuccess) {
    return (
      <div className="page flex-center flex-col text-center text-2xl h-96">
        <CircleCheckBig className="h-32 w-32 text-green-600" />
        <h3 className="text-green-800">
          سفارش شما با موفقیت ثبت شد
          <br />
          منتظر تماس ما باشید
        </h3>
        <Link className="bg-primary text-base mt-8 p-2" to="/">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    );
  }

  return (
    <div className="page lg:px-8">
      <DataTable
        theme="solarized"
        title="پیش فاکتور خرید شما"
        columns={columns}
        data={data || null}
        className="border"
      />
      <div className="border bg-white text-center p-10 space-y-2 text-slate-700">
        <p>
          <span className="text-sm">مجموع اقلام: </span>
          <span className="text-lg font-semibold">
            {data.reduce((prev, current) => prev + current.quantity, 0)}
          </span>
        </p>
        <p>
          <span className="text-sm">مبلغ نهایی : </span>
          <span className="text-lg font-semibold">
            {data
              ?.reduce(
                (prev, current) => prev + current.quantity * current.unit,
                0
              )
              .toLocaleString()}
          </span>
        </p>
        <div className="pt-4">
          <button
            disabled={loading}
            onClick={orderHandler}
            className="bg-green-600 text-white px-4 py-2 text-lg"
          >
            ثبت سفارش
          </button>
        </div>
      </div>
    </div>
  );
}
