import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ChefJourneySection from './components/ChefJourneySection';


const OurStoryUniverse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Story Universe - Bigspontino | Authentic Italian Heritage & Culture</title>
        <meta 
          name="description" 
          content="Discover the authentic Italian heritage behind Bigspontino. From Chef Marco's journey through Italy to our passionate team and community impact, explore the stories that make us more than just a restaurant." 
        />
        <meta name="keywords" content="Italian restaurant story, authentic Italian cuisine, chef Marco journey, Italian culture, traditional cooking, community impact, Italian heritage" />
        <meta property="og:title" content="Our Story Universe - Bigspontino | Authentic Italian Heritage" />
        <meta property="og:description" content="Discover the authentic Italian heritage behind Bigspontino. From Chef Marco's journey through Italy to our passionate team and community impact." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/our-story-universe" />
      </Helmet>

      <div className="min-h-screen bg-background">
        
        <main>
          <HeroSection />
          <ChefJourneySection />
          
        </main>

      </div>
    </>
  );
};

export default OurStoryUniverse;