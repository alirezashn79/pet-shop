import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layout/authLayout";
import MainLayout from "../layout/mainLayout";
import SignIn from "../pages/auth/signin";
import Signup from "../pages/auth/signup";
import VerifyNumber from "../pages/auth/verify";
import HomePage from "../pages/home";
import Lig from "../pages/lig";
import SingleProduct from "../pages/product";
import AboutUs from "../pages/about-us";
import ContactUs from "../pages/contact-us";
import ResetPassword from "../pages/auth/reset-password";
import ForgotPassword from "../pages/auth/forgot-password";

export default function PageRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/lig" element={<Lig />} />
        <Route path="/products">
          <Route path="" element={<HomePage />} />
          <Route path=":id" element={<SingleProduct />} />
        </Route>

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verify" element={<VerifyNumber />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
}
