import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";
import Button from "./Button";
import OpeningHoursPill from "components/OpeningHoursPill";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const location = useLocation();
  const tooltipRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    setCurrentLanguage(localStorage.getItem("language") || "EN");

    // Close tooltip if clicking outside
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setIsTooltipOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleTooltip = () => setIsTooltipOpen(!isTooltipOpen);
  const isActivePath = (path) => location.pathname === path;

  const navTexts = {
    EN: {
      home: "Home",
      menu: "Il Menu",
      events: "Events",
      history: "Our History",
      impressions: "Impressions",
      contact: "Contact",
      jobs: "Jobs",
      callNow: "Call Now",
      reserve: "Reserve Table",
      menuTitle: "Menu",
      openingHoursTitle: "Opening Hours",
      openingHoursText: (
        <>
          Wed–Fri: 11 am – 11 pm
          <br />
          Sat: 10 am – 11 pm
          <br />
          Sun: 10 am – 5 pm
        </>
      ),
    },
    DE: {
      home: "Startseite",
      menu: "Menü",
      events: "Veranstaltungen",
      history: "Geschichte",
      impressions: "Bildgalerie",
      contact: "Kontakt",
      jobs: "Jobs",
      callNow: "Jetzt Anrufen",
      reserve: "Tisch Reservieren",
      menuTitle: "Menü",
      openingHoursTitle: "Öffnungszeiten",
      openingHoursText: (
        <>
          Mi–Fr: 11 Uhr – 23 Uhr
          <br />
          Sa: 10 Uhr – 23 Uhr
          <br />
          So: 10 Uhr – 17 Uhr
        </>
      ),
    },
  };

  const t = navTexts[currentLanguage];

  const navigationItems = [
    { label: t.home, path: "/", icon: "Home" },
    { label: t.menu, path: "/menu-experience", icon: "ChefHat" },
    { label: t.events, path: "/events", icon: "Calendar" },
    { label: t.history, path: "/our-story-universe", icon: "BookOpen" },
    { label: t.impressions, path: "/impressions", icon: "Camera" },
    { label: t.contact, path: "/contact-location", icon: "MapPin" },
    { label: t.jobs, path: "/jobs", icon: "Briefcase" },
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-warm bg-[#fdf5e6] ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="w-full relative">
        <div className="flex items-center justify-between h-16 xl:h-20 px-4 xl:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group transition-warm hover:scale-105"
            onClick={closeMenu}
          >
            <div className="relative">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                className="text-primary group-hover:text-accent transition-warm"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  fill="currentColor"
                  opacity="0.1"
                />
                <path
                  d="M12 20c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z"
                  fill="currentColor"
                />
                <circle cx="20" cy="20" r="3" fill="var(--color-background)" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-playfair font-bold text-xl xl:text-2xl text-primary group-hover:text-accent transition-warm">
                Bigspontino
              </h1>
              <p className="font-dancing text-sm text-muted-foreground -mt-1">
                Authentic Italian Soul
              </p>
            </div>
          </Link>

          {/* Nav items centered on desktop */}
          <nav className="hidden xl:flex  2xl:text-base text-sm absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md font-medium transition-warm ${
                  isActivePath(item.path)
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span className="whitespace-nowrap">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Burger Icon for tablet & mobile */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/5 transition-warm xl:hidden ml-3"
            aria-label="Toggle menu"
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              size={24}
              className="transition-warm"
            />
          </button>
        </div>

        {/* Slide-in Menu Drawer (mobile/tablet only) */}
        <div
          className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-background shadow-xl z-50 transition-transform duration-300 transform xl:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full px-6 py-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-xl">{t.menuTitle}</h2>
              <button onClick={closeMenu} aria-label="Close menu">
                <Icon name="X" size={24} />
              </button>
            </div>

            <nav className="space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md font-medium transition-warm ${
                    isActivePath(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-6 border-t border-muted">
              <Button
                variant="outline"
                fullWidth
                iconName="Phone"
                iconPosition="left"
              >
                {t.callNow}
              </Button>
              <Button
                variant="default"
                fullWidth
                iconName="Calendar"
                iconPosition="left"
                className="bg-conversion-gold hover:bg-conversion-gold/90"
              >
                {t.reserve}
              </Button>
            </div>
          </div>
        </div>
        {/* opening hours rendering */}
        <div>
          <OpeningHoursPill />
        </div>
      </div>
    </header>
  );
};

export default Header;
