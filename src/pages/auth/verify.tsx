import { Info, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth/useAuth";

export default function VerifyNumber() {
  const [otp, setOtp] = useState("");

  const loading = useAuth((state) => state.loading);
  const verify = useAuth((state) => state.verify);

  const phone = sessionStorage.getItem("phone");
  const navigate = useNavigate();

  const otpChangeHandler = (otp: string) => {
    setOtp(otp);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    verify({ code: otp, navigate });
  };

  useEffect(() => {
    if (!phone) navigate("/signin");
    document.title = "پت شاپ | تایید شماره همراه";
  }, []);

  return (
    <div className="col-span-2" data-aos="zoom-in">
      <h1 className="text-center  text-xl font-bold text-[#240750]">
        کد تایید
      </h1>
      <p className="text-center text-xs text-gray-700 py-4 flex items-center gap-x-2 justify-center">
        <Info className="w-3 h-3" />
        لطفا کد ارسال شده به تلفن همراه خود را وارد نمایید
      </p>
      <form
        onSubmit={submitHandler}
        className="max-w-md mx-auto space-y-2 flex flex-col gap-y-4 justify-center items-center"
      >
        <div className="flex-center gap-4 p-2 rounded-md border border-[#240750] bg-gray-200 cursor-not-allowed ">
          <input
            type="text"
            disabled
            value={phone || undefined}
            className="bg-transparent text-left cursor-not-allowed"
          />
          <Phone className="h-4 w-4" />
        </div>
        <OTPInput
          value={otp}
          onChange={otpChangeHandler}
          shouldAutoFocus={true}
          renderSeparator={<span> - </span>}
          numInputs={4}
          inputType="number"
          containerStyle={{
            direction: "ltr",
            width: "fit-content",
            margin: "0 auto",
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
          renderInput={(props) => <input required {...props} />}
        />
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
