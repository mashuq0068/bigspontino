import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DishCard = ({ dish, onAddToExperience }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const getDietaryIcon = (type) => {
    switch (type) {
      case 'vegetarian': return 'Leaf';
      case 'vegan': return 'Sprout';
      case 'gluten-free': return 'Wheat';
      default: return 'Info';
    }
  };

  const getDietaryColor = (type) => {
    switch (type) {
      case 'vegetarian': return 'text-green-600';
      case 'vegan': return 'text-green-700';
      case 'gluten-free': return 'text-amber-600';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div 
      className="bg-card rounded-xl shadow-warm hover:shadow-warm-lg transition-warm overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-warm duration-500"
        />
        
        {/* Overlay with quick actions */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-warm ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              iconName="Eye"
              className="bg-white/90 text-primary border-white hover:bg-white"
              onClick={() => setShowDetails(true)}
            >
              View Details
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Plus"
              className="bg-conversion-gold hover:bg-conversion-gold/90"
              onClick={() => onAddToExperience(dish)}
            >
              Add to Experience
            </Button>
          </div>
        </div>

        {/* Chef's Recommendation Badge */}
        {dish.isChefRecommendation && (
          <div className="absolute top-3 left-3 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Icon name="Award" size={12} />
            <span>Chef's Choice</span>
          </div>
        )}

        {/* Seasonal Badge */}
        {dish.isSeasonal && (
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Icon name="Leaf" size={12} />
            <span>Seasonal</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-1">
              {dish.name}
            </h3>
            <p className="text-sm text-muted-foreground italic">
              {dish.italianName}
            </p>
          </div>
          <div className="text-right">
            <div className="font-montserrat text-lg font-semibold text-primary">
              €{dish.price.toFixed(2).replace('.', ',')}
            </div>
            {dish.portionSize && (
              <div className="text-xs text-muted-foreground">
                {dish.portionSize}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {dish.description}
        </p>

        {/* Ingredients */}
        <div className="mb-4">
          <h4 className="text-xs font-medium text-foreground mb-2 uppercase tracking-wide">
            Key Ingredients
          </h4>
          <div className="flex flex-wrap gap-1">
            {dish.ingredients.slice(0, 4).map((ingredient, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
              >
                {ingredient}
              </span>
            ))}
            {dish.ingredients.length > 4 && (
              <span className="text-xs text-muted-foreground px-2 py-1">
                +{dish.ingredients.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Dietary Information */}
        {dish.dietary && dish.dietary.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center space-x-2">
              {dish.dietary.map((diet, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-1 ${getDietaryColor(diet)}`}
                  title={diet.charAt(0).toUpperCase() + diet.slice(1)}
                >
                  <Icon name={getDietaryIcon(diet)} size={14} />
                  <span className="text-xs capitalize">{diet}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Wine Pairing */}
        {dish.winePairing && (
          <div className="mb-4 p-3 bg-accent/10 rounded-lg">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="Wine" size={14} className="text-accent" />
              <span className="text-sm font-medium text-accent">Sommelier's Pairing</span>
            </div>
            <p className="text-xs text-muted-foreground">
              {dish.winePairing.wine} - {dish.winePairing.note}
            </p>
          </div>
        )}

        {/* Origin Story */}
        {dish.origin && (
          <div className="mb-4 p-3 bg-secondary/10 rounded-lg">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="MapPin" size={14} className="text-secondary" />
              <span className="text-sm font-medium text-secondary">Origin Story</span>
            </div>
            <p className="text-xs text-muted-foreground">
              {dish.origin}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            fullWidth
            iconName="Info"
            iconPosition="left"
            onClick={() => setShowDetails(true)}
          >
            Learn More
          </Button>
          <Button
            variant="default"
            size="sm"
            fullWidth
            iconName="Plus"
            iconPosition="left"
            className="bg-primary hover:bg-primary/90"
            onClick={() => onAddToExperience(dish)}
          >
            Add to Experience
          </Button>
        </div>
      </div>

      {/* Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="font-playfair text-2xl font-bold text-foreground">
                  {dish.name}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="X"
                  onClick={() => setShowDetails(false)}
                />
              </div>
              
              <div className="space-y-4">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{dish.description}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">All Ingredients</h3>
                  <div className="flex flex-wrap gap-2">
                    {dish.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
                
                {dish.preparationTime && (
                  <div>
                    <h3 className="font-semibold mb-2">Preparation</h3>
                    <p className="text-muted-foreground">
                      Preparation time: {dish.preparationTime} minutes
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DishCard;