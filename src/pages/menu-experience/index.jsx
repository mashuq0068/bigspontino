import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import MenuHero from "./components/MenuHero";
import MenuSection from "./components/MenuSection";
import ExperienceBuilder from "./components/ExperienceBuilder";

const MenuExperience = () => {
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [language, setLanguage] = useState('EN'); // Default to English

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  // Translation content for English and German
  const content = {
    EN: {
      pageTitle: "Menu Experience - Bigspontino | Authentic Italian Culinary Journey",
      metaDescription: "Explore our authentic Italian menu featuring traditional dishes, chef's recommendations, and seasonal specialties. Each dish tells a story of Italian heritage and culinary mastery.",
      metaKeywords: "Italian menu, authentic Italian food, chef recommendations, Italian restaurant, traditional recipes, seasonal dishes",
      ogTitle: "Menu Experience - Bigspontino",
      ogDescription: "Discover authentic Italian cuisine with our interactive menu experience. From antipasti to dolci, each dish represents the soul of Italian culinary tradition.",
      categories: {
        antipasti: "Antipasti",
        primi: "Primi Piatti",
        secondi: "Secondi Piatti",
        dolci: "Dolci"
      },
      dietary: {
        vegetarian: "Vegetarian",
        "gluten-free": "Gluten Free"
      }
    },
    DE: {
      pageTitle: "Menüerlebnis - Bigspontino | Authentische italienische Küche",
      metaDescription: "Entdecken Sie unser authentisches italienisches Menü mit traditionellen Gerichten, Empfehlungen des Küchenchefs und saisonalen Spezialitäten. Jedes Gericht erzählt eine Geschichte italienischer Tradition und kulinarischer Meisterschaft.",
      metaKeywords: "Italienische Speisekarte, authentisches italienisches Essen, Empfehlungen des Küchenchefs, italienisches Restaurant, traditionelle Rezepte, saisonale Gerichte",
      ogTitle: "Menüerlebnis - Bigspontino",
      ogDescription: "Entdecken Sie authentische italienische Küche mit unserem interaktiven Menüerlebnis. Von Antipasti bis Dolci repräsentiert jedes Gericht die Seele der italienischen Kochtradition.",
      categories: {
        antipasti: "Vorspeisen",
        primi: "Erste Gänge",
        secondi: "Hauptgerichte",
        dolci: "Desserts"
      },
      dietary: {
        vegetarian: "Vegetarisch",
        "gluten-free": "Glutenfrei"
      }
    }
  };

  const t = content[language] || content.EN;



  const handleAddToExperience = (dish) => {
    setSelectedDishes((prev) => {
      const exists = prev.find((d) => d.id === dish.id);
      if (exists) {
        return prev;
      }
      return [...prev, dish];
    });
  };

  const handleRemoveDish = (dishId) => {
    setSelectedDishes((prev) => prev.filter((dish) => dish.id !== dishId));
  };

  const handleClearAll = () => {
    setSelectedDishes([]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="keywords" content={t.metaKeywords} />
        <meta property="og:title" content={t.ogTitle} />
        <meta property="og:description" content={t.ogDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/menu-experience" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-16 lg:pt-20">
          <MenuHero language={language} />

          <MenuSection
           
            onAddToExperience={handleAddToExperience}
            language={language}
            translations={t}
          />

          <ExperienceBuilder
            selectedDishes={selectedDishes}
            onRemoveDish={handleRemoveDish}
            onClearAll={handleClearAll}
            language={language}
          />
        </main>
      </div>
    </>
  );
};

export default MenuExperience;