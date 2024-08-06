import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainFooter from "../../components/footer";
import MainHeader from "../../components/header";
import { useAboutUs } from "../../hooks/useAboutUs";
import useBlog from "../../hooks/useBlog";
import useCart from "../../hooks/useCart";
import useCategory from "../../hooks/useCategory";
import { useContactUs } from "../../hooks/useContactUs";
import useFood from "../../hooks/useFood";
import useOverlay from "../../hooks/useOverlay";
import useProduct from "../../hooks/useProduct";

export default function MainLayout() {
  const getCategories = useCategory((state) => state.getData);
  const getAllFoods = useFood((state) => state.getAllFoods);
  const showOverlay = useOverlay((state) => state.showOverlay);
  const getDiscountData = useProduct((state) => state.getDiscountData);
  const getMostVisitData = useProduct((state) => state.getMostVisitData);
  const getAllAccessories = useProduct((state) => state.getAllAccessories);
  const getBlogsData = useBlog((state) => state.getData);
  const getAboutUs = useAboutUs((state) => state.getData);
  const getContactUs = useContactUs((state) => state.getData);
  const getFoodCart = useCart((state) => state.getFoods);
  const getProductCart = useCart((state) => state.getProducts);

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
    getContactUs();
    getCategories();
    getFoodCart();
    getProductCart();
    getDiscountData();
    getMostVisitData();
    getAllAccessories({ current: 1 });
    getAllFoods({ current: 1 });
    getBlogsData({ current: 1 });
    getAboutUs();
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
