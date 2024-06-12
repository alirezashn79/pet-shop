import { Info, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { forgotPasswordSchema } from "../../schemas/auth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [disablePhone, setDisablePhone] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [disableOtp, setDisableOtp] = useState(false);

  const otpChangeHandler = async (otpCode: string) => {
    setOtp(otpCode);

    if (otpCode.length === 4) {
      setDisableOtp(true);
      await sendCode(otpCode);
    }
  };

  const sendCode = async (otpCode: string) => {
    console.log(otpCode);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (showOtp) {
      await sendCode(otp);
    } else {
      try {
        await forgotPasswordSchema.validate({ phone });
        setDisablePhone(true);
        toast.success("کد برای شما ارسال شد.");
        setShowOtp(true);
      } catch (error) {
        setPhoneError(error.message);
        return;
      }
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

          {showOtp && (
            <OTPInput
              value={otp}
              onChange={otpChangeHandler}
              renderSeparator={<span> - </span>}
              shouldAutoFocus={true}
              numInputs={4}
              inputType="number"
              containerStyle={{
                direction: "ltr",
                width: "fit-content",
                margin: "1rem 0  auto",
              }}
              inputStyle={{
                margin: "0 2px",
                padding: "1px",
                borderRadius: "4px",
                width: "2.5rem",
                height: "2.52rem",
                border: "2px solid #344c64",
                fontSize: "1.25rem",
                fontFamily: "Vazirmatn FD",
              }}
              renderInput={(props) => (
                <input required disabled={disableOtp} {...props} />
              )}
            />
          )}
          <div className="flex justify-center mt-4">
            <button
              disabled={phone.length !== 11 || (otp.length < 4 && showOtp)}
              type="submit"
              className="bg-[#240750] text-white px-6 py-2 rounded-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              ارسال
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
