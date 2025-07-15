import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ExperienceBuilder = ({ selectedDishes, onRemoveDish, onClearAll }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const calculateTotal = () => {
    return selectedDishes.reduce((total, dish) => total + dish.price, 0);
  };

  const getWinePairings = () => {
    return selectedDishes
      .filter(dish => dish.winePairing)
      .map(dish => dish.winePairing);
  };

  const generateMenuSuggestions = () => {
    const categories = ['antipasti', 'primi', 'secondi', 'dolci'];
    const suggestions = [];
    
    categories.forEach(category => {
      const hasCategory = selectedDishes.some(dish => dish.category === category);
      if (!hasCategory) {
        suggestions.push({
          category,
          message: `Consider adding a ${category} to complete your Italian dining experience`
        });
      }
    });
    
    return suggestions;
  };

  if (selectedDishes.length === 0) {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <div className="bg-card rounded-full p-4 shadow-warm border border-warm">
          <div className="flex items-center space-x-2">
            <Icon name="ChefHat" size={20} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Build Your Experience</span>
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
              <h3 className="font-semibold text-foreground">Your Experience</h3>
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

        {/* Expanded Content */}
        {isExpanded && (
          <div className="border-t border-warm">
            {/* Selected Dishes */}
            <div className="p-4 max-h-64 overflow-y-auto">
              <div className="space-y-3">
                {selectedDishes.map((dish) => (
                  <div key={dish.id} className="flex items-center space-x-3 bg-background/50 rounded-lg p-3">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-foreground truncate">
                        {dish.name}
                      </h4>
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
            </div>

            {/* Wine Pairings */}
            {getWinePairings().length > 0 && (
              <div className="px-4 pb-4">
                <h4 className="text-sm font-medium text-foreground mb-2 flex items-center space-x-2">
                  <Icon name="Wine" size={16} className="text-accent" />
                  <span>Recommended Wine Pairings</span>
                </h4>
                <div className="space-y-2">
                  {getWinePairings().map((pairing, index) => (
                    <div key={index} className="bg-accent/10 rounded-lg p-2">
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
                  <span>Complete Your Experience</span>
                </h4>
                <div className="space-y-1">
                  {generateMenuSuggestions().map((suggestion, index) => (
                    <p key={index} className="text-xs text-muted-foreground">
                      {suggestion.message}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Total */}
            <div className="px-4 py-3 bg-primary/5 border-t border-warm">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-foreground">Total Experience</span>
                <span className="font-bold text-lg text-primary">
                  €{calculateTotal().toFixed(2).replace('.', ',')}
                </span>
              </div>
              
              {/* Action Buttons */}
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
                  Clear All
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-conversion-gold hover:bg-conversion-gold/90 font-montserrat"
                >
                  Reserve with Menu
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