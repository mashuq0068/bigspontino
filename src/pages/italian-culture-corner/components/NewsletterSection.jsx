import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-tuscan rounded-2xl p-8 text-center border border-warm">
        <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Check" size={32} className="text-success-foreground" />
        </div>
        <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
          Benvenuto alla famiglia!
        </h3>
        <p className="text-muted-foreground">
          You'll receive our weekly cultural insights and exclusive stories directly to your inbox.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-tuscan rounded-2xl p-8 border border-warm">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <Icon name="Mail" size={48} className="text-primary" />
        </div>
        
        <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-foreground mb-4">
          Join Our Cultural Journey
        </h3>
        
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          Receive weekly stories about Italian traditions, seasonal recipes, and cultural insights 
          that bring the authentic spirit of Italy to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-1">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            variant="default"
            loading={loading}
            iconName="Send"
            iconPosition="right"
            className="bg-primary hover:bg-primary/90 font-montserrat whitespace-nowrap"
          >
            Subscribe
          </Button>
        </form>
        
        <div className="flex items-center justify-center mt-6 text-sm text-muted-foreground">
          <Icon name="Shield" size={16} className="mr-2" />
          <span>We respect your privacy. Unsubscribe anytime.</span>
        </div>
        
        <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Icon name="Calendar" size={16} className="mr-1" />
            <span>Weekly</span>
          </div>
          <div className="flex items-center">
            <Icon name="Users" size={16} className="mr-1" />
            <span>2,500+ Subscribers</span>
          </div>
          <div className="flex items-center">
            <Icon name="Star" size={16} className="mr-1" />
            <span>Exclusive Content</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;