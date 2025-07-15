import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PhilosophySection = () => {
  const philosophyPrinciples = [
    {
      icon: "Heart",
      title: "La Famiglia",
      subtitle: "Family First",
      description: "Every guest becomes part of our extended family. Italian hospitality isn't service—it's genuine care, warmth, and the joy of sharing life's most precious moments around the table.",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: "Clock",
      title: "Tempo Giusto",
      subtitle: "The Right Time",
      description: "Great food cannot be rushed. From the slow rise of our bread to the patient aging of our cheeses, we honor the natural rhythms that create extraordinary flavors and meaningful experiences.",
      image: "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: "Leaf",
      title: "Rispetto",
      subtitle: "Deep Respect",
      description: "Respect for ingredients, for traditions, for the artisans who create them, and for the land that provides them. Every element on your plate has been chosen with reverence and gratitude.",
      image: "https://images.unsplash.com/photo-1498579397066-22750a3cb424?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: "Sparkles",
      title: "Gioia di Vivere",
      subtitle: "Joy of Living",
      description: "Food is celebration. Every meal is an opportunity to pause, connect, and find joy in simple pleasures. We create moments that remind you why gathering around food is humanity's greatest tradition.",
      image: "https://images.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            Philosophy of Hospitality
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            In Italy, dining is never just about food—it's about connection, celebration, and the sacred act 
            of sharing life's moments. These principles guide everything we do at Bigspontino.
          </p>
        </div>

        {/* Philosophy Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {philosophyPrinciples.map((principle, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl shadow-warm overflow-hidden hover:shadow-warm-lg transition-warm"
            >
              <div className="grid md:grid-cols-2 gap-0 h-full">
                {/* Image Section */}
                <div className="relative h-48 md:h-auto overflow-hidden">
                  <Image
                    src={principle.image}
                    alt={`${principle.title} - Italian dining philosophy`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-warm-slow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-warm">
                      <Icon name={principle.icon} size={20} className="text-accent-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <h3 className="font-playfair text-2xl font-bold text-primary mb-2">
                      {principle.title}
                    </h3>
                    <p className="font-dancing text-lg text-accent">
                      {principle.subtitle}
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Central Quote */}
        <div className="bg-gradient-tuscan rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <Icon name="Quote" size={48} className="text-accent mx-auto mb-6 opacity-50" />
            <blockquote className="font-playfair text-2xl lg:text-3xl font-medium text-primary mb-6 leading-relaxed">
              "A tavola non si invecchia mai"
            </blockquote>
            <p className="text-lg text-muted-foreground mb-4">
              At the table, one never grows old
            </p>
            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              This ancient Italian saying captures the essence of our philosophy. When we gather around food, 
              time stops, connections deepen, and the simple act of sharing a meal becomes a celebration of life itself. 
              At Bigspontino, we don't just serve dinner—we create these timeless moments.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-primary" />
            </div>
            <h4 className="font-playfair text-xl font-bold text-primary mb-3">Community</h4>
            <p className="text-muted-foreground">
              Building connections that extend beyond the dining room, creating a community united by appreciation for authentic Italian culture.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={24} className="text-primary" />
            </div>
            <h4 className="font-playfair text-xl font-bold text-primary mb-3">Authenticity</h4>
            <p className="text-muted-foreground">
              Never compromising on traditional methods, genuine ingredients, or the cultural integrity that makes Italian cuisine extraordinary.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Sparkles" size={24} className="text-primary" />
            </div>
            <h4 className="font-playfair text-xl font-bold text-primary mb-3">Excellence</h4>
            <p className="text-muted-foreground">
              Pursuing perfection in every detail, from ingredient selection to service, ensuring each visit exceeds expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;