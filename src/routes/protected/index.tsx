import Cookies from "js-cookie";
import { useJwt } from "react-jwt";
import { Navigate, Outlet } from "react-router-dom";

export default function Protected() {
  const token = Cookies.get("JWT_Token_Access");
  const { isExpired } = useJwt(token as string);

  return isExpired || !token ? <Outlet /> : <Navigate to="/" />;
}
