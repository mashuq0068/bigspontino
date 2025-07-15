import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import MenuHero from "./components/MenuHero";
import MenuSection from "./components/MenuSection";
import ExperienceBuilder from "./components/ExperienceBuilder";

const MenuExperience = () => {
  const [selectedDishes, setSelectedDishes] = useState([]);

  // Mock menu data
  const menuData = [
    {
      id: "ant-1",
      name: "Burrata Pugliese",
      italianName: "Fresh burrata from Puglia",
      description:
        "Creamy burrata cheese served with San Marzano tomatoes, fresh basil, and extra virgin olive oil from our partner farm in Puglia.",
      image:
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: 18.5,
      category: "antipasti",
      ingredients: [
        "Burrata cheese",
        "San Marzano tomatoes",
        "Fresh basil",
        "Extra virgin olive oil",
        "Sea salt",
      ],
      dietary: ["vegetarian"],
      winePairing: {
        wine: "Vermentino di Sardegna DOC",
        note: "The crisp acidity complements the creamy texture perfectly",
      },
      origin:
        "This Burrata arrives fresh from Puglia's Caseificio Andria, made daily using traditional methods passed down through generations.",
      preparationTime: 5,
      portionSize: "Serves 2",
      isChefRecommendation: false,
      isSeasonal: false,
    },
    {
      id: "ant-2",
      name: "Crudo di Tonno",
      italianName: "Sicilian tuna crudo",
      description:
        "Fresh yellowfin tuna from Sicily, thinly sliced and dressed with Ligurian olive oil, lemon, and wild fennel pollen.",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: 24.0,
      category: "antipasti",
      ingredients: [
        "Yellowfin tuna",
        "Ligurian olive oil",
        "Lemon",
        "Wild fennel pollen",
        "Sea salt flakes",
      ],
      dietary: ["gluten-free"],
      winePairing: {
        wine: "Greco di Tufo DOCG",
        note: "Mineral notes enhance the ocean freshness of the tuna",
      },
      origin:
        "Our tuna is sourced from sustainable fisheries in the waters around Sicily, delivered fresh daily.",
      preparationTime: 10,
      portionSize: "Individual",
      isChefRecommendation: true,
      isSeasonal: false,
    },
    {
      id: "ant-3",
      name: "Antipasto della Casa",
      italianName: "House selection of cured meats and cheeses",
      description:
        "Curated selection of Italian cured meats, aged cheeses, marinated vegetables, and homemade preserves.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: 32.0,
      category: "antipasti",
      ingredients: [
        "Prosciutto di Parma",
        "Salame Milano",
        "Gorgonzola DOP",
        "Parmigiano-Reggiano",
        "Marinated olives",
        "Homemade mostarda",
      ],
      dietary: [],
      winePairing: {
        wine: "Chianti Classico DOCG",
        note: "The perfect companion for cured meats and aged cheeses",
      },
      origin:
        "Each component is carefully selected from our trusted suppliers across Italy, representing the best of regional specialties.",
      preparationTime: 15,
      portionSize: "Serves 2-3",
      isChefRecommendation: false,
      isSeasonal: false,
    },

    {
      id: "pri-1",
      name: "Cacio e Pepe",
      italianName: "Traditional Roman pasta",
      description:
        "Hand-pulled tonnarelli pasta with Pecorino Romano DOP and freshly cracked black pepper. Simple perfection.",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: 22.0,
      category: "primi",
      ingredients: [
        "Tonnarelli pasta",
        "Pecorino Romano DOP",
        "Black pepper",
        "Pasta water",
      ],
      dietary: ["vegetarian"],
      winePairing: {
        wine: "Frascati Superiore DOCG",
        note: "A classic Roman pairing that never fails",
      },
      origin:
        "This iconic Roman dish requires perfect technique - the pasta water temperature and timing are crucial for the creamy texture.",
      preparationTime: 12,
      portionSize: "Individual",
      isChefRecommendation: true,
      isSeasonal: false,
    },
    {
      id: "pri-2",
      name: "Risotto ai Porcini",
      italianName: "Porcini mushroom risotto",
      description:
        "Carnaroli rice slowly cooked with porcini mushrooms, finished with Parmigiano-Reggiano and truffle oil.",
      image:
        "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: 26.5,
      category: "primi",
      ingredients: [
        "Carnaroli rice",
        "Porcini mushrooms",
        "Vegetable stock",
        "Parmigiano-Reggiano",
        "White wine",
        "Truffle oil",
      ],
      dietary: ["vegetarian"],
      winePairing: {
        wine: "Barolo DOCG",
        note: "The earthy mushrooms pair beautifully with this robust wine",
      },
      origin:
        "Our porcini mushrooms are sourced from the forests of Umbria, where they grow wild in the autumn months.",
      preparationTime: 25,
      portionSize: "Individual",
      isChefRecommendation: false,
      isSeasonal: true,
    },

    {
      id: "sec-1",
      name: "Branzino in Crosta di Sale",
      italianName: "Sea bass baked in salt crust",
      description:
        "Whole Mediterranean sea bass baked in aromatic salt crust with herbs, served with salmoriglio sauce.",
      image:
        "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: 42.0,
      category: "secondi",
      ingredients: [
        "Mediterranean sea bass",
        "Coarse sea salt",
        "Fresh herbs",
        "Lemon",
        "Olive oil",
        "Oregano",
      ],
      dietary: ["gluten-free"],
      winePairing: {
        wine: "Vermentino di Gallura DOCG",
        note: "The mineral notes complement the delicate fish perfectly",
      },
      origin:
        "Our sea bass is sourced from sustainable Mediterranean fisheries, ensuring the highest quality and freshness.",
      preparationTime: 35,
      portionSize: "Serves 2",
      isChefRecommendation: true,
      isSeasonal: false,
    },
    {
      id: "sec-2",
      name: "Bistecca alla Fiorentina",
      italianName: "Florentine T-bone steak",
      description:
        "Dry-aged Chianina beef T-bone steak, grilled over olive wood and finished with rosemary and garlic.",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: 65.0,
      category: "secondi",
      ingredients: [
        "Chianina beef",
        "Rosemary",
        "Garlic",
        "Extra virgin olive oil",
        "Sea salt",
        "Black pepper",
      ],
      dietary: ["gluten-free"],
      winePairing: {
        wine: "Brunello di Montalcino DOCG",
        note: "A legendary pairing from Tuscany",
      },
      origin:
        "Our Chianina beef comes from certified farms in Tuscany, dry-aged for 28 days to develop exceptional flavor.",
      preparationTime: 20,
      portionSize: "Serves 2-3",
      isChefRecommendation: false,
      isSeasonal: false,
    },
    {
      id: "dol-1",
      name: "Cannoli Siciliani",
      italianName: "Traditional Sicilian cannoli",
      description:
        "Crispy pastry shells filled with fresh ricotta, candied fruits, and chocolate chips, dusted with powdered sugar.",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: 14.5,
      category: "dolci",
      ingredients: [
        "Pastry shells",
        "Fresh ricotta",
        "Candied fruits",
        "Chocolate chips",
        "Powdered sugar",
        "Pistachio",
      ],
      dietary: ["vegetarian"],
      winePairing: {
        wine: "Passito di Pantelleria DOC",
        note: "The sweetness complements the ricotta filling beautifully",
      },
      origin:
        "Our cannoli shells are made fresh daily using a traditional Sicilian recipe, filled only when ordered to maintain crispness.",
      preparationTime: 8,
      portionSize: "3 pieces",
      isChefRecommendation: false,
      isSeasonal: false,
    },
  ];

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
        <title>
          Menu Experience - Bigspontino | Authentic Italian Culinary Journey
        </title>
        <meta
          name="description"
          content="Explore our authentic Italian menu featuring traditional dishes, chef's recommendations, and seasonal specialties. Each dish tells a story of Italian heritage and culinary mastery."
        />
        <meta
          name="keywords"
          content="Italian menu, authentic Italian food, chef recommendations, Italian restaurant, traditional recipes, seasonal dishes"
        />
        <meta property="og:title" content="Menu Experience - Bigspontino" />
        <meta
          property="og:description"
          content="Discover authentic Italian cuisine with our interactive menu experience. From antipasti to dolci, each dish represents the soul of Italian culinary tradition."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/menu-experience" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-16 lg:pt-20">
          <MenuHero />

          <MenuSection
            dishes={menuData}
            onAddToExperience={handleAddToExperience}
          />

          <ExperienceBuilder
            selectedDishes={selectedDishes}
            onRemoveDish={handleRemoveDish}
            onClearAll={handleClearAll}
          />
        </main>
      </div>
    </>
  );
};

export default MenuExperience;
