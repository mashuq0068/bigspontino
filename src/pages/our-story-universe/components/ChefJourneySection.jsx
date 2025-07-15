import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ChefJourneySection = () => {
  const [activeChapter, setActiveChapter] = useState(0);

  const journeyChapters = [
    {
      id: 0,
      title: "The Beginning",
      year: "1995",
      location: "Bologna, Italy",
      image: "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800",
      story: `At the age of 16, Marco Bigspontino stepped into his first professional kitchen in Bologna. Under the watchful eye of Nonna Giulia, he learned that cooking wasn't just about technique—it was about preserving stories, honoring traditions, and creating moments of pure joy.\n\nThose early mornings, kneading pasta dough while listening to tales of pre-war Italy, shaped not just his culinary skills but his understanding of food as cultural heritage.`,
      highlight: "First lesson: \'La cucina è il cuore della famiglia\' - The kitchen is the heart of the family"
    },
    {
      id: 1,
      title: "The Apprenticeship",
      year: "1998-2003",
      location: "Tuscany & Sicily",
      image: "https://images.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
      story: `Five transformative years across Italy's most celebrated regions. From the olive groves of Tuscany to the fishing villages of Sicily, Marco immersed himself in regional specialties, learning directly from local masters.\n\nEach region taught him something unique: Tuscany's respect for simplicity, Sicily's bold flavors, Emilia-Romagna's pasta perfection. But most importantly, he learned that authenticity cannot be rushed or replicated—it must be lived.`,
      highlight: "Mastered 47 traditional recipes passed down through generations"
    },
    {
      id: 2,
      title: "The Vision",
      year: "2008",
      location: "Rome",
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: `In a small trattoria near the Pantheon, Marco had his epiphany. Watching families gather around simple yet perfect dishes, he realized his calling: to become a cultural ambassador, bringing authentic Italian hospitality to the world.\n\nThat evening, over a bottle of Chianti with his mentor, the concept of Bigspontino was born—not just a restaurant, but a bridge between cultures, a place where Italian soul meets global appreciation.`,
      highlight: "The moment Bigspontino transformed from dream to destiny"
    },
    {
      id: 3,
      title: "The Journey Continues",
      year: "2012-Present",
      location: "Germany",
      image: "https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg?auto=compress&cs=tinysrgb&w=800",
      story: `Bringing authentic Italian culture to Germany required more than just recipes—it demanded understanding, respect, and adaptation without compromise. Marco spent months building relationships with local suppliers while maintaining connections to Italian producers.\n\nToday, Bigspontino stands as a testament to the power of authentic storytelling, where every dish served carries the weight of tradition and the promise of genuine Italian hospitality.`,
      highlight: "Over 50,000 guests welcomed into the Bigspontino family"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            Chef Marco's Journey
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From apprentice to cultural ambassador, discover the path that led to Bigspontino's creation
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {journeyChapters.map((chapter, index) => (
            <button
              key={chapter.id}
              onClick={() => setActiveChapter(index)}
              className={`px-6 py-3 rounded-full font-montserrat font-medium transition-warm ${
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
                src={journeyChapters[activeChapter].image}
                alt={`Chef Marco's journey - ${journeyChapters[activeChapter].title}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="MapPin" size={16} />
                  <span className="text-sm font-medium">{journeyChapters[activeChapter].location}</span>
                </div>
                <h3 className="font-playfair text-2xl font-bold">{journeyChapters[activeChapter].title}</h3>
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
                    {journeyChapters[activeChapter].title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{journeyChapters[activeChapter].year}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  {journeyChapters[activeChapter].story.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                  <div className="flex items-start space-x-3">
                    <Icon name="Quote" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <p className="font-medium text-accent-foreground italic">
                      {journeyChapters[activeChapter].highlight}
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
            <span>Previous</span>
          </button>

          <div className="flex space-x-2">
            {journeyChapters.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-warm ${
                  index === activeChapter ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveChapter(Math.min(journeyChapters.length - 1, activeChapter + 1))}
            disabled={activeChapter === journeyChapters.length - 1}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-warm ${
              activeChapter === journeyChapters.length - 1
                ? 'text-muted-foreground cursor-not-allowed'
                : 'text-primary hover:bg-primary/10'
            }`}
          >
            <span>Next</span>
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChefJourneySection;