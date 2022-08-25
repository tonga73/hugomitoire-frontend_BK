import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../commons/header/Header";
import Footer from "../commons/footer/Footer";

export default function MainLayout() {
  return (
    <div className="grid grid-cols-12 gap-y-3 items-start mx-auto dark:bg-neutral-900">
      <Header />
      <Outlet />
      <div className="z-10 col-span-12">
        <Footer />
      </div>
    </div>
  );
}
