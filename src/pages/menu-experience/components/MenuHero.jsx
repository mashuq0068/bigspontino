import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const MenuHero = () => {
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  const content = {
    EN: {
      title: 'Culinary Journey',
      description:
        'Where every dish tells a story of Italian heritage,\n crafted with passion and served with soul',
      cta1: 'Explore Our Menu',
      cta2: 'Reserve Your Table',
    },
    DE: {
      title: 'Kulinarische Reise',
      description:
        'Wo jedes Gericht eine Geschichte über italienisches Erbe erzählt,\n mit Leidenschaft gestaltet und mit Seele serviert',
      cta1: 'Unsere Speisekarte Entdecken',
      cta2: 'Tisch Reservieren',
    },
  };

  const t = content[language] || content.EN;

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Elegant Italian restaurant interior with warm lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow-warm">
          {t.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed whitespace-pre-line">
          {t.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="default"
            size="lg"
            iconName="ChefHat"
            iconPosition="left"
            className="bg-conversion-gold hover:bg-conversion-gold/90 font-montserrat shadow-warm-lg"
          >
            {t.cta1}
          </Button>
          <Button
            variant="outline"
            size="lg"
            iconName="Calendar"
            iconPosition="left"
            className="border-white  hover:bg-white hover:text-primary font-montserrat"
          >
            {t.cta2}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuHero;