import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import MenuHero from "./components/MenuHero";
import Button from "../../components/ui/Button";
import Image from "../../components/AppImage";

const MenuExperience = () => {
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang) {
      setLanguage(storedLang);
    }
    window.scrollTo(0, 0);
  }, []);

  const content = {
    EN: {
      pageTitle: "Menu Experience - Bigspontino | Authentic Italian Culinary Journey",
      metaDescription:
        "Explore our authentic Italian menu featuring traditional dishes, chef's recommendations, and seasonal specialties. Each dish tells a story of Italian heritage and culinary mastery.",
      metaKeywords:
        "Italian menu, authentic Italian food, chef recommendations, Italian restaurant, traditional recipes, seasonal dishes",
      ogTitle: "Menu Experience - Bigspontino",
      ogDescription:
        "Discover authentic Italian cuisine with our interactive menu experience. From antipasti to dolci, each dish represents the soul of Italian culinary tradition.",
      blocks: ["Brunch", "Lunch", "Dinner", "Bar"],
      pdfLabel: "Download Full Menu (PDF)"
    },
    DE: {
      pageTitle: "Menüerlebnis - Bigspontino | Authentische italienische Küche",
      metaDescription:
        "Entdecken Sie unser authentisches italienisches Menü mit traditionellen Gerichten, Empfehlungen des Küchenchefs und saisonalen Spezialitäten.",
      metaKeywords:
        "Italienische Speisekarte, authentisches italienisches Essen, Empfehlungen des Küchenchefs, italienisches Restaurant",
      ogTitle: "Menüerlebnis - Bigspontino",
      ogDescription:
        "Entdecken Sie authentische italienische Küche mit unserem interaktiven Menüerlebnis.",
      blocks: ["Brunch", "Mittagessen", "Abendessen", "Bar"],
      pdfLabel: "Gesamte Speisekarte herunterladen (PDF)"
    }
  };

  const t = content[language] || content.EN;

const menuBlocks = [
  {
    title: t.blocks[0], // Brunch
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80", // Elegant brunch table
  },
  {
    title: t.blocks[1], // Lunch
    image: "https://chenabgourmet.b-cdn.net/wp-content/uploads/2021/06/italian-food.jpeg", // Italian lunch pasta
  },
  {
    title: t.blocks[2], // Dinner
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-JdllKQtbGRG5MlPX1onOz1wFtS7aQ1e0Dw&s", // Romantic Italian dinner
  },
  {
    title: t.blocks[3], // Bar
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfTuDN4do9dL8v6EGAgLsYXwYdDqaNkbqAeA&s", // Stylish cocktail bar
  },
];


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

        <main className="">
          <MenuHero language={language} />

          {/* Menu Blocks Section */}
          <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuBlocks.map((block, index) => (
                <div
                  key={index}
                  className="relative group rounded-xl overflow-hidden shadow-lg border border-muted bg-white"
                >
                  <Image
                    src={block.image}
                    alt={block.title}
                    className="w-full h-56 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold z-10 drop-shadow-md">
                    {block.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* PDF Button */}
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => window.open("/menu.pdf", "_blank")}
              >
                {t.pdfLabel}
              </Button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default MenuExperience;
