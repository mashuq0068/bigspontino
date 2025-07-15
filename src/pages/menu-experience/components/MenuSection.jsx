import React from 'react';
import DishCard from './DishCard';
import Icon from '../../../components/AppIcon';

const MenuSection = ({ category, dishes, onAddToExperience }) => {
  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case 'antipasti': return 'Utensils';
      case 'primi': return 'Wheat';
      case 'secondi': return 'Fish';
      case 'dolci': return 'Cake';
      case 'beverages': return 'Wine';
      case 'seasonal': return 'Leaf';
      default: return 'ChefHat';
    }
  };

  const getCategoryDescription = (categoryId) => {
    switch (categoryId) {
      case 'antipasti': return 'Begin your journey with traditional Italian appetizers that awaken the palate';
      case 'primi': return 'First courses featuring handmade pasta and risotto, the heart of Italian cuisine';
      case 'secondi': return 'Main courses showcasing the finest meats and seafood, prepared with Italian mastery';
      case 'dolci': return 'Sweet endings that celebrate the artistry of Italian dessert traditions';
      case 'beverages': return 'Carefully curated wines and beverages to complement your dining experience';
      case 'seasonal': return 'Chef\'s seasonal selections featuring the finest ingredients of the moment';
      default: return 'Discover the authentic flavors of Italy';
    }
  };

  if (!dishes || dishes.length === 0) {
    return (
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <Icon name="ChefHat" size={48} className="text-muted-foreground mx-auto mb-4" />
            <h2 className="font-playfair text-2xl font-semibold text-muted-foreground mb-2">
              Coming Soon
            </h2>
            <p className="text-muted-foreground">
              Our chefs are crafting something special for this section.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon 
              name={getCategoryIcon(category)} 
              size={32} 
              className="text-primary" 
            />
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {getCategoryDescription(category)}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              onAddToExperience={onAddToExperience}
            />
          ))}
        </div>

        {/* Section Footer */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground italic">
            All dishes are prepared fresh daily with ingredients sourced from trusted Italian suppliers
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;