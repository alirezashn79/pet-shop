import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainFooter from "../../components/footer";
import MainHeader from "../../components/header";
import { useCart } from "../../hooks/useCart";
import useOverlay from "../../hooks/useOverlay";
import useProduct from "../../hooks/useProduct";
import useCategory from "../../hooks/useCategory";

export default function MainLayout() {
  const getCategories = useCategory((state) => state.getData);
  const showOverlay = useOverlay((state) => state.showOverlay);
  const location = useLocation();

  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  useEffect(() => {
    showOverlay
      ? document.body.classList.add("lock-body-scroll")
      : document.body.classList.remove("lock-body-scroll");
  }, [showOverlay]);

  useEffect(() => {
    // getProductData();
    // getCartData();
    getCategories();
  }, []);

  return (
    <>
      <MainHeader />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <MainFooter />
    </>
  );
}
