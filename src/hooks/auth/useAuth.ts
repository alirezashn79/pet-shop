import toast from "react-hot-toast";
import { create } from "zustand";
import client from "../../app/client";
import { NavigateFunction } from "react-router-dom";
import Cookies from "js-cookie";
import logout from "../../utils/logout";

interface IUseAuth {
  isAuth: boolean;
  loading: boolean;
  signUp: ({
    values,
    navigate,
  }: {
    values: any;
    navigate: NavigateFunction;
  }) => Promise<void>;
  verify: ({
    code,
    navigate,
  }: {
    code: string;
    navigate: NavigateFunction;
  }) => Promise<void>;
  login: ({
    phone,
    password,
    navigate,
  }: {
    phone: string;
    password: string;
    navigate: NavigateFunction;
  }) => Promise<void>;
  verifyEditPhone: ({
    code,
    navigate,
  }: {
    code: string;
    navigate: NavigateFunction;
  }) => Promise<void>;
}

export const useAuth = create<IUseAuth>((set) => ({
  isAuth: false,
  loading: false,
  signUp: async ({ values, navigate }) => {
    try {
      set({ loading: true });
      await client.post("", {
        full_name: values.name,
        phone_number: 0 + values.phone,
        password: values.password,
        date_birth: values.date,
      });
    } catch (error) {
      if (error.response && error.response.status === 302) {
        toast.success("کد تایید برای شما ارسال شد");
        sessionStorage.setItem("phone", values.phone);

        navigate("/verify", {
          replace: true,
        });
      } else if (error.response && error.response.status === 400) {
        toast.error("این شماره قبلا ثبت نام شده است");
      }
    } finally {
      set({ loading: false });
    }
  },
  verify: async ({ code, navigate }) => {
    const loadingToast = toast.loading("درحال تایید کد، منتظر بمانید");
    try {
      set({ loading: true });
      const res = await client.post("/verify/", {
        phone_number: `0${sessionStorage.getItem("phone")}`,
        code,
      });

      sessionStorage.removeItem("phone");
      Cookies.set("JWT_Token_Access", res.data.JWT_Token_Access, {
        path: "/",
        secure: true,
        expires: 1,
      });
      Cookies.set("JWT_Token_Refresh", res.data.JWT_Token_Refresh, {
        path: "/",
        secure: true,
        expires: 7,
      });
      toast.success("ثبت نام با موفقیت انجام شد");
      navigate("/", {
        replace: true,
      });
    } catch (error) {
      toast.error("کد اشتباه است");
    } finally {
      set({ loading: false });
      toast.dismiss(loadingToast);
    }
  },
  login: async ({ phone, password }) => {
    const toastLoading = toast.loading("صبر کنید...");
    try {
      set({ loading: true });
      const res = await client.post("/login/", {
        phone_number: `0${phone}`,
        password,
      });

      toast.success("وارد شدید");
      Cookies.set("JWT_Token_Access", res.data.JWT_Token_Access, {
        path: "/",
        secure: true,
        expires: 1,
      });

      Cookies.set("JWT_Token_Refresh", res.data.JWT_Token_Refresh, {
        path: "/",
        secure: true,
        expires: 7,
      });
      location.replace("/");
    } catch (error) {
      if (error.response) {
        toast.error(
          `Error ${error.response.status}: ${error.response.data.message}`,
          {
            style: {
              direction: "ltr",
            },
          }
        );
      }
    } finally {
      set({ loading: false });
      toast.dismiss(toastLoading);
    }
  },
  verifyEditPhone: async ({ code, navigate }) => {
    const loadingToast = toast.loading("درحال تایید کد، منتظر بمانید");
    try {
      set({ loading: true });
      await client.post("/verify-phone/", {
        code,
      });

      toast.success("تغییر شماره با موفقیت انجام شد");
      toast.success("با شماره جدید وارد شوید.");
      logout();
      navigate("/signin", {
        replace: true,
      });
    } catch (error) {
      toast.error("کد اشتباه است");
    } finally {
      set({ loading: false });
      toast.dismiss(loadingToast);
    }
  },
}));
