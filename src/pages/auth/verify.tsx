import { Info, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";

export default function VerifyNumber() {
  const [otp, setOtp] = useState("");
  const [disableOtp, setDisableOtp] = useState(false);

  const otpChangeHandler = (otp: string) => {
    setOtp(otp);

    if (otp.length === 4) {
      submitHandler();
      setDisableOtp(true);
    }
  };

  const submitHandler = () => {
    console.log("otp ===>", otp);
  };

  useEffect(() => {
    document.title = "پت شاپ | تایید شماره همراه";
  }, []);

  return (
    <>
      <div className="col-span-2">
        <h1 className="text-center  text-xl font-bold text-[#240750]">
          کد تایید
        </h1>
        <p className="text-center text-xs text-gray-700 py-4 flex items-center gap-x-2 justify-center">
          <Info className="w-3 h-3" />
          لطفا کد ارسال شده به تلفن همراه خود را وارد نمایید
        </p>
        <form className="max-w-md mx-auto space-y-2 flex flex-col gap-y-4 justify-center items-center">
          <div className="flex-center gap-4 p-2 rounded-md border border-[#240750] bg-gray-200 cursor-not-allowed ">
            <input
              type="text"
              disabled
              value={"09123658965"}
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
            renderInput={(props) => (
              <input required disabled={disableOtp} {...props} />
            )}
          />
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-[#240750] text-white px-6 py-2 rounded-md "
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
