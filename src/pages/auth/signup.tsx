import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import { SubmitHandler, useForm } from "react-hook-form";
import type { Value } from "react-multi-date-picker";
import DatePicker from "react-multi-date-picker";
import { Link, useNavigate } from "react-router-dom";
import { InferType } from "yup";
import Image from "../../assets/image/signup.png";
import Input from "../../components/input";
import { useAuth } from "../../hooks/auth/useAuth";
import { UserSchema } from "../../schemas/auth";

export default function Signup() {
  const [date, setDate] = useState<Value | null>(null);
  const signUp = useAuth((state) => state.signUp);
  const loading = useAuth((state) => state.loading);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InferType<typeof UserSchema>>({
    resolver: yupResolver(UserSchema),
  });

  // handlers
  const onSubmit: SubmitHandler<InferType<typeof UserSchema>> = async (
    values
  ) => {
    signUp({
      values: {
        ...values,
        date: new Date(String(date)) //String
          .toLocaleDateString("en-GB")
          .split("/")
          .reverse()
          .join("-"),
      },
      navigate,
    });
  };

  return (
    <>
      <div
        className="hidden lg:flex items-center justify-center"
        data-aos="zoom-in"
      >
        <img
          src={Image}
          alt="Image"
          className="m-auto shrink-0 w-64 object-fit"
        />
      </div>
      <div data-aos="zoom-in">
        <h1 className="text-center my-4 text-2xl font-bold text-[#240750]">
          ثبت نام
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto space-y-2"
        >
          <div className="space-y-1">
            <Input
              autoFocus={true}
              register={register("name")}
              name="name"
              type="text"
              label="نام و نام خانوادگی"
            />
            <ErrorMessage
              errors={errors}
              name={"name"}
              render={({ message }) => (
                <span className="text-red-400 text-[10px] md:text-xs  block max-w-64">
                  {message}
                </span>
              )}
            />
          </div>

          <div className="space-y-1">
            <Input
              register={register("phone")}
              name="phone"
              type="text"
              label="شماره همراه"
            />
            <ErrorMessage
              errors={errors}
              name={"phone"}
              render={({ message }) => (
                <span className="text-red-400 text-[10px] md:text-xs  block max-w-64">
                  {message}
                </span>
              )}
            />
          </div>
          <div className="space-y-1">
            <DatePicker
              className="bg-gradient-to-l from-gray-300 to-gray-100"
              arrowStyle={{
                display: "none",
              }}
              animations={[
                transition({
                  from: 35,
                  transition:
                    "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                }),
              ]}
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

          <div className="space-y-1">
            <Input
              register={register("password")}
              name="password"
              type="password"
              label="رمز عبور"
            />
            <ErrorMessage
              errors={errors}
              name={"password"}
              render={({ message }) => (
                <span className="text-red-400 text-[10px] md:text-xs  block max-w-64">
                  {message}
                </span>
              )}
            />
          </div>

          <div className="space-y-1">
            <Input
              register={register("confirmPassword")}
              name="confirm-password"
              type="password"
              label="تکرار رمز عبور"
            />
            <ErrorMessage
              errors={errors}
              name={"confirmPassword"}
              render={({ message }) => (
                <span className="text-red-400 text-[10px] md:text-xs  block max-w-64">
                  {message}
                </span>
              )}
            />
          </div>

          <div className="flex justify-center mt-4">
            <button
              disabled={loading}
              type="submit"
              className="bg-[#240750] text-white px-6 py-2 rounded-md "
            >
              ثبت نام
            </button>
          </div>
        </form>
        <div className="mt-8 text-sm">
          <span className="ml-1 text-gray-500">حساب دارید؟</span>
          <Link className="text-[#240750] text-base" to="/signin">
            ورود
          </Link>
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex-center -z-10">
        <Link className="text-center mx-auto text-xs text-blue-800" to="/">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </>
  );
}
