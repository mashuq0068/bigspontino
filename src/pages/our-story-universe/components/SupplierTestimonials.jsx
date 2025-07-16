import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SupplierTestimonials = () => {
  const [activeSupplier, setActiveSupplier] = useState(0);

  const suppliers = [
    {
      id: 0,
      name: "Giuseppe Olivetti",
      role: "Olive Grove Owner",
      location: "Tuscany, Italy",
      company: "Olivetti Family Estate",
      established: "1923",
      image: "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800",
      productImage: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      testimonial: `Working with Marco and Bigspontino has been like finding family across borders. When he first visited our grove in 2013, I knew immediately he understood what we do here—this isn't just about producing oil, it's about preserving a way of life.\n\nOur olives are hand-picked at dawn, pressed within hours, and each bottle carries the essence of our Tuscan hills. Marco doesn't just buy our oil; he tells our story, honors our craft, and ensures that every drop served at Bigspontino maintains the integrity we've built over four generations.`,
      specialty: "Cold-pressed extra virgin olive oil from century-old trees",
      partnership: "10+ years of exclusive partnership",
      quote: "Marco understands that great olive oil is not a commodity—it\'s liquid poetry from the earth."
    },
    {
      id: 1,
      name: "Maria Formaggi",
      role: "Master Cheese Maker",
      location: "Emilia-Romagna, Italy",
      company: "Caseificio Formaggi",
      established: "1956",
      image: "https://images.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg",
      productImage: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      testimonial: `The relationship with Bigspontino began when Marco spent three weeks learning our traditional Parmigiano-Reggiano process. He didn't just want to buy cheese—he wanted to understand the soul behind every wheel.\n\nOur Parmigiano ages for minimum 24 months in our historic caves, developing the complex crystalline texture and nutty depth that makes it extraordinary. Marco's respect for our craft and his commitment to educating his guests about proper cheese service makes him more than a customer—he's a cultural ambassador for our traditions.`,
      specialty: "24-month aged Parmigiano-Reggiano and artisanal Gorgonzola",
      partnership: "8+ years of artisanal collaboration",
      quote: "True Parmigiano-Reggiano cannot be rushed. Marco understands this patience, this respect for time."
    },
    {
      id: 2,
      name: "Antonio Vigneto",
      role: "Winemaker",
      location: "Chianti, Italy",
      company: "Vigneto Family Vineyards",
      established: "1889",
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      productImage: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      testimonial: `When Marco first visited our vineyard, he spent the entire day walking among the vines, tasting grapes, understanding our terroir. Most buyers focus on price and quantity—Marco focused on story and authenticity.\n\nOur Chianti Classico represents five generations of winemaking wisdom. Each bottle reflects not just the vintage, but our family's dedication to sustainable practices and traditional methods. At Bigspontino, our wines aren't just served—they're celebrated, paired thoughtfully, and presented with the respect they deserve.`,
      specialty: "Chianti Classico and Super Tuscan blends",
      partnership: "12+ years of exclusive wine curation",
      quote: "Great wine tells the story of its land. Marco ensures every story is heard and honored."
    },
    {
      id: 3,
      name: "Lucia Pasta",
      role: "Pasta Artisan",
      location: "Bologna, Italy",
      company: "Pasta Lucia Tradizionale",
      established: "1967",
      image: "https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg?auto=compress&cs=tinysrgb&w=800",
      productImage: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      testimonial: `Marco learned to make pasta in my kitchen when he was just starting his journey. Even then, I could see his reverence for the craft—the way he handled the dough, the patience he showed during the learning process.\n\nOur pasta is made daily using bronze dies and slow-drying methods that create the perfect texture for sauce adherence. When Marco serves our pasta at Bigspontino, he's not just serving food—he's sharing a piece of Bologna's soul, maintaining the standards that have defined authentic Italian pasta for generations.`,
      specialty: "Bronze-die extruded pasta and hand-rolled specialties",
      partnership: "15+ years of artisanal pasta supply",
      quote: "Pasta is the canvas; the sauce is the art. Both must be perfect to create magic."
    }
  ];

  return (
    <section className="py-20 bg-gradient-tuscan">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Italian Partners
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate artisans across Italy who share our commitment to authenticity. 
            These aren't just suppliers—they're family, guardians of tradition, and partners in our mission 
            to bring genuine Italian culture to your table.
          </p>
        </div>

        {/* Supplier Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {suppliers.map((supplier, index) => (
            <button
              key={supplier.id}
              onClick={() => setActiveSupplier(index)}
              className={`p-4 rounded-xl text-left transition-warm ${
                activeSupplier === index
                  ? 'bg-primary text-primary-foreground shadow-warm'
                  : 'bg-card text-card-foreground hover:bg-primary/10 border border-warm'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={16} className="text-accent-foreground" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium text-sm truncate">{supplier.name}</h4>
                  <p className="text-xs opacity-80 truncate">{supplier.role}</p>
                </div>
              </div>
              <p className="text-xs opacity-70">{supplier.location}</p>
            </button>
          ))}
        </div>

        {/* Active Supplier Content */}
        <div className="bg-card rounded-2xl shadow-warm-lg overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-0">
            {/* Supplier Image */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <Image
                src={suppliers[activeSupplier].image}
                alt={`${suppliers[activeSupplier].name} - ${suppliers[activeSupplier].role}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-playfair text-xl font-bold mb-1">{suppliers[activeSupplier].name}</h3>
                <p className="text-sm opacity-90">{suppliers[activeSupplier].role}</p>
                <div className="flex items-center space-x-1 mt-2">
                  <Icon name="MapPin" size={14} />
                  <span className="text-xs">{suppliers[activeSupplier].location}</span>
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="lg:col-span-2 p-8 lg:p-12">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Quote" size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-playfair text-2xl font-bold text-primary mb-2">
                    {suppliers[activeSupplier].company}
                  </h4>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={14} />
                      <span>Est. {suppliers[activeSupplier].established}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Award" size={14} />
                      <span>{suppliers[activeSupplier].partnership}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  {suppliers[activeSupplier].testimonial.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                  <p className="font-medium text-accent-foreground italic">
                    "{suppliers[activeSupplier].quote}"
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Package" size={16} className="text-primary" />
                      <h5 className="font-medium text-primary">Specialty</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">{suppliers[activeSupplier].specialty}</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Handshake" size={16} className="text-primary" />
                      <h5 className="font-medium text-primary">Partnership</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">{suppliers[activeSupplier].partnership}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button
            variant="default"
            size="lg"
            iconName="ExternalLink"
            iconPosition="right"
            className="bg-conversion-gold hover:bg-conversion-gold/90  shadow-warm-lg"
          >
            Experience These Authentic Flavors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SupplierTestimonials;