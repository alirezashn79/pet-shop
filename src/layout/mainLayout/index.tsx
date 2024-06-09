import React, { useEffect } from "react";
import MainHeader from "../../components/header";
import { Outlet, useLocation } from "react-router-dom";
import MainFooter from "../../components/footer";

export default function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

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
