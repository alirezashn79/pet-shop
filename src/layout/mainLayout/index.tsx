import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainFooter from "../../components/footer";
import MainHeader from "../../components/header";
import useCategory from "../../hooks/useCategory";
import useFood from "../../hooks/useFood";
import useOverlay from "../../hooks/useOverlay";
import { useCart } from "../../hooks/useCart";

export default function MainLayout() {
  const getCategories = useCategory((state) => state.getData);
  const getAllFoods = useFood((state) => state.getAllFoods);
  const showOverlay = useOverlay((state) => state.showOverlay);
  const getCartData = useCart((state) => state.getData);
  const cartData = useCart((state) => state.data);

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
    getCartData();
    getCategories();
    getAllFoods({ current: 1 });
  }, []);

  console.log("cartData", cartData);

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
