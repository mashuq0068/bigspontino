import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunitySection = () => {
  const [activeStory, setActiveStory] = useState(0);

  const communityStories = [
    {
      id: 1,
      author: {
        name: "Maria Rossi",
        location: "Milano, Italy",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        role: "Local Food Expert"
      },
      title: "The Secret of Perfect Risotto",
      content: `Growing up in my nonna's kitchen in Milano, I learned that risotto is not just a dish—it's a meditation. The constant stirring, the patience, the love you put into each grain of rice. \n\nToday, I want to share the secret that has been passed down in our family for four generations: the rice must be toasted until it sounds like gentle rain on the window.`,
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 127,
      comments: 23,
      publishDate: "2 days ago",
      category: "Family Traditions"
    },
    {
      id: 2,
      author: {
        name: "Giuseppe Bianchi",
        location: "Napoli, Italy",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        role: "Pizza Maestro"
      },
      title: "The Soul of Neapolitan Pizza",
      content: `In Napoli, we don't just make pizza—we create poetry with flour, water, and fire. Each pizza tells the story of our city, our passion, our heritage. \n\nThe dough must rest for at least 24 hours, like a good wine. The tomatoes must be San Marzano, picked under the Vesuvius sun. This is not just food, this is our identity.`,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 89,
      comments: 31,
      publishDate: "5 days ago",
      category: "Culinary Heritage"
    },
    {
      id: 3,
      author: {
        name: "Elena Conti",
        location: "Firenze, Italy",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        role: "Wine Sommelier"
      },
      title: "Harvest Season in Chianti",
      content: `October in Tuscany is magical. The vineyards turn golden, the air smells of fermenting grapes, and families come together for the harvest. \n\nThis year, like every year for the past 30 years, I joined the harvest at my friend's vineyard. We picked grapes by hand, shared stories, and celebrated the gift of another vintage. This is the true spirit of Italian wine.`,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 156,
      comments: 18,
      publishDate: "1 week ago",
      category: "Seasonal Traditions"
    }
  ];

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % communityStories.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + communityStories.length) % communityStories.length);
  };

  const currentStory = communityStories[activeStory];

  return (
    <div className="bg-gradient-tuscan rounded-2xl p-8 border border-warm">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Icon name="Users" size={32} className="text-primary mr-3" />
          <h2 className="font-playfair text-3xl font-bold text-foreground">
            Community Stories
          </h2>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Real stories from our Italian community members sharing their traditions, 
          recipes, and cultural insights from across the beautiful peninsula.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-xl overflow-hidden shadow-warm border border-warm">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-full">
              <Image
                src={currentStory.image}
                alt={currentStory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {currentStory.category}
                </span>
              </div>
            </div>
            
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <Image
                    src={currentStory.author.avatar}
                    alt={currentStory.author.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{currentStory.author.name}</h4>
                    <p className="text-muted-foreground text-sm">{currentStory.author.role}</p>
                    <div className="flex items-center text-muted-foreground text-xs mt-1">
                      <Icon name="MapPin" size={12} className="mr-1" />
                      <span>{currentStory.author.location}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
                  {currentStory.title}
                </h3>
                
                <div className="text-muted-foreground leading-relaxed mb-6 whitespace-pre-line">
                  {currentStory.content}
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <div className="flex items-center">
                      <Icon name="Heart" size={16} className="mr-1 text-error" />
                      <span>{currentStory.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="MessageCircle" size={16} className="mr-1" />
                      <span>{currentStory.comments}</span>
                    </div>
                    <span>{currentStory.publishDate}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Heart"
                      iconPosition="left"
                      className="text-muted-foreground hover:text-error"
                    >
                      Like
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="MessageCircle"
                      iconPosition="left"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Comment
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevStory}
                      className="p-2 rounded-full hover:bg-muted transition-warm"
                    >
                      <Icon name="ChevronLeft" size={20} className="text-muted-foreground" />
                    </button>
                    <span className="text-muted-foreground text-sm">
                      {activeStory + 1} / {communityStories.length}
                    </span>
                    <button
                      onClick={nextStory}
                      className="p-2 rounded-full hover:bg-muted transition-warm"
                    >
                      <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button
            variant="outline"
            iconName="Plus"
            iconPosition="left"
            className=""
          >
            Share Your Story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;