import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layout/authLayout";
import MainLayout from "../layout/mainLayout";
import AboutUs from "../pages/about-us";
import ChangePassword from "../pages/auth/change-password";
import EditProfile from "../pages/auth/change-profile";
import ForgotPassword from "../pages/auth/forgot-password";
import ResetPassword from "../pages/auth/reset-password";
import SignIn from "../pages/auth/signin";
import Signup from "../pages/auth/signup";
import VerifyNumber from "../pages/auth/verify";
import EditPhone from "../pages/auth/verify-phone";
import Blogs from "../pages/blogs";
import BlogPage from "../pages/blogs/single-blog";
import CartPage from "../pages/cart";
import ConfirmationOrder from "../pages/confirm-order";
import ContactUs from "../pages/contact-us";
import FoodPage from "../pages/food";
import HomePage from "../pages/home";
import Lig from "../pages/lig";
import NotFound from "../pages/not-found";
import AccessoriesPage from "../pages/products/accessories";
import AccessoryPage from "../pages/products/accessory";
import SingleAccessoryPage from "../pages/products/accessory-single";
import Foods from "../pages/products/foods";
import Services from "../pages/services";
import Private from "./private";
import Protected from "./protected";

export default function PageRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/lig" element={<Lig />} />
        <Route path="/shop">
          <Route path="foods">
            <Route path="" element={<Foods />} />
            <Route path=":foodId" element={<FoodPage />} />
          </Route>
          <Route path="accessories">
            <Route path="" element={<AccessoriesPage />} />
            <Route path=":id" element={<AccessoryPage />} />
            <Route path="product/:id" element={<SingleAccessoryPage />} />
          </Route>

          <Route path="cart" element={<CartPage />} />
          <Route element={<Private />}>
            <Route path="confirmation-order" element={<ConfirmationOrder />} />
          </Route>
        </Route>

        <Route path="/services" element={<Services />} />

        <Route path="/blogs">
          <Route path="" element={<Blogs />} />
          <Route path=":id" element={<BlogPage />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route element={<Protected />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/verify" element={<VerifyNumber />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route element={<Private />}>
          <Route path="/reset-password/:id" element={<ResetPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/edit-phone" element={<EditPhone />} />
        </Route>
      </Route>
    </Routes>
  );
}
