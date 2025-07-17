import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import MenuExperience from "pages/menu-experience";
import ContactLocation from "pages/contact-location";
import OurStoryUniverse from "pages/our-story-universe";
import NotFound from "pages/NotFound";
import ReservationExperience from "pages/reservation-experience";
import Events from "pages/events";
import Impressions from "pages/Impressions";
import MainLayout from "components/layout/MainLayout";
import Jobs from "pages/Jobs";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} /> {/* default child route */}
            <Route path="homepage" element={<Homepage />} />
            <Route path="events" element={<Events />} />
            <Route path="menu-experience" element={<MenuExperience />} />
            <Route path="contact-location" element={<ContactLocation />} />
            <Route path="our-story-universe" element={<OurStoryUniverse />} />
            <Route
              path="reservation-experience"
              element={<ReservationExperience />}
            />
            <Route
              path="jobs"
              element={<Jobs />}
            />
            <Route path="impressions" element={<Impressions />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
