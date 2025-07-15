import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';


const ContactLocation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 lg:pt-20">
        <ContactHero />
        <ContactMethods />

      </main>
      
    
    </div>
  );
};

export default ContactLocation;