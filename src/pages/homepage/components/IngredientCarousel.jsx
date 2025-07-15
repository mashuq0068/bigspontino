import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const IngredientCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'EN';
    setCurrentLanguage(savedLanguage);
  }, []);

  const ingredients = [
    {
      id: 1,
      name: { EN: "Sicilian Olive Oil", DE: "Sizilianisches Olivenöl" },
      image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg",
      story: {
        EN: `Golden liquid sunshine from ancient groves in Sicily, where olive trees have stood for centuries. Each drop carries the essence of Mediterranean terroir.`,
        DE: `Goldenes flüssiges Sonnenlicht aus alten Hainen in Sizilien, wo Olivenbäume seit Jahrhunderten stehen. Jeder Tropfen trägt die Essenz des mediterranen Terroirs.`
      },
      origin: { EN: "Sicily, Italy", DE: "Sizilien, Italien" },
      season: { EN: "Harvest: October-November", DE: "Ernte: Oktober-November" }
    },
    {
      id: 2,
      name: { EN: "Parmigiano-Reggiano", DE: "Parmigiano-Reggiano" },
      image: "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg",
      story: {
        EN: `The King of Cheeses, aged 24 months in the caves of Emilia-Romagna. Each wheel tells a story of patience, tradition, and uncompromising quality.`,
        DE: `Der König der Käse, 24 Monate in den Höhlen der Emilia-Romagna gereift. Jedes Rad erzählt eine Geschichte von Geduld, Tradition und kompromissloser Qualität.`
      },
      origin: { EN: "Emilia-Romagna, Italy", DE: "Emilia-Romagna, Italien" },
      season: { EN: "Aged: 24 months", DE: "Gereift: 24 Monate" }
    },
    {
      id: 3,
      name: { EN: "San Marzano Tomatoes", DE: "San Marzano Tomaten" },
      image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg",
      story: {
        EN: `Sweet, sun-ripened treasures from the volcanic soils of Mount Vesuvius. These tomatoes are the soul of authentic Italian cuisine.`,
        DE: `Süße, sonnengereifte Schätze aus den vulkanischen Böden des Vesuvs. Diese Tomaten sind die Seele der authentischen italienischen Küche.`
      },
      origin: { EN: "Campania, Italy", DE: "Kampanien, Italien" },
      season: { EN: "Harvest: July-September", DE: "Ernte: Juli-September" }
    },
    {
      id: 4,
      name: { EN: "Truffle di Alba", DE: "Trüffel di Alba" },
      image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg",
      story: {
        EN: `White gold from the hills of Piedmont, hunted by skilled truffle hunters and their faithful dogs. Each truffle is a rare gift from nature.`,
        DE: `Weißes Gold aus den Hügeln des Piemonts, gejagt von erfahrenen Trüffeljägern und ihren treuen Hunden. Jeder Trüffel ist ein seltenes Geschenk der Natur.`
      },
      origin: { EN: "Piedmont, Italy", DE: "Piemont, Italien" },
      season: { EN: "Season: October-December", DE: "Saison: Oktober-Dezember" }
    },
    {
      id: 5,
      name: { EN: "Chianti Classico", DE: "Chianti Classico" },
      image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg",
      story: {
        EN: `Ruby red nectar from the rolling hills of Tuscany, where Sangiovese grapes bask in the Mediterranean sun and transform into liquid poetry.`,
        DE: `Rubinroter Nektar aus den sanften Hügeln der Toskana, wo Sangiovese-Trauben in der Mittelmeersonne baden und sich in flüssige Poesie verwandeln.`
      },
      origin: { EN: "Tuscany, Italy", DE: "Toskana, Italien" },
      season: { EN: "Vintage: September harvest", DE: "Jahrgang: September-Ernte" }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % ingredients.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + ingredients.length) % ingredients.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentIngredient = ingredients[currentSlide];

  return (
    <section className="py-16 lg:py-24 bg-gradient-tuscan">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-primary mb-4">
            {currentLanguage === 'EN' ? 'Our Ingredient Stories' : 'Unsere Zutaten-Geschichten'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {currentLanguage === 'EN' ?'Every dish begins with a story. Discover the origins of our carefully selected ingredients from across Italy.' :'Jedes Gericht beginnt mit einer Geschichte. Entdecken Sie die Herkunft unserer sorgfältig ausgewählten Zutaten aus ganz Italien.'
            }
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-warm-lg">
                <Image
                  src={currentIngredient.image}
                  alt={currentIngredient.name[currentLanguage]}
                  className="w-full h-full object-cover transition-warm hover:scale-105"
                />
              </div>
              
              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-6">
                {ingredients.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-warm ${
                      index === currentSlide 
                        ? 'bg-primary' :'bg-primary/30 hover:bg-primary/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="Leaf" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-primary">
                    {currentIngredient.name[currentLanguage]}
                  </h3>
                  <p className="text-muted-foreground flex items-center space-x-1">
                    <Icon name="MapPin" size={16} />
                    <span>{currentIngredient.origin[currentLanguage]}</span>
                  </p>
                </div>
              </div>

              <p className="text-foreground leading-relaxed text-lg">
                {currentIngredient.story[currentLanguage]}
              </p>

              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="Calendar" size={16} />
                  <span>{currentIngredient.season[currentLanguage]}</span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center space-x-4 pt-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-warm group"
                  aria-label="Previous ingredient"
                >
                  <Icon name="ChevronLeft" size={20} className="text-primary group-hover:scale-110 transition-warm" />
                </button>
                
                <div className="flex-1 text-center">
                  <span className="text-sm text-muted-foreground">
                    {currentSlide + 1} {currentLanguage === 'EN' ? 'of' : 'von'} {ingredients.length}
                  </span>
                </div>
                
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-warm group"
                  aria-label="Next ingredient"
                >
                  <Icon name="ChevronRight" size={20} className="text-primary group-hover:scale-110 transition-warm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientCarousel;