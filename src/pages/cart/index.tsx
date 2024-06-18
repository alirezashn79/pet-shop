import DataTable, { TableColumn } from "react-data-table-component";
import Quantity from "../../components/common/quantity";
import TitleBar from "../../components/common/titlebar";
import { useCart } from "../../hooks/useCart";
import { TCartProduct } from "../../types";
import { Link } from "react-router-dom";
import Loading from "../../components/loading";

export default function CartPage() {
  const data = useCart((state) => state.data);
  const loading = useCart((state) => state.loading);
  const removeFromCart = useCart((state) => state.removeFromCart);

  const columns: TableColumn<TCartProduct>[] = [
    {
      name: "#",
      cell: (row, idx) => idx + 1,
      width: "40px",
    },
    {
      name: "کالا",
      selector: (row) => row.title,
      cell: (row) => (
        <div className="flex-center gap-x-4 p-2 w-[56rem] md:w-auto">
          <img
            className="lg:w-24 lg:h-24 h-16 w-16"
            src={row.thumbnail}
            alt={row.title}
          />
          <span className="lg:text-base block w-full text-sm">{row.title}</span>
        </div>
      ),
    },
    {
      name: "تعداد",
      selector: (row) => row.quantity,
      cell: (row) => (
        <div>
          <Quantity id={row.id} quantity={row.quantity} />
        </div>
      ),
    },
    {
      name: "قیمت واحد",
      selector: (row) => row.price,
      cell: (row) => (
        <p className="text-base text-gray-600">
          {row.price.toLocaleString()}
          <span className="mr-1">تومان</span>
        </p>
      ),
    },

    {
      name: "قیمت کل",
      selector: (row) => row.quantity * row.price,
      cell: (row) => (
        <p className="text-base text-gray-600">
          {(row.quantity * row.price).toLocaleString()}
          <span className="mr-1">تومان</span>
        </p>
      ),
    },

    {
      name: "عملیات",
      cell: (row) => (
        <button
          onClick={removeFromCart.bind(null, row.id)}
          className="bg-rose-800 text-white px-2 py-1 rounded-sm"
        >
          حذف
        </button>
      ),
    },
  ];

  if (loading) return <Loading />;

  return (
    <div className="page">
      <TitleBar title="سبد خرید" />

      <div data-aos="zoom-in">
        <DataTable
          responsive={true}
          noDataComponent={
            <p className="text-lg font-semibold p-4">سبد خرید شما خالی است</p>
          }
          columns={columns}
          data={data || []}
        />
      </div>

      {data && data?.length > 0 ? (
        <>
          <div className=" bg-white  lg:w-1/3 md:w-1/2 w-full  mx-auto mt-4 p-4">
            <div className="flex items-center justify-between py-2 mx-auto">
              <span>تعداد کل کالا ها</span>
              <span className="text-base lg:text-xl font-semibold">
                {data.reduce((prev, current) => prev + current.quantity, 0)} #
              </span>
            </div>
            <div className="flex items-center justify-between py-2 mx-auto font-semibold">
              <span>مبلغ قابل پرداخت:</span>
              <p className="text-green-600 text-base md:text-xl">
                {" "}
                {data
                  ?.reduce(
                    (prev, current) => prev + current.quantity * current.price,
                    0
                  )
                  .toLocaleString()}
                <span className="ms-1">تومان</span>
              </p>
            </div>
          </div>
          <div className="flex-center mt-4">
            <button className="bg-primary px-8 py-2.5 text-lg">
              ثبت سفارش
            </button>
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
