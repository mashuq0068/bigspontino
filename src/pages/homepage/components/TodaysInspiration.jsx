import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TodaysInspiration = () => {
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'EN';
    setCurrentLanguage(savedLanguage);
  }, []);

  const todaysSpecial = {
    EN: {
      title: "Today\'s Inspiration",
      subtitle: "Chef\'s Daily Special",
      dishName: "Osso Buco alla Milanese",
      description: `Slow-braised veal shanks in a rich saffron risotto, prepared with the traditional Milanese technique passed down through generations. Our chef sources the finest veal from sustainable farms in Lombardy.`,
      price: "€42",
      preparationTime: "45 minutes",
      servings: "Serves 1",
      ingredients: [
        "Lombardy veal shank",
        "Carnaroli rice from Piedmont",
        "Saffron from Abruzzo",
        "Gremolata with organic lemon zest"
      ],
      culturalContext: `This iconic Milanese dish represents the heart of Northern Italian cuisine. Traditionally served during Sunday family gatherings, it embodies the Italian philosophy of transforming simple ingredients into extraordinary experiences through patience and love.`,
      chefNote: "Today I\'m preparing this dish with saffron from my grandmother\'s trusted supplier in L\'Aquila. The secret is in the slow braising - never rush perfection.",
      availableUntil: "Available until 10:30 PM",
      reserveButton: "Reserve for This Dish",
      learnMoreButton: "Learn More About This Dish"
    },
    DE: {
      title: "Heutige Inspiration",
      subtitle: "Tagesspecial des Chefs",
      dishName: "Osso Buco alla Milanese",
      description: `Langsam geschmorte Kalbshaxen in einem reichhaltigen Safran-Risotto, zubereitet mit der traditionellen Mailänder Technik, die über Generationen weitergegeben wurde. Unser Chef bezieht das beste Kalbfleisch von nachhaltigen Farmen in der Lombardei.`,
      price: "€42",
      preparationTime: "45 Minuten",
      servings: "Für 1 Person",
      ingredients: [
        "Lombardei Kalbshaxe",
        "Carnaroli-Reis aus Piemont",
        "Safran aus den Abruzzen",
        "Gremolata mit Bio-Zitronenschale"
      ],
      culturalContext: `Dieses ikonische Mailänder Gericht repräsentiert das Herz der norditalienischen Küche. Traditionell bei sonntäglichen Familientreffen serviert, verkörpert es die italienische Philosophie, einfache Zutaten durch Geduld und Liebe in außergewöhnliche Erlebnisse zu verwandeln.`,
      chefNote: "Heute bereite ich dieses Gericht mit Safran von meinem Großmutters vertrautem Lieferanten in L\'Aquila zu. Das Geheimnis liegt im langsamen Schmoren - niemals die Perfektion hetzen.",
      availableUntil: "Verfügbar bis 22:30 Uhr",
      reserveButton: "Für dieses Gericht reservieren",
      learnMoreButton: "Mehr über dieses Gericht erfahren"
    }
  };

  const content = todaysSpecial[currentLanguage];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <Icon name="ChefHat" size={16} />
            <span className="text-sm font-medium">{content.subtitle}</span>
          </div>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-primary mb-4">
            {content.title}
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-warm-lg">
              <Image
                src="https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg"
                alt={content.dishName}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Price Badge */}
            <div className="absolute top-4 right-4 bg-conversion-gold text-conversion-gold-foreground px-4 py-2 rounded-full shadow-warm">
              <span className="font-bold text-lg">{content.price}</span>
            </div>

            {/* Availability Badge */}
            <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-full shadow-warm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{content.availableUntil}</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-primary mb-2">
                {content.dishName}
              </h3>
              <p className="text-foreground leading-relaxed">
                {content.description}
              </p>
            </div>

            {/* Dish Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Clock" size={16} />
                <span className="text-sm">{content.preparationTime}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Users" size={16} />
                <span className="text-sm">{content.servings}</span>
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h4 className="font-semibold text-primary mb-3 flex items-center space-x-2">
                <Icon name="Leaf" size={16} />
                <span>{currentLanguage === 'EN' ? 'Key Ingredients' : 'Hauptzutaten'}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {content.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-sm text-foreground">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cultural Context */}
            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-semibold text-primary mb-2 flex items-center space-x-2">
                <Icon name="BookOpen" size={16} />
                <span>{currentLanguage === 'EN' ? 'Cultural Story' : 'Kulturelle Geschichte'}</span>
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {content.culturalContext}
              </p>
            </div>

            {/* Chef's Note */}
            <div className="border-l-4 border-accent pl-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Quote" size={14} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-foreground italic leading-relaxed">
                    "{content.chefNote}"
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    — {currentLanguage === 'EN' ? 'Chef Marco Rossi' : 'Chefkoch Marco Rossi'}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <Link to="/reservation-experience" className="flex-1">
                <Button
                  variant="default"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-conversion-gold hover:bg-conversion-gold/90 font-montserrat"
                >
                  {content.reserveButton}
                </Button>
              </Link>
              
              <Link to="/menu-experience" className="flex-1">
                <Button
                  variant="outline"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="font-montserrat"
                >
                  {content.learnMoreButton}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodaysInspiration;