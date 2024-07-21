import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { Info } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { InferType } from "yup";
import client from "../../app/client";
import Input from "../../components/input";
import { resetPasswordSchema } from "../../schemas/auth";
import Cookies from "js-cookie";
import { useState } from "react";

export default function ResetPassword() {
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InferType<typeof resetPasswordSchema>>({
    mode: "all",
    resolver: yupResolver(resetPasswordSchema),
  });

  const onSubmit: SubmitHandler<InferType<typeof resetPasswordSchema>> = async (
    values
  ) => {
    const toastLoading = toast.loading("در حال پردازش");
    try {
      setLoading(true);
      const res = await client.post(`/account/reset-pass/${params.id}/`, {
        password: values.password,
      });
    } catch (error) {
      if (error.response) {
        if (error.response.status === 301) {
          Cookies.remove("JWT_Token_Access");
          Cookies.remove("JWT_Token_Refresh");
          navigate("/signin", {
            replace: true,
          });
          return toast.success("رمز شما با موفقیت تغییر کرد");
        }
        toast.error(`${error.response.status}: ${error.response.data.message}`);
      }
    } finally {
      toast.dismiss(toastLoading);
      setLoading(false);
    }
  };

  return (
    <div className="col-span-2 lg:w-64" data-aos="zoom-in">
      <h1 className="text-center  text-xl font-bold text-[#240750]">
        بازنشانی رمز عبور
      </h1>
      <p className="text-center text-xs text-gray-700 py-4 flex items-center gap-x-2 justify-center">
        <Info className="w-3 h-3" />
        رمز عبور جدید خود را وارد کنید
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto space-y-2">
        <div className="space-y-1">
          <Input
            register={register("password")}
            name="password"
            type="password"
            label="رمز عبور جدید"
          />
          <ErrorMessage
            errors={errors}
            name={"password"}
            render={({ message }) => (
              <span className="text-red-400 text-[10px] md:text-xs  block">
                {message}
              </span>
            )}
          />
        </div>

        <div className="space-y-1">
          <Input
            register={register("confirmPassword")}
            name="confirmPassword"
            type="password"
            label="تکرار رمز عبور جدید"
          />
          <ErrorMessage
            errors={errors}
            name={"confirmPassword"}
            render={({ message }) => (
              <span className="text-red-400 text-[10px] md:text-xs  block">
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
            ارسال
          </button>
        </div>
      </form>
    </div>
  );
}
