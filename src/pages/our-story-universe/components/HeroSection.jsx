import React, { useEffect, useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  const content = {
    EN: {
      title: 'Our Story',
      subtitle: 'Where Tradition Meets Passion',
      paragraph1:
        'From the sun-kissed hills of Tuscany to your table, our journey is one of passion, tradition, and an unwavering commitment to authentic Italian culinary artistry.',
      paragraph2:
        'Every dish tells a story. Every ingredient carries the soul of Italy. Welcome to the Bigspontino family.',
      cta1: 'Discover Our Heritage',
      cta2: 'Watch Our Story',
    },
    DE: {
      title: 'Unsere Geschichte',
      subtitle: 'Wo Tradition auf Leidenschaft trifft',
      paragraph1:
        'Von den sonnenverwöhnten Hügeln der Toskana bis zu Ihrem Tisch – unsere Reise ist geprägt von Leidenschaft, Tradition und einem unerschütterlichen Bekenntnis zur authentischen italienischen Kochkunst.',
      paragraph2:
        'Jedes Gericht erzählt eine Geschichte. Jede Zutat trägt die Seele Italiens. Willkommen in der Bigspontino-Familie.',
      cta1: 'Unsere Herkunft Entdecken',
      cta2: 'Unsere Geschichte Ansehen',
    },
  };

  const t = content[language] || content.EN;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          alt="Italian countryside with rolling hills and vineyards"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-primary mb-6 text-shadow-warm">
            {t.title}
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="font-dancing text-2xl lg:text-3xl text-secondary mb-8">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-6">
            {t.paragraph1}
          </p>
          <p className="text-base lg:text-lg text-muted-foreground">
            {t.paragraph2}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            iconName="Heart"
            iconPosition="left"
            className="bg-conversion-gold hover:bg-conversion-gold/90  shadow-warm-lg"
          >
            {t.cta1}
          </Button>
          <Button
            variant="outline"
            size="lg"
            iconName="Play"
            iconPosition="left"
            className=" border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {t.cta2}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
