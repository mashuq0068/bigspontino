import React, { useState, useEffect } from "react";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import Icon from "components/AppIcon";
import EventsSection from "./components/EventsSection";

const Events = () => {
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  const content = {
    EN: {
      exploreTitle: "Explore Italy's Culture",
      exploreItems: [
        {
          title: "Regional Flavors",
          desc: "Taste the diversity from Tuscany to Sicily.",
          icon: "Utensils",
        },
        {
          title: "Timeless Traditions",
          desc: "Experience the heart of Italian heritage.",
          icon: "ScrollText",
        },
        {
          title: "Festivals & Joy",
          desc: "From Venice Carnival to village feasts.",
          icon: "PartyPopper",
        },
      ],
    },
    DE: {
      exploreTitle: "Entdecken Sie Italiens Kultur",
      exploreItems: [
        {
          title: "Regionale Geschmäcker",
          desc: "Genießen Sie die Vielfalt von der Toskana bis Sizilien.",
          icon: "Utensils",
        },
        {
          title: "Zeitlose Traditionen",
          desc: "Erleben Sie das Herz des italienischen Erbes.",
          icon: "ScrollText",
        },
        {
          title: "Feste & Freude",
          desc: "Vom Karneval in Venedig bis zu Dorffesten.",
          icon: "PartyPopper",
        },
      ],
    },
    IT: {
      exploreTitle: "Esplora la Cultura Italiana",
      exploreItems: [
        {
          title: "Sapori Regionali",
          desc: "Assapora la diversità dalla Toscana alla Sicilia.",
          icon: "Utensils",
        },
        {
          title: "Tradizioni Senza Tempo",
          desc: "Vivi il cuore del patrimonio italiano.",
          icon: "ScrollText",
        },
        {
          title: "Feste e Gioia",
          desc: "Dal Carnevale di Venezia alle sagre di paese.",
          icon: "PartyPopper",
        },
      ],
    },
  };

  const t = content[language] || content.EN;

  const mockFeaturedArticle = {
    title: {
      EN: "The Heartbeat of Italian Culture",
      DE: "Der Herzschlag der italienischen Kultur",
      IT: "Il Battito della Cultura Italiana",
    },
    excerpt: {
      EN: "A journey through Italy’s soul — from food to festivals.",
      DE: "Eine Reise durch Italiens Seele – von Essen bis zu Festen.",
      IT: "Un viaggio attraverso l'anima dell'Italia – dal cibo alle feste.",
    },
    image:
      "https://images.unsplash.com/photo-1608305828173-b519f837a588?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: {
      name: {
        EN: "Culture",
        DE: "Kultur",
        IT: "Cultura",
      },
      icon: "Globe",
    },
    author: {
      name: "Giovanni Rizzo",
      avatar: "https://randomuser.me/api/portraits/men/30.jpg",
      role: {
        EN: "Cultural Guide",
        DE: "Kulturführer",
        IT: "Guida Culturale",
      },
    },
    publishDate: "July 15, 2025",
    readTime: 5,
  };
  const highlights = [
    {
      image:
        "https://www.reise-idee.de/wp-content/uploads/bergkaeserei_allgaeuer-bergbauernmuseum-1-1200x800.jpg",
      title: {
        EN: "Artisan Cheese Making",
        DE: "Käseherstellung von Hand",
        IT: "Produzione Artigianale di Formaggio",
      },
      text: {
        EN: "Discover centuries-old traditions of Italian cheese making, passed down through generations.",
        DE: "Entdecken Sie jahrhundertealte Traditionen der italienischen Käseherstellung.",
        IT: "Scopri le tradizioni secolari della produzione di formaggio in Italia.",
      },
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXdhR8MdwJywTrAWcbhXzb6s9Aei5s-t0iA&",
      title: {
        EN: "Mediterranean Living",
        DE: "Mediterraner Lebensstil",
        IT: "Vivere Mediterraneo",
      },
      text: {
        EN: "The slow-paced, outdoor lifestyle defines much of southern Italy’s charm.",
        DE: "Der entspannte Lebensstil im Freien prägt den Charme Süditaliens.",
        IT: "Lo stile di vita lento e all'aperto definisce il fascino del sud Italia.",
      },
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTguNk55LFmndejQBr7pfhoZve-WM3GAaQkAQ&s",
      title: {
        EN: "Renaissance Heritage",
        DE: "Renaissance-Erbe",
        IT: "Eredità del Rinascimento",
      },
      text: {
        EN: "Italy’s architecture and art preserve the soul of the Renaissance.",
        DE: "Italiens Architektur und Kunst bewahren die Seele der Renaissance.",
        IT: "L'architettura e l'arte italiane conservano l'anima del Rinascimento.",
      },
    },
  ];

  const localizedFeatured = {
    ...mockFeaturedArticle,
    title: mockFeaturedArticle.title[language],
    excerpt: mockFeaturedArticle.excerpt[language],
    category: {
      ...mockFeaturedArticle.category,
      name: mockFeaturedArticle.category.name[language],
    },
    author: {
      ...mockFeaturedArticle.author,
      role: mockFeaturedArticle.author.role[language],
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="">
        <HeroSection featuredArticle={localizedFeatured} />

        <EventsSection />
      </main>
    </div>
  );
};

export default Events;
