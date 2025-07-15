import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";

import Button from "../../../components/ui/Button";

const HeroSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentLanguage, setCurrentLanguage] = useState("EN");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "EN";
    setCurrentLanguage(savedLanguage);

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "EN" ? "DE" : "EN";
    setCurrentLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const getTimeBasedContent = () => {
    const hour = currentTime.getHours();

    if (hour >= 6 && hour < 12) {
      return {
        video:
          "https://images.pexels.com/videos/3195394/pexels-video-3195394.mp4",
        title:
          currentLanguage === "EN"
            ? "Morning Pasta Artistry"
            : "Morgen Pasta Kunst",
        subtitle:
          currentLanguage === "EN"
            ? "Fresh handmade pasta begins each day"
            : "Frische handgemachte Pasta beginnt jeden Tag",
      };
    } else if (hour >= 12 && hour < 18) {
      return {
        video:
          "https://images.pexels.com/videos/4253312/pexels-video-4253312.mp4",
        title:
          currentLanguage === "EN"
            ? "Afternoon Wine Service"
            : "Nachmittag Weinservice",
        subtitle:
          currentLanguage === "EN"
            ? "Curated Italian wines for every palate"
            : "Kuratierte italienische Weine für jeden Gaumen",
      };
    } else {
      return {
        video:
          "https://images.pexels.com/videos/4253285/pexels-video-4253285.mp4",
        title:
          currentLanguage === "EN"
            ? "Evening Candlelit Dining"
            : "Abend Kerzenlicht Dining",
        subtitle:
          currentLanguage === "EN"
            ? "Intimate dining under warm candlelight"
            : "Intimes Essen bei warmem Kerzenlicht",
      };
    }
  };

  const timeContent = getTimeBasedContent();

  const content = {
    EN: {
      mainHeadline: "Where Italian Soul Meets Culinary Artistry",
      description:
        "Experience authentic Italian cuisine crafted with passion, tradition, and the finest ingredients from across Italy.",
      reserveButton: "Reserve Your Table",
      exploreButton: "Explore Our Story",
      languageLabel: "Language",
    },
    DE: {
      mainHeadline: "Wo Italienische Seele auf Kulinarische Kunst trifft",
      description:
        "Erleben Sie authentische italienische Küche, die mit Leidenschaft, Tradition und den besten Zutaten aus ganz Italien zubereitet wird.",
      reserveButton: "Tisch Reservieren",
      exploreButton: "Unsere Geschichte Entdecken",
      languageLabel: "Sprache",
    },
  };

  return (
    <section className="relative min-h-screen h-max flex items-center justify-center overflow-hidden ">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full object-cover "
          src="https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png"
        ></img>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Language Toggle */}
      <div className="absolute top-24 right-4 lg:right-8 z-20">
        <div className="flex items-center space-x-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-warm">
          <Icon name="Globe" size={16} className="text-white" />
          <span className="text-sm font-medium text-white">
            {content[currentLanguage].languageLabel}:
          </span>
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-warm"
          >
            <span>{currentLanguage}</span>
            <Icon name="ChevronDown" size={14} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 lg:px-8 max-w-6xl mx-auto">
    

        {/* Main Headline */}
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow-warm leading-tight">
          {content[currentLanguage].mainHeadline}
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-white mb-12 max-w-2xl mx-auto">
          {content[currentLanguage].description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to="/reservation-experience">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-conversion-gold hover:bg-conversion-gold/90 text-conversion-gold-foreground font-montserrat shadow-warm-lg px-8 py-4 text-lg"
            >
              {content[currentLanguage].reserveButton}
            </Button>
          </Link>

          <Link to="/our-story-universe">
            <Button
              variant="outline"
              size="lg"
              iconName="Heart"
              iconPosition="left"
              className="border-background/30 text-background text-black hover:bg-background/10 font-montserrat px-8 py-4 text-lg backdrop-blur-sm"
            >
              {content[currentLanguage].exploreButton}
            </Button>
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 opacity-20 hidden lg:block">
        <div className="w-32 h-32 border-2 border-accent rounded-full animate-pulse"></div>
      </div>

      <div className="absolute bottom-1/4 right-8 opacity-20 hidden lg:block">
        <div className="w-24 h-24 border-2 border-golden rounded-full animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default HeroSection;
