import Cookies from "js-cookie";
import { useJwt } from "react-jwt";
import { Navigate, Outlet } from "react-router-dom";

export default function Private() {
  const token = Cookies.get("{3f419310-fb4c-4fdc-902d-80be10f64d62}");

  console.log(token);
  return <Outlet />;
}
