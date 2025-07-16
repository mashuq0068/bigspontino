import React, { useEffect, useState } from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const DishCard = ({ dish, onAddToExperience }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const lang = localStorage.getItem("language") || "EN";
    setLanguage(lang);
  }, []);

  const content = {
    EN: {
      viewDetails: "View Details",
      addToExperience: "Add to Experience",
      chefsChoice: "Chef's Choice",
      seasonal: "Seasonal",
      keyIngredients: "Key Ingredients",
      sommelierPairing: "Sommelier's Pairing",
      originStory: "Origin Story",
      learnMore: "Learn More",
      description: "Description",
      allIngredients: "All Ingredients",
      preparation: "Preparation",
      prepTime: "Preparation time: {time} minutes",
      dietary: {
        vegetarian: "Vegetarian",
        vegan: "Vegan",
        "gluten-free": "Gluten Free",
      },
    },
    DE: {
      viewDetails: "Details anzeigen",
      addToExperience: "Zum Erlebnis hinzufügen",
      chefsChoice: "Empfehlung des Küchenchefs",
      seasonal: "Saisonal",
      keyIngredients: "Hauptzutaten",
      sommelierPairing: "Weinempfehlung",
      originStory: "Herkunftsgeschichte",
      learnMore: "Mehr erfahren",
      description: "Beschreibung",
      allIngredients: "Alle Zutaten",
      preparation: "Zubereitung",
      prepTime: "Zubereitungszeit: {time} Minuten",
      dietary: {
        vegetarian: "Vegetarisch",
        vegan: "Vegan",
        "gluten-free": "Glutenfrei",
      },
    },
  };

  const t = content[language] || content.EN;

  const getDietaryIcon = (type) => {
    switch (type) {
      case "vegetarian":
        return "Leaf";
      case "vegan":
        return "Sprout";
      case "gluten-free":
        return "Wheat";
      default:
        return "Info";
    }
  };

  const getDietaryColor = (type) => {
    switch (type) {
      case "vegetarian":
        return "text-green-600";
      case "vegan":
        return "text-green-700";
      case "gluten-free":
        return "text-amber-600";
      default:
        return "text-muted-foreground";
    }
  };

  const formatPrice = (price) => {
    return language === "DE"
      ? `€${price.toFixed(2).replace(".", ",")}`
      : `€${price.toFixed(2)}`;
  };

  return (
    <div
      className="bg-card rounded-xl shadow-warm hover:shadow-warm-lg transition-warm overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name[language]}
          className="w-full h-full object-cover group-hover:scale-105 transition-warm duration-500"
        />

        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-warm ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              iconName="Eye"
              className="bg-white/90 text-primary border-white hover:bg-white"
              onClick={() => setShowDetails(true)}
            >
              {t.viewDetails}
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Plus"
              className="bg-conversion-gold hover:bg-conversion-gold/90"
              onClick={() => onAddToExperience(dish)}
            >
              {t.addToExperience}
            </Button>
          </div>
        </div>

        {dish.isChefRecommendation && (
          <div className="absolute top-3 left-3 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Icon name="Award" size={12} />
            <span>{t.chefsChoice}</span>
          </div>
        )}

        {dish.isSeasonal && (
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Icon name="Leaf" size={12} />
            <span>{t.seasonal}</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-playfire text-xl font-semibold text-foreground mb-1">
              {dish.name[language]}
            </h3>
            <p className="text-sm text-muted-foreground italic">
              {dish.italianName[language]}
            </p>
          </div>
          <div className="text-right">
            <div className=" text-lg font-semibold text-primary">
              {formatPrice(dish.price)}
            </div>
            {dish.portionSize && (
              <div className="text-xs text-muted-foreground">
                {dish.portionSize}
              </div>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {dish.description[language]}
        </p>

        <div className="mb-4">
          <h4 className="text-xs font-medium text-foreground mb-2 uppercase tracking-wide">
            {t.keyIngredients}
          </h4>
          <div className="flex flex-wrap gap-1">
            {dish.ingredients?.slice(0, 4).map((ingredient, idx) => (
              <span
                key={idx}
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

        {dish.dietary && dish.dietary.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center space-x-2">
              {dish.dietary.map((diet, idx) => (
                <div
                  key={idx}
                  className={`flex items-center space-x-1 ${getDietaryColor(
                    diet
                  )}`}
                  title={t.dietary[diet] || diet}
                >
                  <Icon name={getDietaryIcon(diet)} size={14} />
                  <span className="text-xs capitalize">
                    {t.dietary[diet] || diet}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {dish.winePairing && (
          <div className="mb-4 p-3 bg-accent/10 rounded-lg">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="Wine" size={14} className="text-accent" />
              <span className="text-sm font-medium text-accent">
                {t.sommelierPairing}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              {dish.winePairing.wine} - {dish.winePairing.note}
            </p>
          </div>
        )}

        {dish.origin && (
          <div className="mb-4 p-3 bg-secondary/10 rounded-lg">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="MapPin" size={14} className="text-secondary" />
              <span className="text-sm font-medium text-secondary">
                {t.originStory}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{dish.origin}</p>
          </div>
        )}

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            fullWidth
            iconName="Info"
            iconPosition="left"
            onClick={() => setShowDetails(true)}
          >
            {t.learnMore}
          </Button>
          <Button
            variant="default"
            size="sm"
            fullWidth
            iconName="Plus"
            iconPosition="left"
            className="bg-primary text-wrap hover:bg-primary/90 p-6"
            onClick={() => onAddToExperience(dish)}
          >
            {t.addToExperience}
          </Button>
        </div>
      </div>

      {showDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="font-playfair text-2xl font-bold text-foreground">
                  {dish.name[language]}
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
                  alt={dish.name[language]}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div>
                  <h3 className="font-semibold mb-2">{t.description}</h3>
                  <p className="text-muted-foreground">{dish.description[language]}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">{t.allIngredients}</h3>
                  <div className="flex flex-wrap gap-2">
                    {dish.ingredients.map((ingredient, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                {dish.preparationTime && (
                  <div>
                    <h3 className="font-semibold mb-2">{t.preparation}</h3>
                    <p className="text-muted-foreground">
                      {t.prepTime.replace("{time}", dish.preparationTime)}
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
