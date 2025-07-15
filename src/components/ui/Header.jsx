import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    setCurrentLanguage(localStorage.getItem('language') || 'EN');

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const isActivePath = (path) => location.pathname === path;

  const navTexts = {
  EN: {
    home: 'Home',
    menu: 'Menu Experience',
    story: 'Our Story',
    culture: 'Italian Culture',
    contact: 'Contact',
    reservation: 'Reservation',
    callNow: 'Call Now',
    reserve: 'Reserve Table',
  },
  DE: {
    home: 'Startseite',
    menu: 'Menü Erlebnis',
    story: 'Unsere Geschichte',
    culture: 'Italienische Kultur',
    contact: 'Kontakt',
    reservation: 'Reservierung',
    callNow: 'Jetzt Anrufen',
    reserve: 'Tisch Reservieren',
  }
};


  const t = navTexts[currentLanguage];

 const navigationItems = [
  { label: t.home, path: '/homepage', icon: 'Home' },
  { label: t.menu, path: '/menu-experience', icon: 'ChefHat' },
  { label: t.story, path: '/our-story-universe', icon: 'Heart' },
  { label: t.culture, path: '/italian-culture-corner', icon: 'BookOpen' },
  { label: t.reservation, path: '/reservation-experience', icon: 'Calendar' }, // ✅ Added Reservation tab
  { label: t.contact, path: '/contact-location', icon: 'MapPin' }
];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-warm bg-[#fdf5e6] ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="w-full">
        <div className="flex items-center justify-between h-16 lg:h-20 px-4 lg:px-8">
          {/* Logo */}
          <Link
            to="/homepage"
            className="flex items-center space-x-3 group transition-warm hover:scale-105"
            onClick={closeMenu}
          >
            <div className="relative">
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-primary group-hover:text-accent transition-warm">
                <circle cx="20" cy="20" r="18" fill="currentColor" opacity="0.1" />
                <path d="M12 20c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z" fill="currentColor" />
                <circle cx="20" cy="20" r="3" fill="var(--color-background)" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-playfair font-bold text-xl lg:text-2xl text-primary group-hover:text-accent transition-warm">Bigspontino</h1>
              <p className="font-dancing text-sm text-muted-foreground -mt-1">Authentic Italian Soul</p>
            </div>
          </Link>


          {/* Burger Icon (Always Visible) */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/5 transition-warm"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} className="transition-warm" />
          </button>
        </div>

        {/* Slide-in Menu Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-background shadow-lg z-50 transition-transform duration-300 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full px-6 py-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-lg">{currentLanguage === 'EN' ? 'Menu' : 'Menü'}</h2>
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
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* CTA Buttons in Drawer */}
            <div className="mt-auto space-y-3 pt-6 border-t border-muted">
              <Button variant="outline" fullWidth iconName="Phone" iconPosition="left">
                {t.callNow}
              </Button>
              <Button variant="default" fullWidth iconName="Calendar" iconPosition="left" className="bg-conversion-gold hover:bg-conversion-gold/90">
                {t.reserve}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
