import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CultureCornerPreview = () => {
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'EN';
    setCurrentLanguage(savedLanguage);
  }, []);

  const culturalArticles = [
    {
      id: 1,
      category: { EN: "Traditions", DE: "Traditionen" },
      title: {
        EN: "The Art of Italian Aperitivo: More Than Just a Drink",
        DE: "Die Kunst des italienischen Aperitivo: Mehr als nur ein Getränk"
      },
      excerpt: {
        EN: `Discover the sacred Italian tradition of aperitivo - a daily ritual that transforms the transition from work to evening into a celebration of life, friendship, and the simple pleasure of being together.`,
        DE: `Entdecken Sie die heilige italienische Tradition des Aperitivo - ein tägliches Ritual, das den Übergang von der Arbeit zum Abend in eine Feier des Lebens, der Freundschaft und des einfachen Vergnügens des Zusammenseins verwandelt.`
      },
      image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg",
      readTime: { EN: "5 min read", DE: "5 Min. Lesezeit" },
      publishDate: "2024-07-10",
      author: "Marco Rossi"
    },
    {
      id: 2,
      category: { EN: "Ingredients", DE: "Zutaten" },
      title: {
        EN: "From Grove to Table: The Journey of Sicilian Olive Oil",
        DE: "Vom Hain zum Tisch: Die Reise des sizilianischen Olivenöls"
      },
      excerpt: {
        EN: `Follow the golden thread that connects ancient Sicilian olive groves to your plate. Learn about the families who have been pressing liquid gold for generations and why terroir matters in every drop.`,
        DE: `Folgen Sie dem goldenen Faden, der alte sizilianische Olivenhaine mit Ihrem Teller verbindet. Erfahren Sie mehr über die Familien, die seit Generationen flüssiges Gold pressen und warum Terroir in jedem Tropfen wichtig ist.`
      },
      image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg",
      readTime: { EN: "7 min read", DE: "7 Min. Lesezeit" },
      publishDate: "2024-07-08",
      author: "Elena Conti"
    },
    {
      id: 3,
      category: { EN: "Culture", DE: "Kultur" },
      title: {
        EN: "La Dolce Vita: Understanding the Italian Philosophy of Living Well",
        DE: "La Dolce Vita: Die italienische Philosophie des guten Lebens verstehen"
      },
      excerpt: {
        EN: `Explore the deeper meaning behind Italy's famous lifestyle philosophy. It's not about luxury - it's about finding joy in everyday moments, from morning coffee to evening conversations.`,
        DE: `Erkunden Sie die tiefere Bedeutung hinter Italiens berühmter Lebensphilosophie. Es geht nicht um Luxus - es geht darum, Freude in alltäglichen Momenten zu finden, vom Morgenkaffee bis zu abendlichen Gesprächen.`
      },
      image: "https://images.pexels.com/photos/4253285/pexels-photo-4253285.jpeg",
      readTime: { EN: "6 min read", DE: "6 Min. Lesezeit" },
      publishDate: "2024-07-05",
      author: "Giuseppe Bianchi"
    }
  ];

  const categories = [
    { name: { EN: "Traditions", DE: "Traditionen" }, icon: "Heart", count: 12 },
    { name: { EN: "Ingredients", DE: "Zutaten" }, icon: "Leaf", count: 8 },
    { name: { EN: "Culture", DE: "Kultur" }, icon: "BookOpen", count: 15 },
    { name: { EN: "Recipes", DE: "Rezepte" }, icon: "ChefHat", count: 6 }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <Icon name="BookOpen" size={16} />
            <span className="text-sm font-medium">
              {currentLanguage === 'EN' ? 'Cultural Discovery' : 'Kulturelle Entdeckung'}
            </span>
          </div>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-primary mb-4">
            {currentLanguage === 'EN' ? 'Italian Culture Corner' : 'Italienische Kultur-Ecke'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {currentLanguage === 'EN' ?'Dive deeper into the rich tapestry of Italian culture, traditions, and culinary wisdom that inspires every dish we create.' :'Tauchen Sie tiefer in das reiche Geflecht der italienischen Kultur, Traditionen und kulinarischen Weisheit ein, die jedes Gericht inspiriert, das wir kreieren.'
            }
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-background rounded-lg p-4 text-center shadow-warm hover:shadow-warm-lg transition-warm cursor-pointer group">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/30 transition-warm">
                <Icon name={category.icon} size={20} className="text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-1">
                {category.name[currentLanguage]}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.count} {currentLanguage === 'EN' ? 'articles' : 'Artikel'}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Articles */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {culturalArticles.map((article) => (
            <article key={article.id} className="bg-background rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-warm group">
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title[currentLanguage]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-warm"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-flex items-center space-x-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  <span>{article.category[currentLanguage]}</span>
                </div>

                {/* Title */}
                <h3 className="font-playfair text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-warm">
                  {article.title[currentLanguage]}
                </h3>

                {/* Excerpt */}
                <p className="text-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt[currentLanguage]}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <span>{article.author}</span>
                    <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>{article.readTime[currentLanguage]}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <Link 
                  to="/italian-culture-corner"
                  className="inline-flex items-center space-x-1 text-accent hover:text-accent/80 text-sm font-medium transition-warm"
                >
                  <span>{currentLanguage === 'EN' ? 'Read More' : 'Weiterlesen'}</span>
                  <Icon name="ArrowRight" size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-background rounded-2xl p-6 lg:p-8 shadow-warm text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Mail" size={24} className="text-accent" />
            </div>
            
            <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
              {currentLanguage === 'EN' ? 'Stay Connected to Italian Culture' : 'Bleiben Sie mit der italienischen Kultur verbunden'}
            </h3>
            
            <p className="text-muted-foreground mb-6">
              {currentLanguage === 'EN' ?'Receive weekly insights into Italian traditions, seasonal recipes, and cultural stories directly in your inbox.' :'Erhalten Sie wöchentliche Einblicke in italienische Traditionen, saisonale Rezepte und kulturelle Geschichten direkt in Ihren Posteingang.'
              }
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={currentLanguage === 'EN' ? 'Enter your email' : 'E-Mail eingeben'}
                className="w-full px-4 py-3 rounded-lg border border-warm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <Button
                variant="default"
                iconName="Send"
                iconPosition="right"
                className="bg-accent hover:bg-accent/90  whitespace-nowrap"
              >
                {currentLanguage === 'EN' ? 'Subscribe' : 'Abonnieren'}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-3">
              {currentLanguage === 'EN' ?'No spam, just authentic Italian culture. Unsubscribe anytime.' :'Kein Spam, nur authentische italienische Kultur. Jederzeit abbestellbar.'
              }
            </p>
          </div>
        </div>

        {/* View All Articles CTA */}
        <div className="text-center mt-8">
          <Link to="/italian-culture-corner">
            <Button
              variant="outline"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              className=""
            >
              {currentLanguage === 'EN' ? 'Explore All Articles' : 'Alle Artikel Erkunden'}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CultureCornerPreview;