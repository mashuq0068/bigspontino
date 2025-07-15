import React from 'react';
import DishCard from './DishCard';
import Icon from '../../../components/AppIcon';

const MenuSection = ({ dishes, onAddToExperience }) => {



  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon 
              name="ChefHat" 
              size={32} 
              className="text-primary" 
            />
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">
              Menu Experience
            </h2>
          </div>
          
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