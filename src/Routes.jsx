import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import ItalianCultureCorner from "pages/italian-culture-corner";
import MenuExperience from "pages/menu-experience";
import ContactLocation from "pages/contact-location";
import OurStoryUniverse from "pages/our-story-universe";
import NotFound from "pages/NotFound";
import ReservationExperience from "pages/reservation-experience";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/italian-culture-corner" element={<ItalianCultureCorner />} />
        <Route path="/menu-experience" element={<MenuExperience />} />
        <Route path="/contact-location" element={<ContactLocation />} />
        <Route path="/our-story-universe" element={<OurStoryUniverse />} />
        <Route path="/reservation-experience" element={<ReservationExperience />} />
      
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;