import React, { useEffect, useState } from 'react';

const EventsSection = () => {
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) setLanguage(storedLang);
  }, []);

  const content = {
    EN: {
      title: "🎊 Events (Eventi)",
      intro: `and there is always a reason to celebrate. The Big Spuntino lives Italian hospitality and coming together – and not only in the day bar itself, but also in its own private or business premises. Get in touch with our team to discuss your tailor-made events for the most special moments of pleasure.`,
      extra: `The Big Spuntino is already working diligently on spettacolo event series – at aperitif hour, dinner time, and of course, fantastico brunch. Soon to come – stay tuned.`,
      button: "Contact",
      vita: "La vita é bella...",
    },
    DE: {
      title: "🎊 Events (Eventi)",
      intro: `und es gibt immer einen Grund um zu feiern. Das Big Spuntino lebt die italienische Gastfreundschaft und das Zusammenkommen – und das nicht nur in der Tagesbar selbst, sondern auch in eigenen privaten oder geschäftlichen Räumlichkeiten. Nehmen Sie Kontakt mit unserem Team auf, um Ihre maßgeschneiderten Veranstaltungen für die besondersten Genussmomente zu besprechen.`,
      extra: `Das Big Spuntino arbeitet bereits fleißig an einer spektakulären Eventreihe – zur Aperitifstunde, zur Dinnerzeit und natürlich beim fantastischen Brunch. Bald verfügbar – bleiben Sie dran.`,
      button: "Kontakt",
      vita: "La vita é bella…",
    },
  };

  const t = content[language];

  return (
    <section className="bg-[#fff7ef] py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative accent on top */}
        <div className="mb-4">
          <div className="w-10 h-10 rounded-full mx-auto bg-conversion-gold animate-pulse shadow-md" />
        </div>

        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-8">
          {t.title}
        </h2>

        <div className=" text-base md:text-lg leading-relaxed space-y-6">
          <p className="italic font-semibold text-lg">{t.vita}</p>
          <p>{t.intro}</p>
          <p className="italic ">{t.extra}</p>
        </div>

        <div className="mt-10">
          <a
            href="mailto:info@bigspuntino.com"
            className="inline-block px-6 py-3 rounded-full bg-conversion-gold hover:bg-conversion-gold/90 text-white font-semibold text-sm tracking-wide shadow-lg transition-all"
          >
            {t.button}
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
