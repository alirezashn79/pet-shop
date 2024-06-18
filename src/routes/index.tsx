import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layout/authLayout";
import MainLayout from "../layout/mainLayout";
import AboutUs from "../pages/about-us";
import ForgotPassword from "../pages/auth/forgot-password";
import ResetPassword from "../pages/auth/reset-password";
import SignIn from "../pages/auth/signin";
import Signup from "../pages/auth/signup";
import VerifyNumber from "../pages/auth/verify";
import Blogs from "../pages/blogs";
import BlogPage from "../pages/blogs/single-blog";
import ContactUs from "../pages/contact-us";
import HomePage from "../pages/home";
import Lig from "../pages/lig";
import NotFound from "../pages/not-found";
import SingleProduct from "../pages/product";
import CatProducts from "../pages/products/cat-products";
import DogProducts from "../pages/products/dog-products";
import AccessoriesPage from "../pages/products/accessories";
import CaringService from "../pages/services/caring";
import CleaningService from "../pages/services/cleaning";
import CartPage from "../pages/cart";
import AllProducts from "../pages/products/all";

export default function PageRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/lig" element={<Lig />} />
        <Route path="/shop">
          <Route path="all" element={<AllProducts />} />
          <Route path="cat" element={<CatProducts />} />
          <Route path="dog" element={<DogProducts />} />
          <Route path="accessories" element={<AccessoriesPage />} />
          <Route path=":id" element={<SingleProduct />} />
          <Route path="cart" element={<CartPage />} />
        </Route>

        <Route path="/services">
          <Route path="cleaning" element={<CleaningService />} />
          <Route path="caring" element={<CaringService />} />
        </Route>

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
      </Route>
    </Routes>
  );
}
