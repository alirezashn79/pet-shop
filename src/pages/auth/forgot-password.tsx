import { Info, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import client from "../../app/client";
import { forgotPasswordSchema } from "../../schemas/auth";

export default function ForgotPassword() {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [disablePhone, setDisablePhone] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loadingToast = toast.loading("درحال بررسی شماره تلفن همراه");
    try {
      await forgotPasswordSchema.validate({ phone });
      setDisablePhone(true);
      await client.post("/forgot-password/", {
        phone_number: phone,
      });
      setIsSent(true);

      toast.success("لینک صفحه تغییر رمز عبور برای شما پیامک شد.");
    } catch (error) {
      setPhoneError(error.message);
      setDisablePhone(false);
      if (error.response) {
        toast.error(`${error.response.status}: ${error.response.data.message}`);
      }
    } finally {
      toast.dismiss(loadingToast);
    }
  };

  useEffect(() => {
    document.title = "پت شاپ | فراموشی رمز عبور";
  }, []);

  return (
    <>
      <div className="col-span-2" data-aos="zoom-in">
        <h1 className="text-center  text-xl font-bold text-[#240750]">
          فراموشی رمز عبور
        </h1>
        <p className="text-center text-xs text-gray-700 py-4 flex items-center gap-x-2 justify-center">
          <Info className="w-3 h-3" />
          لطفا شماره همراه خود را وارد کنید
        </p>
        <form
          onSubmit={submitHandler}
          className="max-w-md mx-auto flex flex-col justify-center items-center"
        >
          <div className="flex-center gap-4 p-2 rounded-md border border-[#240750] bg-white">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoFocus={true}
              disabled={disablePhone}
              type="number"
              className="bg-transparent text-left"
              placeholder="09123456789"
            />
            <Phone className="h-4 w-4" />
          </div>

          {phoneError && (
            <span className="text-red-400 text-[10px] md:text-xs mt-2 block">
              {phoneError}
            </span>
          )}

          <div className="flex justify-center mt-4">
            <button
              disabled={phone.length !== 11 || isSent}
              type="submit"
              className="bg-[#240750] text-white px-6 py-2 rounded-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSent ? (
                <span>
                  لینک صفحه تغییر رمز عبور برای شما پیامک شد.
                  <br /> میتوانید این صفحه را ببندید
                </span>
              ) : (
                <span>ارسال</span>
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="flex-center absolute bottom-4 left-0 right-0">
        <Link
          className="text-center mx-auto text-xs text-blue-800"
          to="/signin"
        >
          بازگشت به صفحه ورود
        </Link>
      </div>
    </>
  );
}
