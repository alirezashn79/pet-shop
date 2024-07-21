import { Info, Phone } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import client from "../../app/client";
import { useAuth } from "../../hooks/auth/useAuth";

export default function EditPhone() {
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const loading = useAuth((state) => state.loading);
  const verifyEditPhone = useAuth((state) => state.verifyEditPhone);

  const navigate = useNavigate();

  const otpChangeHandler = (otp: string) => {
    setOtp(otp);
  };

  const sendPhoneNumber = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (phone.length == 0) return;

    try {
      await client.post("/change-phone/", {
        new_phone_number: phone,
      });
    } catch (error) {
      if (error.response && error.response.status === 302) {
        setShowOtp(true);
        toast.success("کد برای شما ارسال شد");
      }
    }
  };

  const sendCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    verifyEditPhone({ code: otp, navigate });
  };

  return (
    <div className="col-span-2" data-aos="zoom-in">
      <h1 className="text-center  text-xl font-bold text-[#240750]">
        {showOtp ? "کد تایید" : "ویرایش شماره همراه"}
      </h1>
      <p className="text-center text-xs text-gray-700 py-4 flex items-center gap-x-2 justify-center">
        <Info className="w-3 h-3" />
        لطفا {showOtp && "کد ارسال شده به"} تلفن همراه جدید خود را وارد نمایید
      </p>
      <form
        onSubmit={showOtp ? sendCode : sendPhoneNumber}
        className="max-w-md mx-auto space-y-2 flex flex-col gap-y-4 justify-center items-center"
      >
        <div className="flex-center gap-4 p-2 rounded-md border border-[#240750] bg-gray-200">
          <input
            autoFocus
            disabled={showOtp}
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-transparent text-left"
            placeholder="09123456789"
          />
          <Phone className="h-4 w-4" />
        </div>
        {showOtp && (
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
        )}
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
