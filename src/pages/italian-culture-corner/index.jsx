import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CategoryFilter from './components/CategoryFilter';
import FeaturedArticle from './components/FeaturedArticle';
import ArticleGrid from './components/ArticleGrid';
import InteractiveSection from './components/InteractiveSection';
import CommunitySection from './components/CommunitySection';
import NewsletterSection from './components/NewsletterSection';

const ItalianCultureCorner = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [articles, setArticles] = useState([]);
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Mock data for categories
  const categories = [
    { id: 'all', name: 'All Stories', icon: 'BookOpen', count: 48 },
    { id: 'seasonal', name: 'Seasonal Traditions', icon: 'Calendar', count: 12 },
    { id: 'ingredients', name: 'Ingredient Stories', icon: 'Leaf', count: 15 },
    { id: 'regional', name: 'Regional Discoveries', icon: 'MapPin', count: 10 },
    { id: 'celebrations', name: 'Cultural Celebrations', icon: 'PartyPopper', count: 8 },
    { id: 'techniques', name: 'Cooking Techniques', icon: 'ChefHat', count: 3 }
  ];

  // Mock featured article
  const mockFeaturedArticle = {
    id: 'featured-1',
    title: "The Ancient Art of Pasta Making: A Journey Through Time",
    excerpt: `Discover the centuries-old traditions behind Italy's most beloved culinary art form. From the rolling hills of Emilia-Romagna to the bustling kitchens of modern Italy, pasta making remains a sacred ritual that connects generations through the simple act of transforming flour and eggs into edible poetry.`,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: { name: 'Culinary Heritage', icon: 'ChefHat' },
    author: {
      name: "Chef Marco Antonelli",
      role: "Culinary Historian",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    publishDate: "July 12, 2025",
    readTime: 8
  };

  // Mock articles data
  const mockArticles = [
    {
      id: 1,
      title: "The Truffle Hunters of Piedmont",
      excerpt: "Journey into the misty forests of Piedmont where skilled hunters and their loyal dogs search for the elusive white truffle, a treasure more valuable than gold.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: { name: 'Regional Discoveries', icon: 'MapPin' },
      author: {
        name: "Isabella Romano",
        avatar: "https://randomuser.me/api/portraits/women/25.jpg"
      },
      publishDate: "July 10, 2025",
      readTime: 6,
      isNew: true
    },
    {
      id: 2,
      title: "Sicilian Citrus: Sunshine in Every Drop",
      excerpt: "Explore the sun-drenched groves of Sicily where blood oranges, lemons, and bergamot create the foundation of Italian cuisine and culture.",
      image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: { name: 'Ingredient Stories', icon: 'Leaf' },
      author: {
        name: "Antonio Greco",
        avatar: "https://randomuser.me/api/portraits/men/38.jpg"
      },
      publishDate: "July 8, 2025",
      readTime: 5,
      isNew: false
    },
    {
      id: 3,
      title: "La Befana: Italy\'s Beloved Christmas Witch",
      excerpt: "Discover the enchanting tradition of La Befana, the kind witch who brings gifts to Italian children and represents the magic of Epiphany celebrations.",
      image: "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: { name: 'Cultural Celebrations', icon: 'PartyPopper' },
      author: {
        name: "Lucia Ferretti",
        avatar: "https://randomuser.me/api/portraits/women/42.jpg"
      },
      publishDate: "July 5, 2025",
      readTime: 4,
      isNew: false
    },
    {
      id: 4,
      title: "The Art of Gelato: More Than Just Ice Cream",
      excerpt: "Uncover the secrets behind authentic Italian gelato, from traditional techniques to innovative flavors that capture the essence of Italian creativity.",
      image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: { name: 'Culinary Heritage', icon: 'ChefHat' },
      author: {
        name: "Francesco Moretti",
        avatar: "https://randomuser.me/api/portraits/men/29.jpg"
      },
      publishDate: "July 3, 2025",
      readTime: 7,
      isNew: false
    },
    {
      id: 5,
      title: "Harvest Moon: Autumn Traditions in Tuscany",
      excerpt: "Experience the magic of autumn in Tuscany, where grape harvests, olive picking, and chestnut festivals celebrate the bounty of the season.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: { name: 'Seasonal Traditions', icon: 'Calendar' },
      author: {
        name: "Chiara Benedetti",
        avatar: "https://randomuser.me/api/portraits/women/35.jpg"
      },
      publishDate: "July 1, 2025",
      readTime: 6,
      isNew: false
    },
    {
      id: 6,
      title: "The Language of Italian Hand Gestures",
      excerpt: "Decode the expressive world of Italian hand gestures, a rich non-verbal language that adds passion and meaning to every conversation.",
      image: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: { name: 'Cultural Heritage', icon: 'Heart' },
      author: {
        name: "Roberto Santini",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg"
      },
      publishDate: "June 28, 2025",
      readTime: 5,
      isNew: false
    }
  ];

  useEffect(() => {
    // Initialize with mock data
    setFeaturedArticle(mockFeaturedArticle);
    setArticles(mockArticles);
  }, []);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setLoading(true);
    
    // Simulate API call with filtering
    setTimeout(() => {
      if (categoryId === 'all') {
        setArticles(mockArticles);
      } else {
        const filtered = mockArticles.filter(article => 
          article.category.name.toLowerCase().includes(categoryId) ||
          (categoryId === 'seasonal' && article.category.name === 'Seasonal Traditions') ||
          (categoryId === 'ingredients' && article.category.name === 'Ingredient Stories') ||
          (categoryId === 'regional' && article.category.name === 'Regional Discoveries') ||
          (categoryId === 'celebrations' && article.category.name === 'Cultural Celebrations') ||
          (categoryId === 'techniques' && article.category.name === 'Culinary Heritage')
        );
        setArticles(filtered);
      }
      setLoading(false);
    }, 800);
  };

  const handleLoadMore = () => {
    setLoading(true);
    
    // Simulate loading more articles
    setTimeout(() => {
      const moreArticles = [
        {
          id: 7,
          title: "Venice Carnival: Masks and Mystery",
          excerpt: "Step into the enchanting world of Venice Carnival, where elaborate masks and costumes transform the city into a living fairy tale.",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          category: { name: 'Cultural Celebrations', icon: 'PartyPopper' },
          author: {
            name: "Valentina Rossi",
            avatar: "https://randomuser.me/api/portraits/women/31.jpg"
          },
          publishDate: "June 25, 2025",
          readTime: 8,
          isNew: false
        },
        {
          id: 8,
          title: "The Olive Oil Masters of Liguria",
          excerpt: "Meet the artisans who produce some of the world\'s finest olive oil in the terraced groves overlooking the Mediterranean Sea.",
          image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          category: { name: 'Ingredient Stories', icon: 'Leaf' },
          author: {
            name: "Giovanni Alberti",
            avatar: "https://randomuser.me/api/portraits/men/47.jpg"
          },
          publishDate: "June 22, 2025",
          readTime: 6,
          isNew: false
        }
      ];
      
      setArticles(prev => [...prev, ...moreArticles]);
      setHasMore(false);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 lg:pt-20">
        <HeroSection />
        
        <div className="max-w-7xl mx-auto px-4 py-16">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
          
          {featuredArticle && (
            <FeaturedArticle article={featuredArticle} />
          )}
          
          <ArticleGrid
            articles={articles}
            onLoadMore={handleLoadMore}
            hasMore={hasMore}
            loading={loading}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-16">
          <InteractiveSection />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-16">
          <CommunitySection />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-16">
          <NewsletterSection />
        </div>
      </main>
      
      <footer className="bg-charcoal text-charcoal-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-0.5 bg-golden mr-4"></div>
            <div className="text-golden font-dancing text-2xl">Bigspontino</div>
            <div className="w-12 h-0.5 bg-golden ml-4"></div>
          </div>
          <p className="text-charcoal-foreground/80 mb-4">
            Preserving and sharing the authentic spirit of Italian culture, one story at a time.
          </p>
          <p className="text-charcoal-foreground/60 text-sm">
            © {new Date().getFullYear()} Bigspontino. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ItalianCultureCorner;