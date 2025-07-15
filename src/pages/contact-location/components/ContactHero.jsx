import React, { useEffect, useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ContactHero = () => {
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  const content = {
    EN: {
      title: 'Benvenuti alla Nostra Casa',
      subtitle: 'Welcome to Our Home',
      description: 'Where authentic Italian hospitality meets the heart of the city. Find us, contact us, and let us welcome you into our famiglia.',
      openingHours: 'Open Today: 17:00 - 23:00',
      phoneNumber: '+49 30 1234 5678'
    },
    DE: {
      title: 'Willkommen in Unserem Zuhause',
      subtitle: 'Herzlich Willkommen',
      description: 'Wo authentische italienische Gastfreundschaft das Herz der Stadt trifft. Finden Sie uns, kontaktieren Sie uns und lassen Sie uns Sie in unserer Familie willkommen heißen.',
      openingHours: 'Heute geöffnet: 17:00 - 23:00',
      phoneNumber: '+49 30 1234 5678'
    },
    IT: {
      title: 'Benvenuti a Casa Nostra',
      subtitle: 'Benvenuti da Noi',
      description: 'Dove l\'autentica ospitalità italiana incontra il cuore della città. Trovaci, contattaci e lascia che ti diamo il benvenuto nella nostra famiglia.',
      openingHours: 'Aperto Oggi: 17:00 - 23:00',
      phoneNumber: '+49 30 1234 5678'
    }
  };

  const t = content[language] || content.EN;

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Bigspontino Restaurant Exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondary/70"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Icon name="MapPin" size={48} className="text-accent mr-4" />
          <div className="h-12 w-px bg-accent/50 mr-4"></div>
          <Icon name="Phone" size={48} className="text-accent" />
        </div>
        
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow-warm">
          {t.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
          {t.subtitle}
        </p>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          {t.description}
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center text-white/90">
            <Icon name="Clock" size={20} className="mr-2 text-accent" />
            <span className="font-medium">{t.openingHours}</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/30"></div>
          <div className="flex items-center text-white/90">
            <Icon name="Phone" size={20} className="mr-2 text-accent" />
            <span className="font-medium">{t.phoneNumber}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;