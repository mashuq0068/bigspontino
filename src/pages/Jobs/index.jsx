import Image from 'components/AppImage';
import React, { useEffect, useState } from 'react';

const Jobs = () => {
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) setLanguage(storedLang);
  }, []);

  const content = {
    EN: {
      title: '💼 Lavori (Jobs)',
      headline: 'Andiamo!',
      paragraph:
        'You want to become part of the Famiglia and work in the happiest day bar in Hamburg? Then get in touch with our team – we look forward to receiving your applications!',
      button: 'Apply Now',
    },
    DE: {
      title: '💼 Lavori (Jobs)',
      headline: 'Andiamo!',
      paragraph:
        'Ihr wollt Teil der Famiglia werden und in der fröhlichsten Tagesbar Hamburgs arbeiten? Dann nehmt Kontakt mit unserem Team auf – wir freuen uns auf eure Bewerbungen!',
      button: 'Jetzt Bewerben',
    },
  };

  const t = content[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#fff7ef] py-20 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80"
          alt="Team working together"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white"></div>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair text-primary font-bold  mb-4">
          {t.title}
        </h2>

        <h3 className="text-3xl md:text-4xl text-golden font-dancing mb-6 animate-pulse">
          {t.headline}
        </h3>

        <p className=" text-lg md:text-xl mb-10 leading-relaxed px-4">
          {t.paragraph}
        </p>

        <a
          href="mailto:mail@bigspuntino.de"
          className="inline-block px-8 py-4 rounded-full bg-conversion-gold hover:bg-conversion-gold/90 text-white text-lg font-semibold shadow-lg transition-all"
        >
          {t.button}
        </a>
      </div>
    </section>
  );
};

export default Jobs;
