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
      title: '📍 Contatto (Contact & Opening Hours)',
      description:
        'The Big Spuntino is a classic day bar where the Spuntini can be tasted all day long.',
      address: 'Mühlenkamp 8, 22303 Hamburg',
      phone: '040 / 69 45 68 28',
      email: 'mail@bigspuntino.de',
      website: 'bigspuntino.de',
      opening: 'Opening Hours',
      hours: [
        { day: 'Wed–Fri', time: '11:00 – 23:00' },
        { day: 'Sat', time: '10:00 – 23:00' },
        { day: 'Sun', time: '10:00 – 17:00' },
      ],
    },
    DE: {
      title: '📍 Contatto (Kontakt & Öffnungszeiten)',
      description:
        'Das Big Spuntino ist eine klassische Tagesbar, in denen die Spuntini ganztags verköstigt werden können.',
      address: 'Mühlenkamp 8, 22303 Hamburg',
      phone: '040 / 69 45 68 28',
      email: 'mail@bigspuntino.de',
      website: 'bigspuntino.de',
      opening: 'Öffnungszeiten',
      hours: [
        { day: 'Mi–Fr', time: '11:00 – 23:00' },
        { day: 'Sa', time: '10:00 – 23:00' },
        { day: 'So', time: '10:00 – 17:00' },
      ],
    },
  };

  const t = content[language] || content.EN;

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Big Spuntino Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
        <h1 className=" text-4xl md:text-5xl font-bold mb-4">
          {t.title}
        </h1>

        <p className="text-lg md:text-xl mb-6">{t.description}</p>

       
      </div>
    </section>
  );
};

export default ContactHero;
