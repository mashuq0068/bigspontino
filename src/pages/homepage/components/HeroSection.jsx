import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";

import Button from "../../../components/ui/Button";

const HeroSection = () => {
  const [currentLanguage, setCurrentLanguage] = useState("EN");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "EN";
    setCurrentLanguage(savedLanguage);
  }, []);

  const content = {
    EN: {
      mainHeadline: "Bigspontino",
      description:
        "The small, fine day bar in the middle of lively Winterhude for the ‘big times",
      reserveButton: "Reserve Your Table",
      exploreButton: "Explore Our Story",
      languageLabel: "Language",
    },
    DE: {
      mainHeadline: "Bigspontino",
      description:
        "Die kleine, feine Day-Bar mitten im lebendigen Winterhude für die ‘großen Zeiten’.",
      reserveButton: "Tisch Reservieren",
      exploreButton: "Unsere Geschichte Entdecken",
      languageLabel: "Sprache",
    },
  };

  return (
    <section className="relative min-h-[90vh] h-max flex items-center justify-center overflow-hidden ">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://storage.googleapis.com/bucket-giorgia-strapi/COCKTAIL_V2_DEF_7f3abcc8b0/COCKTAIL_V2_DEF_7f3abcc8b0.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 md:mt-0 mt-12 text-center px-4 lg:px-8 max-w-6xl mx-auto">
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
              className="bg-conversion-gold hover:bg-conversion-gold/90 text-conversion-gold-foreground  shadow-warm-lg px-8 py-4 text-lg"
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
              className="border-background/30 text-background text-black hover:bg-background/10  px-8 py-4 text-lg backdrop-blur-sm"
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
      {/* explore scroll */}
      <div className="absolute bottom-8 left-[40vw] md:left-[45vw] lg:left-1/2 transform -translate-x-1/2 text-center animate-gentle-bounce">
        <p className="text-[#fdf5e6] text-lg font-medium tracking-wide">
          {currentLanguage === "DE" ? "Entdecken" : "Explore"}
        </p>
        <Icon
          name="ChevronDown"
          size={32}
          className="text-white/60 mx-auto mt-1"
        />
      </div>
    </section>
  );
};

export default HeroSection;
