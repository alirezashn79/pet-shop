import { Info, LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import toast from "react-hot-toast";
import type { Value } from "react-multi-date-picker";
import DatePicker from "react-multi-date-picker";
import { useNavigate } from "react-router-dom";
import client from "../../app/client";
import Input from "../../components/input";
import logout from "../../utils/logout";

export default function EditProfile() {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<Value | null>(null);
  const [full_name, setFull_name] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    toast.promise(
      client
        .put("/edit-profile/", {
          date_birth: new Date(date as string)
            .toLocaleDateString("en-GB")
            .split("/")
            .reverse()
            .join("-"),
          full_name,
        })
        .then((res) => {
          if (res.status === 202) {
            logout();
            setDate("");
            navigate("/signin");
          }
        })
        .finally(() => setLoading(false)),
      {
        error: (err) => {
          if (
            err.response &&
            err.response.status !== 401 &&
            err.config.url !== "/accounts/api/refresh/"
          ) {
            return err.response.data.message;
          }
          return "خطا";
        },
        loading: "صبر کنید",
        success: "اطلاعات با موفقیت ویرایش شد",
      }
    );
  };

  useEffect(() => {
    const getData = async () => {
      const res = await client.get("/edit-profile/");
      const formatedDate = new Date(res.data.date_birth).toLocaleDateString(
        "fa-IR"
      );

      setDate(formatedDate);
      setFull_name(res.data.full_name);
    };

    getData();
  }, []);

  if (loading) {
    return (
      <div className="col-span-2 lg:w-64" data-aos="zoom-in">
        <h1 className="text-center  text-xl font-bold text-[#240750]">
          ویرایش اطلاعات
        </h1>
        <p className="text-center text-xs text-gray-700 py-4 flex items-center gap-x-2 justify-center">
          <Info className="w-3 h-3" />
          اطلاعات خود را ویرایش کنید
        </p>

        <center className="my-14">
          <LoaderCircle className="animate-spin text-[#240750]" />
        </center>
      </div>
    );
  }

  return (
    <div className="col-span-2 lg:w-64" data-aos="zoom-in">
      <h1 className="text-center  text-xl font-bold text-[#240750]">
        ویرایش اطلاعات
      </h1>
      <p className="text-center text-xs text-gray-700 py-4 flex items-center gap-x-2 justify-center">
        <Info className="w-3 h-3" />
        اطلاعات خود را ویرایش کنید
      </p>
      <form onSubmit={onSubmit} className="mx-auto space-y-2">
        <div className="space-y-1">
          <Input
            register={{
              value: full_name,
              onChange: (e) => setFull_name(e.target.value),
            }}
            name="full_name"
            type="text"
            label="نام"
          />
        </div>
        <div className="space-y-1">
          <DatePicker
            className="bg-gradient-to-l from-gray-300 to-gray-100"
            arrowStyle={{
              display: "none",
            }}
            calendar={persian}
            locale={persian_fa}
            containerStyle={{
              width: "100%",
            }}
            render={
              <div className="relative w-full  group flex items-center">
                <input
                  value={date?.toString()}
                  autoComplete="false"
                  type="text"
                  name="date_birth"
                  id="date_birth"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-gray-800"
                  placeholder=" "
                />

                <label
                  htmlFor="date_birth"
                  className="peer-focus:font-medium absolute text-xs md:text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  تاریخ تولد
                </label>
              </div>
            }
            value={date}
            onChange={setDate}
          />
        </div>

        <div className="flex justify-center mt-4">
          <button
            // disabled={loading}
            type="submit"
            className="bg-[#240750] text-white px-6 py-2 rounded-md "
          >
            ارسال
          </button>
        </div>
      </form>
    </div>
  );
}
