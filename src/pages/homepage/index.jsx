import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import IngredientCarousel from './components/IngredientCarousel';
import TodaysInspiration from './components/TodaysInspiration';
import SeasonalEvents from './components/SeasonalEvents';
import SocialProof from './components/SocialProof';
import CultureCornerPreview from './components/CultureCornerPreview';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <IngredientCarousel />
        <TodaysInspiration />
        <SeasonalEvents />
        <SocialProof />
        <CultureCornerPreview />
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;