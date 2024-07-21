import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { Info } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { InferType } from "yup";
import client from "../../app/client";
import Input from "../../components/input";
import { changePasswordSchema } from "../../schemas/auth";
import logout from "../../utils/logout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,

    formState: { errors, dirtyFields },
  } = useForm<InferType<typeof changePasswordSchema>>({
    resolver: yupResolver(changePasswordSchema),
  });

  const onSubmit: SubmitHandler<
    InferType<typeof changePasswordSchema>
  > = async (values) => {
    setLoading(true);
    toast.promise(
      client
        .post("/change-password/", {
          new_password: values.newPassword,
          current_password: values.prevPassword,
        })
        .then((res) => {
          if (res.status === 202) {
            logout();
            reset();
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
        success: "رمز تغییر پیدا کرد، مجددا ورود کنید",
      }
    );
    //   reset();

    //   logout();
  };

  return (
    <div className="col-span-2 lg:w-64" data-aos="zoom-in">
      <h1 className="text-center  text-xl font-bold text-[#240750]">
        تغییر رمز عبور
      </h1>
      <p className="text-center text-xs text-gray-700 py-4 flex items-center gap-x-2 justify-center">
        <Info className="w-3 h-3" />
        ابتدا رمز ورود قبلی و سپس جدید را وارد کنید
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto space-y-2">
        <div className="space-y-1">
          <Input
            register={register("prevPassword")}
            isDirty={dirtyFields.prevPassword}
            name="prevPassword"
            type="password"
            label="رمز عبور قبلی"
          />
          <ErrorMessage
            errors={errors}
            name={"prevPassword"}
            render={({ message }) => (
              <span className="text-red-400 text-[10px] md:text-xs  block">
                {message}
              </span>
            )}
          />
        </div>

        <div className="space-y-1">
          <Input
            isDirty={dirtyFields.newPassword}
            register={register("newPassword")}
            name="newPassword"
            type="password"
            label="رمز عبور جدید"
          />
          <ErrorMessage
            errors={errors}
            name={"newPassword"}
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
            isDirty={dirtyFields.confirmPassword}
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
