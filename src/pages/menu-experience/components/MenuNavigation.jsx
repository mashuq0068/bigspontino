import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const MenuNavigation = ({ activeCategory, onCategoryChange }) => {
  const [isSticky, setIsSticky] = useState(false);

  const categories = [
    { id: 'antipasti', name: 'Antipasti', icon: 'Utensils', description: 'Traditional Italian starters' },
    { id: 'primi', name: 'Primi Piatti', icon: 'Wheat', description: 'First courses & pasta' },
    { id: 'secondi', name: 'Secondi Piatti', icon: 'Fish', description: 'Main courses' },
    { id: 'dolci', name: 'Dolci', icon: 'Cake', description: 'Desserts & sweets' },
    { id: 'beverages', name: 'Beverages', icon: 'Wine', description: 'Wines & drinks' },
    { id: 'seasonal', name: 'Seasonal', icon: 'Leaf', description: 'Chef\'s seasonal selections' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`transition-warm z-40  relative bg-background`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Icon name="ChefHat" size={20} className="text-primary" />
            <h2 className="font-playfair text-lg font-semibold text-primary">Menu Categories</h2>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-warm group ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-warm'
                    : 'text-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <Icon 
                  name={category.icon} 
                  size={16} 
                  className="group-hover:scale-110 transition-warm" 
                />
                <div className="text-left">
                  <div className="text-sm font-medium">{category.name}</div>
                  <div className="text-xs opacity-75">{category.description}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <div className="lg:hidden">
            <select
              value={activeCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="bg-background border border-warm rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuNavigation;