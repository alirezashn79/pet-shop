import React from "react";
import MainHeader from "../../components/header";
import { Outlet } from "react-router-dom";
import MainFooter from "../../components/footer";

export default function MainLayout() {
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
