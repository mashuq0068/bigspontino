import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Menu Experience', path: '/menu-experience', icon: 'ChefHat' },
    { name: 'Our Story', path: '/our-story-universe', icon: 'Heart' },
    { name: 'Reservations', path: '/reservation-experience', icon: 'Calendar' },
    { name: 'Italian Culture', path: '/italian-culture-corner', icon: 'BookOpen' },
    { name: 'Contact', path: '/contact-location', icon: 'MapPin' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-warm bg-[#fdf5e6]" 
      
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 lg:h-20 px-4 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage" 
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
                <circle 
                  cx="20" 
                  cy="20" 
                  r="3" 
                  fill="var(--color-background)"
                />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-playfair font-bold text-xl lg:text-2xl text-primary group-hover:text-accent transition-warm">
                Bigspontino
              </h1>
              <p className="font-dancing text-sm text-muted-foreground -mt-1">
                Authentic Italian Soul
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-warm group ${
                  isActivePath(item.path)
                    ? 'text-primary bg-primary/10' :'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                <Icon 
                  name={item.icon} 
                  size={16} 
                  className="group-hover:scale-110 transition-warm" 
                />
                <span>{item.name}</span>
                {isActivePath(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Phone"
              iconPosition="left"
              className="font-montserrat"
            >
              Call Now
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Calendar"
              iconPosition="left"
              className="bg-conversion-gold hover:bg-conversion-gold/90 font-montserrat shadow-warm"
            >
              Reserve Table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/5 transition-warm"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="transition-warm" 
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-warm overflow-hidden ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 bg-background/95 backdrop-blur-sm border-b border-warm' :'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-warm ${
                  isActivePath(item.path)
                    ? 'text-primary bg-primary/10 border-l-4 border-primary' :'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-3 border-t border-warm mt-4">
              <Button
                variant="outline"
                fullWidth
                iconName="Phone"
                iconPosition="left"
                className="font-montserrat"
              >
                Call Now
              </Button>
              <Button
                variant="default"
                fullWidth
                iconName="Calendar"
                iconPosition="left"
                className="bg-conversion-gold bg-conversion-gold/90 font-montserrat shadow-warm"
              >
                Reserve Your Table
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;