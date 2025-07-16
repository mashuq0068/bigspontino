import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedArticle = ({ article }) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-warm-lg border border-warm mb-12">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="relative h-64 lg:h-full">
          <Image
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          </div>
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
            <Icon name="Camera" size={20} className="text-white" />
          </div>
        </div>
        
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <Icon name={article.category.icon} size={20} className="text-primary mr-2" />
            <span className="text-primary font-medium text-sm">{article.category.name}</span>
            <span className="mx-2 text-muted-foreground">•</span>
            <span className="text-muted-foreground text-sm">{article.readTime} min read</span>
          </div>
          
          <h2 className="font-playfair text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
            {article.title}
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-medium text-foreground text-sm">{article.author.name}</p>
                <p className="text-muted-foreground text-xs">{article.author.role}</p>
              </div>
            </div>
            <span className="text-muted-foreground text-sm">{article.publishDate}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="default"
              iconName="ArrowRight"
              iconPosition="right"
              className="bg-primary hover:bg-primary/90"
            >
              Read Full Article
            </Button>
            <Button
              variant="outline"
              iconName="Share2"
              iconPosition="left"
            >
              Share Story
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;