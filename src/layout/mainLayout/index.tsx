import { useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainFooter from "../../components/footer";
import MainHeader from "../../components/header";
import { useCart } from "../../hooks/useCart";

export default function MainLayout() {
  const cartData = useCart((state) => state.data);
  const getCartData = useCart((state) => state.getData);
  const location = useLocation();

  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  useEffect(() => {
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
