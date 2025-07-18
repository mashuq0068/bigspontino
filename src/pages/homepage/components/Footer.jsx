import Icon from "components/AppIcon";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "EN";
    setCurrentLanguage(savedLanguage);
  }, []);

  const content = {
    EN: {
      tagline: "Authentic Italian Soul",
      description:
        "The Big Spuntino is a classic day bar where the Spuntini can be tasted all day long.",
      quickLinks: "Quick Links",
      contact: "Contact Us",
      followUs: "Follow Our Journey",
      newsletter: "Stay Connected",
      newsletterText:
        "Receive updates about seasonal menus, cultural events, and Italian traditions.",
      subscribe: "Subscribe",
      emailPlaceholder: "Enter your email",
      address: "Mühlenkamp 8, 22303 Hamburg, Germany",
      phone: "040 69 45 68 28",
      email: "mail@bigspuntino.de",
      hours: "Opening Hours",
      mondayFriday: "Wed – Fri: 11:00 – 23:00",
      saturday: "Saturday: 10:00 – 23:00",
      sunday: "Sunday: 10:00 – 17:00",
      copyright:
        "All rights reserved. Crafted with passion for authentic Italian cuisine.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      socialLinks: {
        instagram: "Follow our culinary journey",
        facebook: "Join our community",
        twitter: "Latest updates",
      },
    },
    DE: {
      tagline: "Authentische Italienische Seele",
      description:
        "Das Big Spuntino ist eine klassische Tagesbar, in denen die Spuntini ganztags verköstigt werden können.",
      quickLinks: "Schnelle Links",
      contact: "Kontakt",
      followUs: "Folgen Sie unserer Reise",
      newsletter: "Bleiben Sie verbunden",
      newsletterText:
        "Erhalten Sie Updates über saisonale Menüs, kulturelle Veranstaltungen und italienische Traditionen.",
      subscribe: "Abonnieren",
      emailPlaceholder: "E-Mail eingeben",
      address: "Mühlenkamp 8, 22303 Hamburg, Deutschland",
      phone: "040 69 45 68 28",
      email: "mail@bigspuntino.de",
      hours: "Öffnungszeiten",
      mondayFriday: "Mittwoch – Freitag: 11:00 – 23:00",
      saturday: "Samstag: 10:00 – 23:00",
      sunday: "Sonntag: 10:00 – 17:00",
      copyright:
        "Alle Rechte vorbehalten. Mit Leidenschaft für authentische italienische Küche gefertigt.",
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      socialLinks: {
        instagram: "Folgen Sie unserer kulinarischen Reise",
        facebook: "Treten Sie unserer Gemeinschaft bei",
        twitter: "Neueste Updates",
      },
    },
  };

  const navigationLinks = [
    { name: { EN: "Home", DE: "Startseite" }, path: "/homepage" },
    { name: { EN: "Il Menu", DE: "Menü" }, path: "/menu-experience" },
    { name: { EN: "Events", DE: "Veranstaltungen" }, path: "/events" },
    {
      name: { EN: "Our History", DE: "Geschichte" },
      path: "/our-story-universe",
    },
    { name: { EN: "Impressions", DE: "Bildgalerie" }, path: "/impressions" },
    { name: { EN: "Contact", DE: "Kontakt" }, path: "/contact-location" },
    { name: { EN: "Jobs", DE: "Jobs" }, path: "/jobs" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: "Instagram",
      url: "#",
      label: content[currentLanguage].socialLinks.instagram,
    },
    {
      name: "Facebook",
      icon: "Facebook",
      url: "#",
      label: content[currentLanguage].socialLinks.facebook,
    },
    {
      name: "Twitter",
      icon: "Twitter",
      url: "#",
      label: content[currentLanguage].socialLinks.twitter,
    },
  ];

  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link
              to="/homepage"
              className="flex items-center space-x-3 mb-6 group"
            >
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
                  <circle cx="20" cy="20" r="3" fill="var(--color-charcoal)" />
                </svg>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl text-golden group-hover:text-accent transition-warm">
                  Bigspontino
                </h3>
                
              </div>
            </Link>

            <p className="text-charcoal-foreground/80 text-sm leading-relaxed mb-6">
              {content[currentLanguage].description}
            </p>

            {/* Social Links */}
            {/* <div>
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
            </div> */}
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
                <Icon
                  name="MapPin"
                  size={16}
                  className="text-golden mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-charcoal-foreground/80 text-sm leading-relaxed">
                    {content[currentLanguage].address}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon
                  name="Phone"
                  size={16}
                  className="text-golden flex-shrink-0"
                />
                <a
                  href={`tel:${content[currentLanguage].phone}`}
                  className="text-charcoal-foreground/80 hover:text-golden text-sm transition-warm"
                >
                  {content[currentLanguage].phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Icon
                  name="Mail"
                  size={16}
                  className="text-golden flex-shrink-0"
                />
                <a
                  href={`mailto:${content[currentLanguage].email}`}
                  className="text-charcoal-foreground/80 hover:text-golden text-sm transition-warm"
                >
                  {content[currentLanguage].email}
                </a>
              </div>
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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-foreground/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-charcoal-foreground/60 text-sm">
                © {currentYear} Bigspontino.{" "}
                {content[currentLanguage].copyright}
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
