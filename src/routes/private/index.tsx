import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import client from "../../app/client";

export default function Private() {
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
    let token = Cookies.get("JWT_Token_Access");
    if (!token) {
      client
        .post("/accounts/api/refresh/", {
          refresh: Cookies.get("JWT_Token_Refresh"),
        })
        .then((rs) => {
          Cookies.set("JWT_Token_Access", rs.data.access, {
            path: "/",
            secure: true,
            expires: 1,
          });
        })
        .catch(() => {
          setIsAuth(false);
        });
    }
  }, [isAuth]);

  return isAuth ? <Outlet /> : <Navigate to="/signin" />;
}
