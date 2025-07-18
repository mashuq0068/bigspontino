import React from "react";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import IngredientCarousel from "./components/IngredientCarousel";
import TodaysInspiration from "./components/TodaysInspiration";

import Footer from "./components/Footer";
import ReservationPopup from "components/ReservationPopup";
import OpeningHoursPill from "components/OpeningHoursPill";

const Homepage = () => {
  return (
    <div className=" h-max bg-background">

      <main>
        <ReservationPopup />
        <HeroSection />
        <IngredientCarousel />
        <TodaysInspiration />
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;
