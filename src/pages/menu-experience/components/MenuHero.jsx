import React, { useState, useEffect } from 'react';
import { Flower2 } from 'lucide-react'; // or use your Icon component if needed

const MenuHero = () => {
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) setLanguage(storedLang);
  }, []);

  const content = {
    EN: {
      title: "A Tavola",
      paragraphs: [
        `The menu at Big Spuntino is a warm tribute to Italy’s culinary heritage. From insalata, caprese and octopus to the crispiest foccacia, our menu offers an exquisite selection of classic spuntini (*ital. “snacks”).`,
        `Of course, this also applies to the dolci: from the traditional crème the mascarpone to the fluffy light maritozzi, the Big Spuntino sweetens everyday life with the churros all italiana – Neapolitan doughnut sticks, served warm and perfect for dipping in melted chocolate with special toppings.`,
        `In addition to the culinary experience, classic Italian cosmopolitan cocktails and wines from North and South can be tasted. The essence of an Italian summer is brought to life with a sparkling spritz, while the special aromas of our signature cocktail Spuntino 75 are the perfect prelude to an indulgent evening.`,
      ],
    },
    DE: {
      title: "A Tavola",
      paragraphs: [
        `Die Speisekarte des Big Spuntino ist ein herzliche Hommage an Italiens kulinarisches Erbe. Von Insalata Caprese und Pulpo bis hin zu den knusprigsten Foccacia bietet unsere Speisekarte eine exquisite Auswahl an klassischen Spuntini (*ital. „Snacks“).`,
        `Dies natürlich auch bei den Dolci: Von der traditionellen Creme die Mascarpone bis hin zu den fluffig leichten Maritozzi versüßt das Big Spuntino den Alltag mit den Churros all italiana – neapolitanische Doughnut-Stangen, warm serviert und perfekt zum Eintauchen in geschmolzene Schokolade mit special Toppings.`,
        `Ergänzend zum kulinarischen Erlebnis können klassische italienisch-kosmopolitische Cocktails und Weine aus Nord und Süd verköstigt werden. Die Essenz eines italienischen Sommers wird mit einem spritzigen Spritz zum Leben erweckt, während die besonderen Aromen unseres Signature-Cocktails Spuntino 75 der perfekten Auftakt für einen genussvollen Abend sind.`,
      ],
    },
  };

  const { title, paragraphs } = content[language];

  return (
    <section className="relative bg-[#fff7ef] py-20 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Decorative Icon */}
        <div className="mb-4 flex justify-center">
          <Flower2 className="text-[#b8860b] w-10 h-10 animate-fade-in" />
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-playfair text-primary font-bold mb-8">
          {title}
        </h2>

        {/* Paragraphs */}
        <div className="space-y-6 text-base md:text-lg  font-light leading-relaxed text-justify md:text-center">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHero;
