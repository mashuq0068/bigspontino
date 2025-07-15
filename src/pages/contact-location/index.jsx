import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import LocationMap from './components/LocationMap';
import ContactMethods from './components/ContactMethods';
import VisitInformation from './components/VisitInformation';
import TeamContacts from './components/TeamContacts';

const ContactLocation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 lg:pt-20">
        <ContactHero />
        <LocationMap />
        <ContactMethods />
        <VisitInformation />
        <TeamContacts />
      </main>
      
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-playfair text-2xl font-bold mb-4">Bigspontino</h3>
              <p className="text-primary-foreground/80 mb-4">
                Authentic Italian Soul in the Heart of Berlin
              </p>
              <p className="text-sm text-primary-foreground/60">
                Kastanienallee 42, 10119 Berlin, Germany
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Contact</h4>
              <div className="space-y-2 text-sm">
                <p>Reservations: +49 30 1234 5678</p>
                <p>Events: +49 30 1234 5679</p>
                <p>info@bigspontino.de</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <div className="space-y-1 text-sm text-primary-foreground/80">
                <p>Mon-Thu: 12:00 - 23:00</p>
                <p>Fri-Sat: 12:00 - 24:00</p>
                <p>Sunday: 11:00 - 22:00</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Bigspontino. All rights reserved. | Made with ❤️ in Berlin
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactLocation;