import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ChefJourneySection = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) setLanguage(storedLang);
  }, []);

  const journeyChapters = {
    EN: [
      {
        id: 0,
        title: 'The Beginning',
        year: '1995',
        location: 'Bologna, Italy',
        image:
          'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800',
        story: `At the age of 16, Marco Bigspontino stepped into his first professional kitchen in Bologna. Under the watchful eye of Nonna Giulia, he learned that cooking wasn't just about technique—it was about preserving stories, honoring traditions, and creating moments of pure joy.\n\nThose early mornings, kneading pasta dough while listening to tales of pre-war Italy, shaped not just his culinary skills but his understanding of food as cultural heritage.`,
        highlight: "First lesson: 'La cucina è il cuore della famiglia' - The kitchen is the heart of the family",
      },
      {
        id: 1,
        title: 'The Apprenticeship',
        year: '1998-2003',
        location: 'Tuscany & Sicily',
        image: 'https://images.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
        story: `Five transformative years across Italy's most celebrated regions. From the olive groves of Tuscany to the fishing villages of Sicily, Marco immersed himself in regional specialties, learning directly from local masters.\n\nEach region taught him something unique: Tuscany's respect for simplicity, Sicily's bold flavors, Emilia-Romagna's pasta perfection. But most importantly, he learned that authenticity cannot be rushed or replicated—it must be lived.`,
        highlight: 'Mastered 47 traditional recipes passed down through generations',
      },
      {
        id: 2,
        title: 'The Vision',
        year: '2008',
        location: 'Rome',
        image:
          'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        story: `In a small trattoria near the Pantheon, Marco had his epiphany. Watching families gather around simple yet perfect dishes, he realized his calling: to become a cultural ambassador, bringing authentic Italian hospitality to the world.\n\nThat evening, over a bottle of Chianti with his mentor, the concept of Bigspontino was born—not just a restaurant, but a bridge between cultures, a place where Italian soul meets global appreciation.`,
        highlight: 'The moment Bigspontino transformed from dream to destiny',
      },
      {
        id: 3,
        title: 'The Journey Continues',
        year: '2012-Present',
        location: 'Germany',
        image:
          'https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg?auto=compress&cs=tinysrgb&w=800',
        story: `Bringing authentic Italian culture to Germany required more than just recipes—it demanded understanding, respect, and adaptation without compromise. Marco spent months building relationships with local suppliers while maintaining connections to Italian producers.\n\nToday, Bigspontino stands as a testament to the power of authentic storytelling, where every dish served carries the weight of tradition and the promise of genuine Italian hospitality.`,
        highlight: 'Over 50,000 guests welcomed into the Bigspontino family',
      },
    ],
    DE: [
      {
        id: 0,
        title: 'Der Anfang',
        year: '1995',
        location: 'Bologna, Italien',
        image:
          'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800',
        story: `Mit 16 Jahren betrat Marco Bigspontino seine erste professionelle Küche in Bologna. Unter dem wachsamen Auge von Nonna Giulia lernte er, dass Kochen nicht nur Technik ist – es geht darum, Geschichten zu bewahren, Traditionen zu ehren und Momente voller Freude zu schaffen.\n\nDiese frühen Morgenstunden, in denen er Pastateig knetete und Geschichten aus dem Vorkriegs-Italien hörte, prägten nicht nur seine Kochkünste, sondern auch sein Verständnis von Essen als kulturelles Erbe.`,
        highlight: "Erste Lektion: 'La cucina è il cuore della famiglia' – Die Küche ist das Herz der Familie",
      },
      {
        id: 1,
        title: 'Die Lehrjahre',
        year: '1998-2003',
        location: 'Toskana & Sizilien',
        image: 'https://images.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
        story: `Fünf prägende Jahre in den bekanntesten Regionen Italiens. Von den Olivenhainen der Toskana bis zu den Fischerdörfern Siziliens vertiefte sich Marco in regionale Spezialitäten und lernte direkt von lokalen Meistern.\n\nJede Region lehrte ihn etwas Besonderes: Toskanas Liebe zur Einfachheit, Siziliens kräftige Aromen, Emilia-Romagnas Pastaperfektion. Vor allem aber verstand er: Authentizität lässt sich nicht beschleunigen oder kopieren – sie muss gelebt werden.`,
        highlight: '47 traditionelle Rezepte gemeistert, die über Generationen weitergegeben wurden',
      },
      {
        id: 2,
        title: 'Die Vision',
        year: '2008',
        location: 'Rom',
        image:
          'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        story: `In einer kleinen Trattoria nahe dem Pantheon hatte Marco seine Eingebung. Beim Anblick von Familien, die sich um einfache, aber perfekte Gerichte versammelten, erkannte er seine Berufung: authentische italienische Gastfreundschaft in die Welt zu tragen.\n\nAn diesem Abend, bei einer Flasche Chianti mit seinem Mentor, wurde Bigspontino geboren – nicht nur ein Restaurant, sondern eine Brücke zwischen Kulturen, ein Ort, an dem italienische Seele auf weltweite Wertschätzung trifft.`,
        highlight: 'Der Moment, in dem Bigspontino vom Traum zur Bestimmung wurde',
      },
      {
        id: 3,
        title: 'Die Reise Geht Weiter',
        year: '2012–Heute',
        location: 'Deutschland',
        image:
          'https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg?auto=compress&cs=tinysrgb&w=800',
        story: `Die authentische italienische Kultur nach Deutschland zu bringen, bedeutete mehr als nur Rezepte – es erforderte Verständnis, Respekt und Anpassung ohne Kompromisse. Marco verbrachte Monate damit, Beziehungen zu lokalen Lieferanten aufzubauen, während er gleichzeitig den Kontakt zu italienischen Produzenten pflegte.\n\nHeute steht Bigspontino als Zeugnis für die Kraft authentischer Geschichten, in denen jedes servierte Gericht die Tradition und die echte italienische Gastfreundschaft widerspiegelt.`,
        highlight: 'Über 50.000 Gäste wurden bereits in die Bigspontino-Familie aufgenommen',
      },
    ],
  };

  const chapters = journeyChapters[language] || journeyChapters.EN;

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            {language === 'DE' ? 'Marcos Reise' : "Chef Marco's Journey"}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'DE'
              ? 'Vom Lehrling zum Kulturbotschafter – entdecken Sie den Weg zur Entstehung von Bigspontino'
              : "From apprentice to cultural ambassador, discover the path that led to Bigspontino's creation"}
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {chapters.map((chapter, index) => (
            <button
              key={chapter.id}
              onClick={() => setActiveChapter(index)}
              className={`px-6 py-3 rounded-full  font-medium transition-warm ${
                activeChapter === index
                  ? 'bg-primary text-primary-foreground shadow-warm'
                  : 'bg-card text-card-foreground hover:bg-primary/10 border border-warm'
              }`}
            >
              {chapter.year}
            </button>
          ))}
        </div>

        {/* Active Chapter Content */}
        <div className="bg-card rounded-2xl shadow-warm-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <Image
                src={chapters[activeChapter].image}
                alt={`Chef Marco - ${chapters[activeChapter].title}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="MapPin" size={16} />
                  <span className="text-sm font-medium">{chapters[activeChapter].location}</span>
                </div>
                <h3 className="font-playfair text-2xl font-bold">{chapters[activeChapter].title}</h3>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Star" size={20} className="text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-bold text-primary">
                    {chapters[activeChapter].title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{chapters[activeChapter].year}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  {chapters[activeChapter].story.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                  <div className="flex items-start space-x-3">
                    <Icon name="Quote" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <p className="font-medium text-accent-foreground italic">
                      {chapters[activeChapter].highlight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => setActiveChapter(Math.max(0, activeChapter - 1))}
            disabled={activeChapter === 0}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-warm ${
              activeChapter === 0
                ? 'text-muted-foreground cursor-not-allowed'
                : 'text-primary hover:bg-primary/10'
            }`}
          >
            <Icon name="ChevronLeft" size={20} />
            <span>{language === 'DE' ? 'Zurück' : 'Previous'}</span>
          </button>

          <div className="flex space-x-2">
            {chapters.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-warm ${
                  index === activeChapter ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveChapter(Math.min(chapters.length - 1, activeChapter + 1))}
            disabled={activeChapter === chapters.length - 1}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-warm ${
              activeChapter === chapters.length - 1
                ? 'text-muted-foreground cursor-not-allowed'
                : 'text-primary hover:bg-primary/10'
            }`}
          >
            <span>{language === 'DE' ? 'Weiter' : 'Next'}</span>
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChefJourneySection;
