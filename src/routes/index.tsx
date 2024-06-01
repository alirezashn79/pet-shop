import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import Lig from "../pages/lig";
import SingleProduct from "../pages/product";
import MainLayout from "../layout/mainLayout";

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
      </Route>
    </Routes>
  );
}
