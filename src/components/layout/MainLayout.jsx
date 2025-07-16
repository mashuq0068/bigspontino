import Header from "components/ui/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main>
      
        <Header />
      <div className="">
      </div>
      <Outlet />
    </main>
  );
};

export default MainLayout;
