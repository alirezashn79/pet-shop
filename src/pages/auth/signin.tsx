import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { InferType } from "yup";
import Image from "../../assets/image/signin.webp";
import Input from "../../components/input";
import { useAuth } from "../../hooks/auth/useAuth";
import { UserSignInSchema } from "../../schemas/auth";

export default function Signup() {
  const loading = useAuth((state) => state.loading);
  const login = useAuth((state) => state.login);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<InferType<typeof UserSignInSchema>>({
    resolver: yupResolver(UserSignInSchema),
  });

  // handlers
  const onSubmit: SubmitHandler<InferType<typeof UserSignInSchema>> = async (
    values
  ) => {
    await login({ ...values, navigate });
  };

  useEffect(() => {
    document.title = "پت شاپ رز | " + "ورود";
  }, []);

  return (
    <>
      <div
        className="hidden lg:flex items-center justify-center order-2"
        data-aos="zoom-in"
      >
        <img
          src={Image}
          alt="Image"
          className="m-auto shrink-0  w-64 object-fit"
        />
      </div>
      <div data-aos="zoom-in">
        <h1 className="text-center my-4 text-2xl font-bold text-[#240750]">
          ورود
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto space-y-2"
        >
          <div className="space-y-1">
            <Input
              autoFocus={true}
              register={register("phone")}
              name="phone"
              type="text"
              label="شماره همراه"
            />
            <ErrorMessage
              errors={errors}
              name={"phone"}
              render={({ message }) => (
                <span className="text-red-400 text-xs md:text-sm block lg:max-w-72">
                  {message}
                </span>
              )}
            />
          </div>

          <div className="space-y-1">
            <Input
              register={register("password")}
              isDirty={dirtyFields.password}
              name="password"
              type="password"
              label="رمز عبور"
            />
            <ErrorMessage
              errors={errors}
              name={"password"}
              render={({ message }) => (
                <span className="text-red-400 text-xs md:text-sm block lg:max-w-72">
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
              ورود
            </button>
          </div>
        </form>
        <div className="mt-8 text-sm">
          <span className="ml-2 text-gray-500">حساب کاربری ندارید؟</span>
          <Link className="text-[#240750] text-base" to="/signup">
            ثبت نام
          </Link>
        </div>
        <div className="mt-2 text-sm">
          <span className="ml-2 text-gray-500">
            رمز عبور خود را فراموش کرده اید؟
          </span>
          <Link className="text-[#240750] text-base" to="/forgot-password">
            فراموشی رمز عبور
          </Link>
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex-center">
        <Link className="text-center mx-auto text-xs text-blue-800" to="/">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </>
  );
}
