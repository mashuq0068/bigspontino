import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ChefRecommendations = ({ onAddToExperience }) => {
  const chefRecommendations = [
    {
      id: 'chef-1',
      name: 'Osso Buco alla Milanese',
      italianName: 'Traditional Milanese braised veal shanks',
      description: 'Slow-braised veal shanks with saffron risotto, gremolata, and bone marrow. A signature dish that represents the soul of Northern Italian cuisine.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      price: 38.50,
      category: 'secondi',
      preparationTime: 180,
      chefNote: 'This is my grandmother\'s recipe from Milano. The secret is in the slow braising process that takes over 3 hours, allowing the flavors to develop into something truly extraordinary.',
      ingredients: ['Veal shanks', 'Arborio rice', 'Saffron', 'Bone marrow', 'Gremolata', 'White wine'],
      winePairing: {
        wine: 'Barolo DOCG 2018',
        note: 'The robust tannins complement the rich marrow perfectly'
      },
      difficulty: 'Master Level',
      origin: 'This recipe has been passed down through three generations of our family in Milano',
      isChefRecommendation: true,
      videoUrl: 'https://example.com/osso-buco-preparation'
    },
    {
      id: 'chef-2',
      name: 'Handmade Tortellini in Brodo',
      italianName: 'Tortellini fatti a mano in brodo di cappone',
      description: 'Hand-folded tortellini filled with prosciutto, mortadella, and Parmigiano-Reggiano, served in rich capon broth.',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      price: 28.00,
      category: 'primi',
      preparationTime: 240,
      chefNote: 'Each tortellino is folded by hand in our kitchen every morning. The pasta dough contains 12 egg yolks per kilo of flour, creating an incredibly rich and silky texture.',
      ingredients: ['00 Flour', 'Egg yolks', 'Prosciutto di Parma', 'Mortadella', 'Parmigiano-Reggiano', 'Capon broth'],
      winePairing: {
        wine: 'Lambrusco di Sorbara DOC',
        note: 'The effervescence cleanses the palate between each rich bite'
      },
      difficulty: 'Artisan Level',
      origin: 'Traditional recipe from Emilia-Romagna, where tortellini was born in the 12th century',
      isChefRecommendation: true,
      videoUrl: 'https://example.com/tortellini-making'
    },
    {
      id: 'chef-3',
      name: 'Tiramisu della Casa',
      italianName: 'Our signature tiramisu',
      description: 'Classic tiramisu made with espresso-soaked ladyfingers, mascarpone cream, and Belgian cocoa. Prepared 24 hours in advance for perfect texture.',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      price: 12.50,
      category: 'dolci',
      preparationTime: 30,
      chefNote: 'We use only Mascarpone from Lombardia and our espresso blend is specially roasted for this dessert. The key is patience - it must rest for exactly 24 hours.',
      ingredients: ['Mascarpone', 'Ladyfingers', 'Espresso', 'Marsala wine', 'Egg yolks', 'Belgian cocoa'],
      winePairing: {
        wine: 'Moscato d\'Asti DOCG',
        note: 'The sweetness balances the coffee bitterness beautifully'
      },
      difficulty: 'Traditional',
      origin: 'Created in Veneto in the 1960s, our version stays true to the original recipe',
      isChefRecommendation: true,
      videoUrl: 'https://example.com/tiramisu-preparation'
    }
  ];

  return (
    <section className="py-16 bg-gradient-tuscan">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Award" size={32} className="text-primary" />
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">
              Chef's Recommendations
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our chef's most treasured recipes, each one a masterpiece of Italian culinary tradition\n crafted with passion and perfected over generations
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Chef Introduction */}
        <div className="bg-card rounded-xl p-8 mb-12 shadow-warm">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Chef Marco Bigspontino"
                className="w-32 h-32 object-cover rounded-full shadow-warm"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                Chef Marco Bigspontino
              </h3>
              <p className="text-primary font-medium mb-3">Executive Chef & Owner</p>
              <p className="text-muted-foreground leading-relaxed">
                "These three dishes represent the heart of my culinary journey. Each recipe carries the soul of Italy - from my grandmother's kitchen in Milano to the finest ingredients sourced directly from our trusted suppliers across the peninsula. When you taste these dishes, you taste my heritage."
              </p>
            </div>
          </div>
        </div>

        {/* Recommendations Grid */}
        <div className="space-y-12">
          {chefRecommendations.map((dish, index) => (
            <div 
              key={dish.id}
              className={`bg-card rounded-xl shadow-warm overflow-hidden ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 relative">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2">
                  <Icon name="Award" size={16} />
                  <span>Chef's Choice</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {dish.difficulty}
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-foreground mb-1">
                      {dish.name}
                    </h3>
                    <p className="text-sm text-muted-foreground italic mb-2">
                      {dish.italianName}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={14} />
                        <span>{dish.preparationTime} min</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="ChefHat" size={14} />
                        <span>{dish.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-montserrat text-2xl font-bold text-primary">
                      €{dish.price.toFixed(2).replace('.', ',')}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {dish.description}
                </p>

                {/* Chef's Note */}
                <div className="bg-primary/5 rounded-lg p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Icon name="Quote" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Chef's Note</h4>
                      <p className="text-sm text-muted-foreground italic leading-relaxed">
                        {dish.chefNote}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ingredients */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                    <Icon name="Leaf" size={16} className="text-secondary" />
                    <span>Key Ingredients</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {dish.ingredients.map((ingredient, idx) => (
                      <span
                        key={idx}
                        className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Wine Pairing */}
                <div className="mb-6 p-4 bg-accent/10 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Wine" size={16} className="text-accent" />
                    <span className="font-semibold text-accent">Perfect Pairing</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">{dish.winePairing.wine}</p>
                  <p className="text-xs text-muted-foreground">{dish.winePairing.note}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Play"
                    iconPosition="left"
                    className="flex-1"
                  >
                    Watch Preparation
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    iconName="Plus"
                    iconPosition="left"
                    className="flex-1 bg-conversion-gold hover:bg-conversion-gold/90 font-montserrat"
                    onClick={() => onAddToExperience(dish)}
                  >
                    Add to Experience
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-card rounded-xl p-8 shadow-warm">
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
              Experience All Three Masterpieces
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book our Chef's Tasting Menu to experience all three recommendations with perfectly paired wines and detailed preparation stories.
            </p>
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90 font-montserrat shadow-warm"
            >
              Reserve Chef's Tasting Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommendations;