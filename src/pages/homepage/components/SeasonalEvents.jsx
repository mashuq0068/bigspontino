import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SeasonalEvents = () => {
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'EN';
    setCurrentLanguage(savedLanguage);
  }, []);

  const getCurrentSeason = () => {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'autumn';
    return 'winter';
  };

  const seasonalEvents = {
    spring: {
      EN: {
        title: "Spring Awakening Experience",
        subtitle: "Fresh Beginnings",
        description: "Celebrate the renewal of spring with fresh asparagus from Veneto, early peas from Tuscany, and delicate spring herbs in our seasonal tasting menu.",
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        dates: "March 20 - May 31",
        price: "€65 per person",
        highlights: [
          "7-course spring tasting menu",
          "Wine pairing with Italian spring wines",
          "Seasonal ingredient presentation"
        ]
      },
      DE: {
        title: "Frühlings-Erwachen Erlebnis",
        subtitle: "Frische Anfänge",
        description: "Feiern Sie die Erneuerung des Frühlings mit frischem Spargel aus Venetien, frühen Erbsen aus der Toskana und zarten Frühlingskräutern in unserem saisonalen Degustationsmenü.",
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        dates: "20. März - 31. Mai",
        price: "€65 pro Person",
        highlights: [
          "7-Gänge Frühlings-Degustationsmenü",
          "Weinbegleitung mit italienischen Frühlingsweinen",
          "Saisonale Zutaten-Präsentation"
        ]
      }
    },
    summer: {
      EN: {
        title: "Mediterranean Summer Nights",
        subtitle: "Al Fresco Dining",
        description: "Experience the magic of Italian summer with outdoor dining, fresh seafood from the Adriatic, and sun-ripened tomatoes in our garden terrace.",
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        dates: "June 1 - August 31",
        price: "€58 per person",
        highlights: [
          "Outdoor terrace dining",
          "Fresh Adriatic seafood specialties",
          "Live Italian music evenings"
        ]
      },
      DE: {
        title: "Mediterrane Sommernächte",
        subtitle: "Al Fresco Dining",
        description: "Erleben Sie die Magie des italienischen Sommers mit Outdoor-Dining, frischen Meeresfrüchten aus der Adria und sonnengereiften Tomaten auf unserer Gartenterrasse.",
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        dates: "1. Juni - 31. August",
        price: "€58 pro Person",
        highlights: [
          "Terrassen-Dining im Freien",
          "Frische Adria-Meeresfrüchte-Spezialitäten",
          "Live italienische Musik-Abende"
        ]
      }
    },
    autumn: {
      EN: {
        title: "Autumn Truffle Experience",
        subtitle: "Harvest Celebration",
        description: "Indulge in the luxury of white truffles from Alba, paired with rich risottos and aged wines during the most celebrated season in Italian cuisine.",
        image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg",
        dates: "September 1 - November 30",
        price: "€85 per person",
        highlights: [
          "Fresh white truffles from Alba",
          "Harvest-inspired menu",
          "Premium wine selection"
        ]
      },
      DE: {
        title: "Herbst-Trüffel Erlebnis",
        subtitle: "Ernte-Feier",
        description: "Genießen Sie den Luxus weißer Trüffel aus Alba, gepaart mit reichhaltigen Risottos und gereiften Weinen während der gefeiertsten Saison der italienischen Küche.",
        image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg",
        dates: "1. September - 30. November",
        price: "€85 pro Person",
        highlights: [
          "Frische weiße Trüffel aus Alba",
          "Ernte-inspiriertes Menü",
          "Premium Weinauswahl"
        ]
      }
    },
    winter: {
      EN: {
        title: "Winter Comfort & Celebration",
        subtitle: "Festive Warmth",
        description: "Warm your soul with hearty winter dishes, festive celebrations, and the cozy atmosphere of Italian winter traditions.",
        image: "https://images.pexels.com/photos/4253285/pexels-photo-4253285.jpeg",
        dates: "December 1 - February 28",
        price: "€72 per person",
        highlights: [
          "Hearty winter specialties",
          "Festive holiday menus",
          "Cozy fireplace dining"
        ]
      },
      DE: {
        title: "Winter-Komfort & Feier",
        subtitle: "Festliche Wärme",
        description: "Wärmen Sie Ihre Seele mit herzhaften Wintergerichten, festlichen Feiern und der gemütlichen Atmosphäre italienischer Wintertraditionen.",
        image: "https://images.pexels.com/photos/4253285/pexels-photo-4253285.jpeg",
        dates: "1. Dezember - 28. Februar",
        price: "€72 pro Person",
        highlights: [
          "Herzhafte Winter-Spezialitäten",
          "Festliche Feiertagsmenüs",
          "Gemütliches Kamin-Dining"
        ]
      }
    }
  };

  const currentSeason = getCurrentSeason();
  const currentEvent = seasonalEvents[currentSeason][currentLanguage];

  const additionalEvents = [
    {
      EN: {
        title: "Wine Harvest Celebration",
        description: "Join us for an exclusive wine tasting featuring this year\'s harvest from our partner vineyards.",
        date: "October 15, 2024",
        price: "€45",
        icon: "Wine"
      },
      DE: {
        title: "Weinlese-Feier",
        description: "Begleiten Sie uns zu einer exklusiven Weinverkostung mit der diesjährigen Ernte unserer Partner-Weingüter.",
        date: "15. Oktober 2024",
        price: "€45",
        icon: "Wine"
      }
    },
    {
      EN: {
        title: "Pasta Making Workshop",
        description: "Learn the art of handmade pasta from our Italian chef in an intimate cooking class.",
        date: "Every Saturday",
        price: "€35",
        icon: "ChefHat"
      },
      DE: {
        title: "Pasta-Workshop",
        description: "Lernen Sie die Kunst der handgemachten Pasta von unserem italienischen Koch in einem intimen Kochkurs.",
        date: "Jeden Samstag",
        price: "€35",
        icon: "ChefHat"
      }
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-primary mb-4">
            {currentLanguage === 'EN' ? 'Seasonal Experiences' : 'Saisonale Erlebnisse'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {currentLanguage === 'EN' ?'Celebrate the changing seasons with specially curated experiences that honor Italian culinary traditions.' :'Feiern Sie die wechselnden Jahreszeiten mit speziell kuratierten Erlebnissen, die italienische Kochtraditionen ehren.'
            }
          </p>
        </div>

        {/* Featured Seasonal Event */}
        <div className="mb-16">
          <div className="bg-background rounded-2xl shadow-warm-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-accent px-3 py-1 rounded-full text-sm font-medium">
                    {currentEvent.subtitle}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 lg:p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="Calendar" size={16} className="text-accent" />
                  <span className="text-sm text-muted-foreground">{currentEvent.dates}</span>
                </div>

                <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-primary mb-4">
                  {currentEvent.title}
                </h3>

                <p className="text-foreground leading-relaxed mb-6">
                  {currentEvent.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">
                    {currentLanguage === 'EN' ? 'Experience Highlights' : 'Erlebnis-Highlights'}
                  </h4>
                  <div className="space-y-2">
                    {currentEvent.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">{currentEvent.price}</span>
                  </div>
                  <Link to="/reservation-experience">
                    <Button
                      variant="default"
                      iconName="Calendar"
                      iconPosition="left"
                      className="bg-conversion-gold hover:bg-conversion-gold/90 font-montserrat"
                    >
                      {currentLanguage === 'EN' ? 'Book Experience' : 'Erlebnis Buchen'}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Events */}
        <div className="grid md:grid-cols-2 gap-6">
          {additionalEvents.map((event, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-warm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name={event[currentLanguage].icon} size={20} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-xl font-bold text-primary mb-2">
                    {event[currentLanguage].title}
                  </h4>
                  <p className="text-foreground text-sm leading-relaxed mb-3">
                    {event[currentLanguage].description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1 mb-1">
                        <Icon name="Calendar" size={14} />
                        <span>{event[currentLanguage].date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Euro" size={14} />
                        <span>{event[currentLanguage].price}</span>
                      </div>
                    </div>
                    <Link to="/reservation-experience">
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="ArrowRight"
                        iconPosition="right"
                        className="font-montserrat"
                      >
                        {currentLanguage === 'EN' ? 'Book' : 'Buchen'}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalEvents;