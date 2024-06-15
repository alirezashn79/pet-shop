import { useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainFooter from "../../components/footer";
import MainHeader from "../../components/header";
import { useCart } from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";

export default function MainLayout() {
  const getProductData = useProduct((state) => state.getData);
  const getCartData = useCart((state) => state.getData);
  const location = useLocation();

  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  useEffect(() => {
    getProductData();
    getCartData();
  }, []);

  return (
    <>
      <MainHeader />

      <main>
        <Outlet />
      </main>

      <MainFooter />
    </>
  );
}
