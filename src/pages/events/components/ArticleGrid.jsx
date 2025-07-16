import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-warm border border-warm transition-warm hover:shadow-warm-lg hover:scale-[1.02] group">
      <div className="relative h-48">
        <Image
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-warm"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
            {article.category.name}
          </span>
        </div>
        {article.isNew && (
          <div className="absolute top-3 right-3">
            <span className="bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs font-medium">
              New
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-muted-foreground text-sm mb-3">
          <Icon name="Clock" size={14} className="mr-1" />
          <span>{article.readTime} min</span>
          <span className="mx-2">•</span>
          <span>{article.publishDate}</span>
        </div>
        
        <h3 className="font-playfair text-lg font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-warm">
          {article.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-foreground text-sm font-medium">{article.author.name}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-full hover:bg-muted transition-warm">
              <Icon name="Heart" size={16} className="text-muted-foreground hover:text-error" />
            </button>
            <button className="p-1.5 rounded-full hover:bg-muted transition-warm">
              <Icon name="Share2" size={16} className="text-muted-foreground hover:text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import Button from '../../../components/ui/Button';
import ArticleCard from './ArticleCard';

const ArticleGrid = ({ articles, onLoadMore, hasMore, loading, t }) => {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {hasMore && (
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={onLoadMore}
            loading={loading}
            iconName="Plus"
            iconPosition="left"
            className=" border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {t.loadMore}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ArticleGrid;