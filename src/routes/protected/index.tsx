import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

export default function Protected() {
  const token = Cookies.get("JWT_Token_Access");

  return !token ? <Outlet /> : <Navigate to="/" />;
}
