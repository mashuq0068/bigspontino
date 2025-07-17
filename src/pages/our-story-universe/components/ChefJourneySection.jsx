import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ChefJourneySection = () => {
   const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) setLanguage(storedLang);
  }, []);

  const historyContent = {
    EN: {
      title: 'Our History',
      subtitle: 'From traditional restaurant to vibrant day bar',
      chapters: [
        {
          year: '2015',
          title: 'Ristorante Pittarello',
          location: 'Hamburg-Winterhude',
          image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
          content: 'Dario opened the "Ristorante Pittarello" at Mühlenkamp in Hamburg-Winterhude, serving guests with fine, authentic Italian cuisine.',
          highlight: 'The foundation of Italian culinary excellence in Hamburg'
        },
        {
          year: 'Summer 2025',
          title: 'Big Spuntino',
          location: 'Hamburg',
          image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          content: 'The second Italian centerpiece was born - a warm and lively day bar with spectacular snacks and drinks from Italian cuisine, featuring a bold red interior with wood and brass elements.',
          highlight: 'Where Mediterranean joie de vivre meets Hamburg'
        }
      ]
    },
    DE: {
      title: 'Unsere Geschichte',
      subtitle: 'Vom traditionellen Restaurant zur lebendigen Tagesbar',
      chapters: [
        {
          year: '2015',
          title: 'Ristorante Pittarello',
          location: 'Hamburg-Winterhude',
          image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
          content: 'Dario eröffnete das "Ristorante Pittarello" am Mühlenkamp in Hamburg-Winterhude und bewirtete Gäste mit feiner, authentischer italienischer Küche.',
          highlight: 'Das Fundament italienischer Kochkunst in Hamburg'
        },
        {
          year: 'Sommer 2025',
          title: 'Big Spuntino',
          location: 'Hamburg',
          image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          content: 'Das zweite italienische Herzstück entstand - eine herzlich-lebendige Tagesbar mit spektakulären Snacks und Drinks aus der italienischen Küche, mit knallrotem Interieur und Holz-Messing-Elementen.',
          highlight: 'Wo mediterrane Lebensfreude auf Hamburg trifft'
        }
      ]
    }
  };

  const t = historyContent[language] || historyContent.EN;

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 h-full w-0.5 bg-primary/20 transform -translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-16 lg:space-y-24">
            {t.chapters.map((chapter, index) => (
              <div 
                key={index}
                className={`relative flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-8 lg:gap-16`}
              >
                {/* Year marker */}
                <div className="lg:absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold shadow-warm-lg">
                    {chapter.year}
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'} mt-8 lg:mt-0`}>
                  <div className="bg-card rounded-2xl shadow-warm-lg p-6 lg:p-8 h-full">
                    <h3 className="font-playfair text-2xl font-bold text-primary mb-2">
                      {chapter.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <Icon name="MapPin" size={16} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {chapter.location}
                      </span>
                    </div>
                    <p className="text-foreground mb-4">
                      {chapter.content}
                    </p>
                    <div className="bg-accent/10 border-l-4 border-accent p-3 rounded-r-lg">
                      <p className="text-sm text-accent-foreground italic">
                        {chapter.highlight}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-warm-lg aspect-video">
                    <Image
                      src={chapter.image}
                      alt={`${chapter.title} - ${chapter.location}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefJourneySection;
