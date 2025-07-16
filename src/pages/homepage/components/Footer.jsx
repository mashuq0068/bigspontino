import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const [currentLanguage, setCurrentLanguage] = useState('EN');
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'EN';
    setCurrentLanguage(savedLanguage);
  }, []);

  const content = {
    EN: {
      tagline: "Authentic Italian Soul",
      description: "Where every dish tells a story of heritage, every ingredient carries the essence of its terroir, and every meal becomes a celebration of life itself.",
      quickLinks: "Quick Links",
      contact: "Contact Us",
      followUs: "Follow Our Journey",
      newsletter: "Stay Connected",
      newsletterText: "Receive updates about seasonal menus, cultural events, and Italian traditions.",
      subscribe: "Subscribe",
      emailPlaceholder: "Enter your email",
      address: "Maximilianstraße 42, 80538 Munich, Germany",
      phone: "+49 89 123 456 789",
      email: "info@bigspontino.com",
      hours: "Opening Hours",
      mondayFriday: "Monday - Friday: 17:00 - 23:00",
      saturday: "Saturday: 12:00 - 23:30",
      sunday: "Sunday: 12:00 - 22:00",
      copyright: "All rights reserved. Crafted with passion for authentic Italian cuisine.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      socialLinks: {
        instagram: "Follow our culinary journey",
        facebook: "Join our community",
        twitter: "Latest updates"
      }
    },
    DE: {
      tagline: "Authentische Italienische Seele",
      description: "Wo jedes Gericht eine Geschichte des Erbes erzählt, jede Zutat die Essenz ihres Terroirs trägt und jede Mahlzeit zu einer Feier des Lebens selbst wird.",
      quickLinks: "Schnelle Links",
      contact: "Kontakt",
      followUs: "Folgen Sie unserer Reise",
      newsletter: "Bleiben Sie verbunden",
      newsletterText: "Erhalten Sie Updates über saisonale Menüs, kulturelle Veranstaltungen und italienische Traditionen.",
      subscribe: "Abonnieren",
      emailPlaceholder: "E-Mail eingeben",
      address: "Maximilianstraße 42, 80538 München, Deutschland",
      phone: "+49 89 123 456 789",
      email: "info@bigspontino.com",
      hours: "Öffnungszeiten",
      mondayFriday: "Montag - Freitag: 17:00 - 23:00",
      saturday: "Samstag: 12:00 - 23:30",
      sunday: "Sonntag: 12:00 - 22:00",
      copyright: "Alle Rechte vorbehalten. Mit Leidenschaft für authentische italienische Küche gefertigt.",
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      socialLinks: {
        instagram: "Folgen Sie unserer kulinarischen Reise",
        facebook: "Treten Sie unserer Gemeinschaft bei",
        twitter: "Neueste Updates"
      }
    }
  };

  const navigationLinks = [
    { name: { EN: 'Home', DE: 'Startseite' }, path: '/homepage' },
    { name: { EN: 'Menu', DE: 'Menü' }, path: '/menu-experience' },
    { name: { EN: 'Our Story', DE: 'Unsere Geschichte' }, path: '/our-story-universe' },
    { name: { EN: 'Reservations', DE: 'Reservierungen' }, path: '/reservation-experience' },
    { name: { EN: 'Culture', DE: 'Kultur' }, path: '/italian-culture-corner' },
    { name: { EN: 'Contact', DE: 'Kontakt' }, path: '/contact-location' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'Instagram', url: '#', label: content[currentLanguage].socialLinks.instagram },
    { name: 'Facebook', icon: 'Facebook', url: '#', label: content[currentLanguage].socialLinks.facebook },
    { name: 'Twitter', icon: 'Twitter', url: '#', label: content[currentLanguage].socialLinks.twitter }
  ];

  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/homepage" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 40 40" 
                  className="text-golden group-hover:text-accent transition-warm"
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
                    fill="var(--color-charcoal)"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl text-golden group-hover:text-accent transition-warm">
                  Bigspontino
                </h3>
                <p className="font-dancing text-sm text-charcoal-foreground/80 -mt-1">
                  {content[currentLanguage].tagline}
                </p>
              </div>
            </Link>
            
            <p className="text-charcoal-foreground/80 text-sm leading-relaxed mb-6">
              {content[currentLanguage].description}
            </p>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-golden mb-4">
                {content[currentLanguage].followUs}
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 bg-charcoal-foreground/10 hover:bg-golden/20 rounded-full flex items-center justify-center transition-warm group"
                    aria-label={social.label}
                  >
                    <Icon 
                      name={social.icon} 
                      size={18} 
                      className="text-charcoal-foreground/70 group-hover:text-golden transition-warm" 
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-golden mb-6">
              {content[currentLanguage].quickLinks}
            </h4>
            <nav className="space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-charcoal-foreground/80 hover:text-golden text-sm transition-warm"
                >
                  {link.name[currentLanguage]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-golden mb-6">
              {content[currentLanguage].contact}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={16} className="text-golden mt-1 flex-shrink-0" />
                <div>
                  <p className="text-charcoal-foreground/80 text-sm leading-relaxed">
                    {content[currentLanguage].address}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="text-golden flex-shrink-0" />
                <a 
                  href={`tel:${content[currentLanguage].phone}`}
                  className="text-charcoal-foreground/80 hover:text-golden text-sm transition-warm"
                >
                  {content[currentLanguage].phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-golden flex-shrink-0" />
                <a 
                  href={`mailto:${content[currentLanguage].email}`}
                  className="text-charcoal-foreground/80 hover:text-golden text-sm transition-warm"
                >
                  {content[currentLanguage].email}
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-6">
              <h5 className="font-semibold text-golden mb-3">
                {content[currentLanguage].hours}
              </h5>
              <div className="space-y-1 text-sm text-charcoal-foreground/80">
                <p>{content[currentLanguage].mondayFriday}</p>
                <p>{content[currentLanguage].saturday}</p>
                <p>{content[currentLanguage].sunday}</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-golden mb-6">
              {content[currentLanguage].newsletter}
            </h4>
            <p className="text-charcoal-foreground/80 text-sm leading-relaxed mb-6">
              {content[currentLanguage].newsletterText}
            </p>
            
            <div className="space-y-3">
              <input
                type="email"
                placeholder={content[currentLanguage].emailPlaceholder}
                className="w-full px-4 py-3 rounded-lg bg-charcoal-foreground/10 border border-charcoal-foreground/20 text-charcoal-foreground placeholder-charcoal-foreground/60 focus:outline-none focus:ring-2 focus:ring-golden/50 focus:border-golden/50 transition-warm"
              />
              <Button
                variant="default"
                fullWidth
                iconName="Send"
                iconPosition="right"
                className="bg-golden hover:bg-golden/90 text-golden-foreground "
              >
                {content[currentLanguage].subscribe}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-foreground/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-charcoal-foreground/60 text-sm">
                © {currentYear} Bigspontino. {content[currentLanguage].copyright}
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-charcoal-foreground/60 hover:text-golden text-sm transition-warm"
              >
                {content[currentLanguage].privacy}
              </a>
              <a 
                href="#" 
                className="text-charcoal-foreground/60 hover:text-golden text-sm transition-warm"
              >
                {content[currentLanguage].terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;