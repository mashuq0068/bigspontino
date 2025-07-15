import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Italian countryside with rolling hills and vineyards"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Icon name="BookOpen" size={48} className="text-golden mr-4" />
          <div className="w-16 h-0.5 bg-golden"></div>
          <Icon name="Heart" size={32} className="text-golden mx-4" />
          <div className="w-16 h-0.5 bg-golden"></div>
          <Icon name="Grape" size={48} className="text-golden ml-4" />
        </div>
        
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-warm">
          Italian Culture Corner
        </h1>
        
        <p className="font-dancing text-xl md:text-2xl text-golden mb-8">
          Dove la tradizione incontra la passione
        </p>
        
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
          Immerse yourself in the rich tapestry of Italian culture, from ancient traditions to modern celebrations. 
          Discover the stories behind every dish, the heritage of every ingredient, and the passion that defines la dolce vita.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center text-white/80">
            <Icon name="Calendar" size={20} className="mr-2" />
            <span className="text-sm">Updated Weekly</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="flex items-center text-white/80">
            <Icon name="Users" size={20} className="mr-2" />
            <span className="text-sm">Community Stories</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="flex items-center text-white/80">
            <Icon name="Globe" size={20} className="mr-2" />
            <span className="text-sm">Authentic Insights</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;