import DataTable, { TableColumn } from "react-data-table-component";
import Quantity from "../../components/common/quantity";
import TitleBar from "../../components/common/titlebar";
import { useCart } from "../../hooks/useCart";
import { IDataRowCart } from "../../types";
import { Link } from "react-router-dom";

export default function CartPage() {
  const data = useCart((state) => state.data);
  const loading = useCart((state) => state.loading);
  const removeFromCart = useCart((state) => state.removeFromCart);

  const columns: TableColumn<IDataRowCart>[] = [
    {
      name: "کالا",
      selector: (row) => row.product,
      cell: (row) => (
        <div className="flex-center gap-x-4 p-2">
          <img className="w-24" src={row.img} alt={row.product} />
          <span className="text-base block">{row.product}</span>
        </div>
      ),
    },
    {
      name: "تعداد",
      selector: (row) => row.quantity,
      cell: (row) => <Quantity id={row.id} quantity={row.quantity} />,
    },
    {
      name: "قیمت واحد",
      selector: (row) => row.unitPrice,
      cell: (row) => (
        <p className="text-base text-gray-600">
          {row.unitPrice.toLocaleString()}
          <span className="mr-1">تومان</span>
        </p>
      ),
    },

    {
      name: "قیمت کل",
      selector: (row) => row.quantity * row.unitPrice,
      cell: (row) => (
        <p className="text-base text-gray-600">
          {(row.quantity * row.unitPrice).toLocaleString()}
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

  return (
    <div className="page">
      <TitleBar title="سبد خرید" />

      <div data-aos="zoom-in">
        <DataTable
          noDataComponent={
            <p className="text-lg font-semibold p-4">سبد خرید شما خالی است</p>
          }
          columns={columns}
          data={data || []}
        />
      </div>

      {data && data?.length > 0 ? (
        <>
          <div className=" bg-white  w-1/3 mx-auto mt-4 p-4">
            <ul className="divide-y">
              {/* <li className="flex items-center justify-between py-2">
                <span>جمع کل خرید شما</span>
                <span>
                  {" "}
                  {data
                    ?.reduce(
                      (prev, current) =>
                        prev + current.quantity * current.unitPrice,
                      0
                    )
                    .toLocaleString()}
                </span>
              </li> */}
              <li className="flex items-center justify-between py-2">
                <span>مبلغ قابل پرداخت:</span>
                <p className="text-green-600 text-xl">
                  {" "}
                  {data
                    ?.reduce(
                      (prev, current) =>
                        prev + current.quantity * current.unitPrice,
                      0
                    )
                    .toLocaleString()}
                  <span className="ms-1">تومان</span>
                </p>
              </li>
            </ul>
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
