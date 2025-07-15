import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import IngredientCarousel from './components/IngredientCarousel';
import TodaysInspiration from './components/TodaysInspiration';

import Footer from './components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <IngredientCarousel />
        <TodaysInspiration />
      
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;