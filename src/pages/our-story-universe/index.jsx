import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurStoryUniverse = () => {
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const lang = localStorage.getItem('language');
    if (lang === 'DE' || lang === 'EN') setLanguage(lang);
    AOS.init({ duration: 1000});
  }, []);

  const content = {
    EN: {
      title: '📖 La Storia',
      subtitle: 'Siamo aperti',
      body: `Since the summer of 2025, the Big Spuntino has been the second Italian centerpiece of host Dario Pittarello. Dario opened the “Ristorante Pittarello” at Mühlenkamp in Hamburg-Winterhude back in 2015 and has been serving his guests with fine, authentic Italian cuisine ever since. But that wasn’t enough – Dario couldn’t miss the chance to visit the neighboring shop and has been welcoming old and new guests in a warm and lively day bar with spettacoloso snacks and drinks from Italian cuisine.

The bright red interior combined with classic wood and brass elements that blend harmoniously with each other offers guests the ideal place to go for the “big times” and the alldry long: from boozy brunches on the weekends, to daily lunches to early aperitivo/dinner hour.

Here, the Mediterranean joie de vivre of good enjoyment and good drinks as well as the celebration of being together can be perfectly lived. Here’s to the “big times” with the small snacks!`,
    },
    DE: {
      title: '📖 La Storia',
      subtitle: 'Seit Sommer 2025',
      body: `Seit Sommer 2025 ist das Big Spuntino das zweite italienische Herzstück des Gastgebers Dario Pittarello. Bereits 2015 eröffnete Dario das „Ristorante Pittarello“ am Mühlenkamp in Hamburg-Winterhude und bewirtet seither seine Gäste mit feiner, authentischer italienischen Küche. Doch damit sollte es nicht genug sein – die Chance auf den Nachbarladen konnte sich Dario nicht entgehen lassen und begrüßt zusätzlich nun seither alte wie neue Gäste in einer herzlich-lebhaften Tagesbar mit spettacoloso Snacks und Drinks aus der italienischen Küche.

Das knallig rote Interieur kombiniert mit klassischen Holz- & Messing-Elementen, die harmonisch miteinander verschmelzen, bietet den Gästen die ideale Anlaufstelle für die „big times“ und das alldry long: von boozy Brunches an den Wochenenden, über daily Lunches bis hin zur earlier Aperitivo/Dinner-Hour.

Hier kann die mediterrane Lebensfreude am guten Genuss und guten Getränken sowie dem Feiern des Zusammenseins perfekt gelebt werden. Auf die „big times“ mit den kleinen Snacks!`,
    },
  };

  return (
    <section className="bg-[#f9f9f9] py-16 px-4 md:px-10 font-serif">
      <div className="max-w-3xl mx-auto" data-aos="fade-up">
        <h1 className="text-5xl font-bold mb-4 border-b-4 border-yellow-600 pb-2">
          {content[language].title}
        </h1>
        <h2 className="text-2xl text-yellow-700 italic mb-8" data-aos="fade-right">
          {content[language].subtitle}
        </h2>
        <p
          className="text-lg leading-relaxed whitespace-pre-line"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {content[language].body}
        </p>
      </div>
    </section>
  );
};

export default OurStoryUniverse;
