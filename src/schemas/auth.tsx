import { object, ref, string } from "yup";

export const UserSchema = object({
  name: string()
    .required("نام و نام خانوادگی الزامی است")
    .min(6, "نام حداقل باید 6 کاراکتر باشد"),
  phone: string()
    .matches(/((0?9)|(\+?989))\d{9}/g, "شماره معتبر نیست")
    .min(10, "شماره کمتر از 10 رقم است")
    .max(10, "شماره بیشتر از 10 رقم است")
    .required(),
  password: string()
    .matches(
      /^$|^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g,
      "رمز عبور باید حداقل شامل یک حرف بزرگ و کوچک انگلیسی، عدد و یک کاراکتر خاص باشد"
    )
    .required("رمز عبور الزامی است"),
  confirmPassword: string().oneOf(
    [ref("password")],
    "با رمز عبور مطابقت ندارد"
  ),
});

export const UserSignInSchema = object({
  phone: string()
    .matches(/((0?9)|(\+?989))\d{9}/g, "شماره معتبر نیست")
    .min(10, "شماره کمتر از 10 رقم است")
    .max(10, "شماره بیشتر از 10 رقم است")
    .required(),
  password: string()
    .matches(
      /^$|^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "رمز عبور باید حداقل شامل یک حرف بزرگ و کوچک انگلیسی، عدد و یک کاراکتر خاص باشد"
    )
    .required("رمز عبور الزامی است"),
});

export const changePasswordSchema = object({
  password: string()
    .matches(
      /^$|^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "رمز عبور باید حداقل شامل یک حرف بزرگ و کوچک انگلیسی، عدد و یک کاراکتر خاص باشد"
    )
    .required("رمز عبور الزامی است"),
  confirmPassword: string().oneOf(
    [ref("password")],
    "با رمز عبور مطابقت ندارد"
  ),
});

export const forgotPasswordSchema = object({
  phone: string()
    .matches(/((0?9)|(\+?989))\d{9}/g, "شماره معتبر نیست")
    .max(11, "شماره معتبر نیست"),
});
