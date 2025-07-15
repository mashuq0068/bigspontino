import React from 'react';
import DishCard from './DishCard';
import Icon from '../../../components/AppIcon';

const MenuSection = ({ onAddToExperience }) => {

  // Localized menu data
 const dishes = [
  {
    id: "ant-1",
    name: {
      EN: "Burrata Pugliese",
      DE: "Burrata Pugliese",
    },
    italianName: {
      EN: "Fresh burrata from Puglia",
      DE: "Frische Burrata aus Apulien",
    },
    description: {
      EN: "Creamy burrata cheese served with San Marzano tomatoes, fresh basil, and extra virgin olive oil from our partner farm in Puglia.",
      DE: "Cremiger Burrata-Käse serviert mit San-Marzano-Tomaten, frischem Basilikum und nativem Olivenöl extra von unserem Partnerhof in Apulien.",
    },
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: 18.5,
    ingredients: ["Burrata cheese", "San Marzano tomatoes", "Fresh basil", "Extra virgin olive oil", "Sea salt"],
    preparationTime: 5,
  },
  {
    id: "ant-2",
    name: {
      EN: "Crudo di Tonno",
      DE: "Crudo di Tonno",
    },
    italianName: {
      EN: "Sicilian tuna crudo",
      DE: "Sizilianisches Thunfisch-Carpaccio",
    },
    description: {
      EN: "Fresh yellowfin tuna from Sicily, thinly sliced and dressed with Ligurian olive oil, lemon, and wild fennel pollen.",
      DE: "Frischer Gelbflossen-Thunfisch aus Sizilien, dünn geschnitten und mit ligurischem Olivenöl, Zitrone und wildem Fenchelpollen serviert.",
    },
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: 24.0,
    ingredients: ["Yellowfin tuna", "Ligurian olive oil", "Lemon", "Wild fennel pollen", "Sea salt flakes"],
    preparationTime: 10,
  },
  {
    id: "ant-3",
    name: {
      EN: "Antipasto della Casa",
      DE: "Antipasto della Casa",
    },
    italianName: {
      EN: "House selection of cured meats and cheeses",
      DE: "Hausgemachte Auswahl an Wurstwaren und Käse",
    },
    description: {
      EN: "Curated selection of Italian cured meats, aged cheeses, marinated vegetables, and homemade preserves.",
      DE: "Ausgewählte italienische Wurstwaren, gereifte Käsesorten, marinierte Gemüse und hausgemachte Konserven.",
    },
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: 32.0,
    ingredients: ["Prosciutto di Parma", "Salame Milano", "Gorgonzola DOP", "Parmigiano-Reggiano", "Marinated olives", "Homemade mostarda"],
    preparationTime: 15,
  },
  {
    id: "pri-1",
    name: {
      EN: "Cacio e Pepe",
      DE: "Cacio e Pepe",
    },
    italianName: {
      EN: "Traditional Roman pasta",
      DE: "Traditionelle römische Pasta",
    },
    description: {
      EN: "Hand-pulled tonnarelli pasta with Pecorino Romano DOP and freshly cracked black pepper. Simple perfection.",
      DE: "Handgezogene Tonnarelli mit Pecorino Romano DOP und frisch gemahlenem Pfeffer. Einfach perfekt.",
    },
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: 22.0,
    ingredients: ["Tonnarelli pasta", "Pecorino Romano DOP", "Black pepper", "Pasta water"],
    preparationTime: 12,
  },
  {
    id: "pri-2",
    name: {
      EN: "Risotto ai Porcini",
      DE: "Risotto ai Porcini",
    },
    italianName: {
      EN: "Porcini mushroom risotto",
      DE: "Risotto mit Steinpilzen",
    },
    description: {
      EN: "Carnaroli rice slowly cooked with porcini mushrooms, finished with Parmigiano-Reggiano and truffle oil.",
      DE: "Carnaroli-Reis langsam mit Steinpilzen gegart, verfeinert mit Parmigiano-Reggiano und Trüffelöl.",
    },
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: 26.5,
    ingredients: ["Carnaroli rice", "Porcini mushrooms", "Vegetable stock", "Parmigiano-Reggiano", "White wine", "Truffle oil"],
    preparationTime: 25,
  },
  {
    id: "sec-1",
    name: {
      EN: "Branzino in Crosta di Sale",
      DE: "Branzino in Salzteig",
    },
    italianName: {
      EN: "Sea bass baked in salt crust",
      DE: "Im Salzteig gebackener Wolfsbarsch",
    },
    description: {
      EN: "Whole Mediterranean sea bass baked in aromatic salt crust with herbs, served with salmoriglio sauce.",
      DE: "Ganzer mediterraner Wolfsbarsch in aromatischer Salzkruste gebacken, serviert mit Salmoriglio-Sauce.",
    },
    image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: 42.0,
    ingredients: ["Mediterranean sea bass", "Coarse sea salt", "Fresh herbs", "Lemon", "Olive oil", "Oregano"],
    preparationTime: 35,
  },
  {
    id: "sec-2",
    name: {
      EN: "Bistecca alla Fiorentina",
      DE: "Bistecca alla Fiorentina",
    },
    italianName: {
      EN: "Florentine T-bone steak",
      DE: "Florentiner T-Bone-Steak",
    },
    description: {
      EN: "Dry-aged Chianina beef T-bone steak, grilled over olive wood and finished with rosemary and garlic.",
      DE: "Trocken gereiftes Chianina-Rindsteak, über Olivenholz gegrillt und mit Rosmarin und Knoblauch verfeinert.",
    },
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: 65.0,
    ingredients: ["Chianina beef", "Rosemary", "Garlic", "Extra virgin olive oil", "Sea salt", "Black pepper"],
    preparationTime: 20,
  },
  {
    id: "dol-1",
    name: {
      EN: "Cannoli Siciliani",
      DE: "Cannoli Siciliani",
    },
    italianName: {
      EN: "Traditional Sicilian cannoli",
      DE: "Traditionelle sizilianische Cannoli",
    },
    description: {
      EN: "Crispy pastry shells filled with fresh ricotta, candied fruits, and chocolate chips, dusted with powdered sugar.",
      DE: "Knusprige Teigrollen gefüllt mit frischer Ricotta, kandierten Früchten und Schokostückchen, bestäubt mit Puderzucker.",
    },
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: 14.5,
    ingredients: ["Pastry shells", "Fresh ricotta", "Candied fruits", "Chocolate chips", "Powdered sugar", "Pistachio"],
    preparationTime: 8,
  },
];


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