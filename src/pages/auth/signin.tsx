import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { InferType } from "yup";
import Image from "../../assets/image/signin.webp";
import Input from "../../components/input";
import { UserSignInSchema } from "../../schemas/auth";
import { Link } from "react-router-dom";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InferType<typeof UserSignInSchema>>({
    mode: "all",
    resolver: yupResolver(UserSignInSchema),
  });

  // handlers
  const onSubmit: SubmitHandler<InferType<typeof UserSignInSchema>> = (
    values
  ) => {
    console.log(values);
  };

  console.log("error", errors);
  return (
    <div className="flex items-center justify-center w-full bg-black h-screen px-8">
      <div className="z-20 w-full md:w-1/2 bg-gradient-to-r from-gray-300 to-gray-100 py-16 px-4 lg:px-8 shadow-2xl rounded-lg shadow-[#240750] grid grid-cols-1 lg:grid-cols-2 gap-x-4">
        <div className="hidden lg:flex items-center justify-center order-2">
          <img src={Image} alt="Image" className="m-auto shrink-0" />
        </div>
        <div>
          <h1 className="text-center my-4 text-2xl font-bold text-[#240750]">
            ورود
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto space-y-2"
          >
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
                  <span className="text-red-400 text-xs md:text-sm block">
                    {message}
                  </span>
                )}
              />
            </div>

            <div className="space-y-1">
              <Input
                register={register("password")}
                name="password"
                type="text"
                label="رمز عبور"
              />
              <ErrorMessage
                errors={errors}
                name={"password"}
                render={({ message }) => (
                  <span className="text-red-400 text-xs md:text-sm block">
                    {message}
                  </span>
                )}
              />
            </div>

            <div className="flex justify-center mt-4">
              <button
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
        </div>
      </div>
    </div>
  );
}
