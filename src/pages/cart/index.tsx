import { useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/common/cart-item";
import TitleBar from "../../components/common/titlebar";
import useCart from "../../hooks/useCart";
import Cookies from "js-cookie";

export default function CartPage() {
  const foodData = useCart((state) => state.food);
  const productData = useCart((state) => state.product);

  useEffect(() => {
    document.title = "پت شاپ رز | " + "سبد خرید";
  }, []);

  return (
    <div className="page">
      <TitleBar
        title="سبد خرید"
        subTitle="محصولات تا 1 ساعت در سبد خرید شما باقی می مانند"
      />

      <div
        data-aos="fade-up"
        className="relative overflow-x-auto shadow-md sm:rounded-lg"
      >
        {((foodData && foodData?.length > 0) ||
          (productData && productData.length > 0)) && (
          <table className="w-full text-sm border  text-gray-500">
            <thead className="text-xs  text-gray-700 uppercase dark:text-gray-400 text-center border">
              <tr>
                <th scope="col" className="px-6 py-3">
                  محصول
                </th>
                <th scope="col" className="px-6 py-3">
                  تعداد
                </th>
                <th scope="col" className="px-6 py-3">
                  قیمت واحد
                </th>
                <th scope="col" className="px-6 py-3">
                  قیمت کل محصول
                </th>
              </tr>
            </thead>
            <tbody>
              {foodData?.map((item, idx) => (
                <CartItem
                  type="food"
                  key={`${idx}-food`}
                  item={{ ...item, id: item.food_id }}
                />
              ))}
              {productData?.map((item, idx) => (
                <CartItem
                  type="product"
                  key={`${idx}-product`}
                  item={{ ...item, id: item.product_id }}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>

      {(foodData && foodData?.length > 0) ||
      (productData && productData.length > 0) ? (
        <>
          <div className=" bg-white  lg:w-1/3 md:w-1/2 w-full  mx-auto mt-4 p-4">
            <div className="flex items-center justify-between py-2 mx-auto">
              <span>تعداد کل اقلام </span>
              <span className="text-base lg:text-xl font-semibold">
                {foodData.reduce(
                  (prev, current) => prev + current.quantity,
                  0
                ) +
                  productData.reduce(
                    (prev, current) => prev + current.quantity,
                    0
                  )}{" "}
                عدد
              </span>
            </div>
            <div className="flex items-center justify-between py-2 mx-auto font-semibold">
              <span>مبلغ قابل پرداخت:</span>
              <p className="text-green-600 text-base md:text-xl">
                {" "}
                {(
                  foodData?.reduce((prev, current) => prev + current.price, 0) +
                  productData?.reduce(
                    (prev, current) => prev + current.quantity * current.unit,
                    0
                  )
                ).toLocaleString()}
                <span className="ms-1">تومان</span>
              </p>
            </div>
          </div>
          <div className="flex-center mt-4">
            <Link
              to={
                Cookies.get("JWT_Token_Access")
                  ? "/shop/confirmation-order"
                  : "/signin"
              }
              className="bg-primary px-8 py-2.5 text-lg"
            >
              ثبت سفارش
            </Link>
          </div>
        </>
      ) : (
        <div className="flex-center mt-4">
          <Link to="/" className="bg-primary px-8 py-2.5 text-lg">
            بازگشت به صفحه اصلی
          </Link>
        </div>
      )}
    </div>
  );
}
