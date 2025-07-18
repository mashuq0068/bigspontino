import LanguageToggle from "components/LanguageToogle";
import Header from "components/ui/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main>
      <Header />
      {/* Language Toggle Component */}
      {/* This component allows users to switch between languages */}
      <LanguageToggle />
      <div className=""></div>
      <Outlet />
    </main>
  );
};

export default MainLayout;
