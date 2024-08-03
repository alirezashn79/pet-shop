import { Eye, EyeOff } from "lucide-react";
import { ComponentPropsWithRef, useState } from "react";

interface IInputProps {
  name: string;
  label: string;
  type: "password" | "text";
  register: ComponentPropsWithRef<"input">;
  autoFocus?: boolean;
  isDirty?: boolean;
}
export default function Input({
  name,
  type,
  label,
  register,
  autoFocus,
  isDirty,
}: IInputProps) {
  const [typeState, setTypeState] = useState(type);
  return (
    <div className="relative z-0 w-full  group">
      {name === "phone" && (
        <div
          className="absolute left-0 top-0 bottom-0 flex-center text-sm -translate-y-px"
          style={{ direction: "ltr" }}
        >
          +98
        </div>
      )}
      {type === "password" && isDirty && (
        <div
          onClick={() => {
            typeState === "password"
              ? setTypeState("text")
              : setTypeState("password");
          }}
          className="absolute z-20 left-0 top-0 bottom-0 flex-center text-sm -translate-y-px cursor-pointer"
        >
          {typeState === "password" ? (
            <Eye className="h-5 w-5 text-indigo-700" />
          ) : (
            <EyeOff className="h-5 w-5 text-indigo-900" />
          )}
        </div>
      )}
      <input
        autoFocus={autoFocus}
        autoComplete="false"
        type={typeState}
        name={name}
        id={name}
        {...register}
        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-gray-800"
        dir={name === "phone" ? "ltr" : "rtl"}
        placeholder=" "
        style={{ paddingLeft: name === "phone" ? "2rem" : "0px" }}
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-xs md:text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
}
