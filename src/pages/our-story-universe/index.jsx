import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ChefJourneySection from './components/ChefJourneySection';
import SupplierTestimonials from './components/SupplierTestimonials';
import PhilosophySection from './components/PhilosophySection';
import TeamSection from './components/TeamSection';
import CommunityImpactSection from './components/CommunityImpactSection';

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
        <Header />
        
        <main>
          <HeroSection />
          <ChefJourneySection />
          <SupplierTestimonials />
          <PhilosophySection />
          <TeamSection />
          <CommunityImpactSection />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-playfair text-2xl font-bold mb-4">Bigspontino</h3>
                <p className="text-primary-foreground/80 mb-4">
                  Authentic Italian soul meets culinary artistry. Every dish tells a story of heritage, 
                  passion, and the timeless traditions that make Italian cuisine extraordinary.
                </p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-warm cursor-pointer">
                    <span className="text-sm">f</span>
                  </div>
                  <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-warm cursor-pointer">
                    <span className="text-sm">@</span>
                  </div>
                  <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-warm cursor-pointer">
                    <span className="text-sm">in</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-playfair text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-primary-foreground/80">
                  <li><a href="/homepage" className="hover:text-primary-foreground transition-warm">Home</a></li>
                  <li><a href="/menu-experience" className="hover:text-primary-foreground transition-warm">Menu</a></li>
                  <li><a href="/reservation-experience" className="hover:text-primary-foreground transition-warm">Reservations</a></li>
                  <li><a href="/italian-culture-corner" className="hover:text-primary-foreground transition-warm">Italian Culture</a></li>
                  <li><a href="/contact-location" className="hover:text-primary-foreground transition-warm">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-playfair text-lg font-bold mb-4">Contact Info</h4>
                <div className="space-y-2 text-primary-foreground/80">
                  <p>Musterstraße 123</p>
                  <p>10115 Berlin, Germany</p>
                  <p>+49 30 12345678</p>
                  <p>info@bigspontino.de</p>
                </div>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
              <p>&copy; {new Date().getFullYear()} Bigspontino. All rights reserved. | Crafted with passion for authentic Italian culture.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default OurStoryUniverse;