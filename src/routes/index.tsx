import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import Lig from "../pages/lig";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/lig" element={<Lig />} />
    </Routes>
  );
}
