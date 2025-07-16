import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const translations = {
  EN: {
    emptyPrompt: 'Build Your Experience',
    yourExperience: 'Your Experience',
    recommendedWine: 'Recommended Wine Pairings',
    completeYourExperience: 'Complete Your Experience',
    consider: (cat) => `Consider adding a ${cat} to complete your Italian dining experience`,
    categories: {
      antipasti: 'antipasti',
      primi: 'primi',
      secondi: 'secondi',
      dolci: 'dolci',
    },
    totalExperience: 'Total Experience',
    clearAll: 'Clear All',
    reserveWithMenu: 'Reserve with Menu',
  },
  DE: {
    emptyPrompt: 'Erstellen Sie Ihr Erlebnis',
    yourExperience: 'Ihr Erlebnis',
    recommendedWine: 'Empfohlene Weinbegleitungen',
    completeYourExperience: 'Erlebnis vervollständigen',
    consider: (cat) => `Fügen Sie ein ${cat} hinzu, um Ihr italienisches Menü zu vervollständigen`,
    categories: {
      antipasti: 'Antipasti',
      primi: 'Primi',
      secondi: 'Secondi',
      dolci: 'Dolci',
    },
    totalExperience: 'Gesamterlebnis',
    clearAll: 'Alle löschen',
    reserveWithMenu: 'Mit Menü reservieren',
  },
};

const ExperienceBuilder = ({ selectedDishes, onRemoveDish, onClearAll }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const lang = localStorage.getItem('language');
    if (lang) setLanguage(lang);
  }, []);

  const t = translations[language] || translations.EN;

  const calculateTotal = () =>
    selectedDishes.reduce((total, dish) => total + dish.price, 0);

  const getWinePairings = () =>
    selectedDishes.filter(dish => dish.winePairing).map(dish => dish.winePairing);

  // Pass translated category names to consider message
  const generateMenuSuggestions = () => {
    const categories = ['antipasti', 'primi', 'secondi', 'dolci'];
    return categories
      .filter(cat => !selectedDishes.some(dish => dish.category === cat))
      .map(cat => ({
        category: cat,
        message: t.consider(t.categories[cat] || cat),
      }));
  };

  if (selectedDishes.length === 0) {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <div className="bg-card rounded-full p-4 shadow-warm border border-warm">
          <div className="flex items-center space-x-2">
            <Icon name="ChefHat" size={20} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{t.emptyPrompt}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className={`bg-card rounded-xl shadow-warm-lg border border-warm transition-warm ${
        isExpanded ? 'w-96' : 'w-auto'
      }`}>
        {/* Header */}
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Icon name="ChefHat" size={24} className="text-primary" />
              <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                {selectedDishes.length}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{t.yourExperience}</h3>
              <p className="text-sm text-muted-foreground">
                €{calculateTotal().toFixed(2).replace('.', ',')}
              </p>
            </div>
          </div>
          <Icon
            name={isExpanded ? "ChevronDown" : "ChevronUp"}
            size={20}
            className="text-muted-foreground"
          />
        </div>

        {isExpanded && (
          <div className="border-t border-warm">
            {/* Dishes */}
            <div className="p-4 max-h-64 overflow-y-auto space-y-3">
              {selectedDishes.map(dish => (
                <div key={dish.id} className="flex items-center space-x-3 bg-background/50 rounded-lg p-3">
                  <Image
                    src={dish.image}
                    alt={dish.name[language]}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-foreground truncate">{dish.name[language]}</h4>
                    <p className="text-xs text-muted-foreground">
                      €{dish.price.toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="X"
                    onClick={() => onRemoveDish(dish.id)}
                    className="text-muted-foreground hover:text-error"
                  />
                </div>
              ))}
            </div>

            {/* Wine Pairings */}
            {getWinePairings().length > 0 && (
              <div className="px-4 pb-4">
                <h4 className="text-sm font-medium text-foreground mb-2 flex items-center space-x-2">
                  <Icon name="Wine" size={16} className="text-accent" />
                  <span>{t.recommendedWine}</span>
                </h4>
                <div className="space-y-2">
                  {getWinePairings().map((pairing, i) => (
                    <div key={i} className="bg-accent/10 rounded-lg p-2">
                      <p className="text-xs font-medium text-accent">{pairing.wine}</p>
                      <p className="text-xs text-muted-foreground">{pairing.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Menu Suggestions */}
            {generateMenuSuggestions().length > 0 && (
              <div className="px-4 pb-4">
                <h4 className="text-sm font-medium text-foreground mb-2 flex items-center space-x-2">
                  <Icon name="Lightbulb" size={16} className="text-secondary" />
                  <span>{t.completeYourExperience}</span>
                </h4>
                <div className="space-y-1">
                  {generateMenuSuggestions().map((sug, i) => (
                    <p key={i} className="text-xs text-muted-foreground">{sug.message}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="px-4 py-3 bg-primary/5 border-t border-warm">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-foreground">{t.totalExperience}</span>
                <span className="font-bold text-lg text-primary">
                  €{calculateTotal().toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName="Trash2"
                  iconPosition="left"
                  onClick={onClearAll}
                  className="text-error border-error hover:bg-error hover:text-white"
                >
                  {t.clearAll}
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-conversion-gold hover:bg-conversion-gold/90 "
                >
                  {t.reserveWithMenu}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceBuilder;
