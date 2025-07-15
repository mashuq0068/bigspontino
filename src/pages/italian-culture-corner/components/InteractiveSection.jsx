import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const InteractiveSection = () => {
  const [activeTab, setActiveTab] = useState('recipes');

  const tabs = [
    {
      id: 'recipes',
      name: 'Traditional Recipes',
      icon: 'ChefHat',
      count: 24
    },
    {
      id: 'techniques',
      name: 'Cooking Techniques',
      icon: 'Play',
      count: 12
    },
    {
      id: 'tours',
      name: 'Virtual Tours',
      icon: 'MapPin',
      count: 8
    }
  ];

  const recipeContent = [
    {
      id: 1,
      title: "Nonna\'s Ragu Bolognese",
      region: "Emilia-Romagna",
      difficulty: "Intermediate",
      time: "4 hours",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The authentic recipe passed down through generations, featuring the perfect balance of meat, tomatoes, and aromatic herbs."
    },
    {
      id: 2,
      title: "Sicilian Arancini",
      region: "Sicily",
      difficulty: "Advanced",
      time: "2 hours",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Golden rice balls filled with ragù, mozzarella, and peas - a beloved street food from the heart of Sicily."
    },
    {
      id: 3,
      title: "Venetian Risotto",
      region: "Veneto",
      difficulty: "Beginner",
      time: "45 minutes",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Creamy risotto with fresh seafood from the Venetian lagoon, finished with a touch of white wine."
    }
  ];

  const techniqueContent = [
    {
      id: 1,
      title: "Perfect Pasta Al Dente",
      duration: "8 minutes",
      level: "Essential",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Master the art of cooking pasta to the perfect texture - firm to the bite yet tender throughout."
    },
    {
      id: 2,
      title: "Hand-Rolling Gnocchi",
      duration: "15 minutes",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1587740908075-1e4c5b8b6b8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Learn the traditional technique for creating pillowy soft gnocchi using just potatoes, flour, and love."
    }
  ];

  const tourContent = [
    {
      id: 1,
      title: "Tuscan Vineyard Experience",
      location: "Chianti Region",
      duration: "25 minutes",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Journey through rolling hills and ancient vineyards where Sangiovese grapes create world-renowned wines."
    },
    {
      id: 2,
      title: "Roman Market Tour",
      location: "Campo de\' Fiori",
      duration: "18 minutes",
      image: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Explore the vibrant morning market where Romans have shopped for fresh ingredients for centuries."
    }
  ];

  const getActiveContent = () => {
    switch (activeTab) {
      case 'recipes':
        return recipeContent;
      case 'techniques':
        return techniqueContent;
      case 'tours':
        return tourContent;
      default:
        return recipeContent;
    }
  };

  return (
    <div className="bg-card rounded-2xl p-8 shadow-warm border border-warm">
      <div className="text-center mb-8">
        <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
          Interactive Cultural Experiences
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Dive deeper into Italian culture with hands-on recipes, cooking techniques, and virtual tours 
          that bring Italy directly to your kitchen.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-col sm:flex-row justify-center mb-8 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-warm ${
              activeTab === tab.id
                ? 'bg-primary text-primary-foreground shadow-warm'
                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            <Icon name={tab.icon} size={20} className="mr-2" />
            {tab.name}
            <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
              activeTab === tab.id
                ? 'bg-primary-foreground/20 text-primary-foreground'
                : 'bg-muted-foreground/20 text-muted-foreground'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getActiveContent().map((item) => (
          <div key={item.id} className="bg-background rounded-xl overflow-hidden shadow-warm border border-warm group hover:shadow-warm-lg transition-warm">
            <div className="relative h-48">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-warm"
              />
              <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-2">
                <Icon 
                  name={activeTab === 'recipes' ? 'ChefHat' : activeTab === 'techniques' ? 'Play' : 'MapPin'} 
                  size={16} 
                  className="text-white" 
                />
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-primary font-medium text-sm">
                  {item.region || item.level || item.location}
                </span>
                <span className="text-muted-foreground text-sm">
                  {item.time || item.duration}
                </span>
              </div>
              
              <h3 className="font-playfair text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-warm">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                {activeTab === 'recipes' && (
                  <div className="flex items-center text-muted-foreground text-xs">
                    <Icon name="Clock" size={14} className="mr-1" />
                    <span>{item.difficulty}</span>
                  </div>
                )}
                
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="text-primary hover:text-primary/80 ml-auto"
                >
                  {activeTab === 'recipes' ? 'Get Recipe' : activeTab === 'techniques' ? 'Watch Video' : 'Start Tour'}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveSection;