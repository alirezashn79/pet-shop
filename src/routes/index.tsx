import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layout/authLayout";
import MainLayout from "../layout/mainLayout";
import AboutUs from "../pages/about-us";
import ChangePassword from "../pages/auth/change-password";
import ForgotPassword from "../pages/auth/forgot-password";
import ResetPassword from "../pages/auth/reset-password";
import SignIn from "../pages/auth/signin";
import Signup from "../pages/auth/signup";
import VerifyNumber from "../pages/auth/verify";
import Blogs from "../pages/blogs";
import BlogPage from "../pages/blogs/single-blog";
import ContactUs from "../pages/contact-us";
import FoodPage from "../pages/food";
import HomePage from "../pages/home";
import Lig from "../pages/lig";
import NotFound from "../pages/not-found";
import AccessoriesPage from "../pages/products/accessories";
import AccessoryPage from "../pages/products/accessory";
import SingleAccessoryPage from "../pages/products/accessory-single";
import Foods from "../pages/products/cat-products";
import Services from "../pages/services";

export default function PageRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/lig" element={<Lig />} />
        <Route path="/shop">
          {/* <Route path="all" element={<AllProducts />} /> */}
          <Route path="foods">
            <Route path="" element={<Foods />} />
            <Route path=":foodId" element={<FoodPage />} />
          </Route>
          {/* <Route path="dog" element={<DogProducts />} /> */}
          <Route path="accessories">
            <Route path="" element={<AccessoriesPage />} />
            <Route path=":id" element={<AccessoryPage />} />
            <Route path="product/:id" element={<SingleAccessoryPage />} />
          </Route>

          {/* <Route path="cart" element={<CartPage />} /> */}
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verify" element={<VerifyNumber />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id" element={<ResetPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Route>
    </Routes>
  );
}
