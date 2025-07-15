import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Marco Bigspontino",
      role: "Executive Chef & Owner",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialties: ["Tuscan Cuisine", "Pasta Making", "Wine Pairing"],
      training: "Culinary Institute of Bologna, Apprenticeships across Tuscany and Sicily",
      familyRecipe: "Nonna Giulia's Ragu Bolognese - A 4-hour labor of love passed down through five generations",
      culturalInsight: "Believes that every dish should tell a story and that the kitchen is where Italian culture comes alive",
      experience: "25+ years",
      philosophy: `"Cooking is not just about feeding the body—it's about nourishing the soul. Every ingredient has a story, every technique carries tradition, and every plate we serve is an invitation to experience the true heart of Italy."`
    },
    {
      id: 2,
      name: "Sofia Marinelli",
      role: "Sous Chef",
      image: "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800",
      specialties: ["Seafood", "Southern Italian", "Desserts"],
      training: "Culinary Academy of Naples, Specialized training in Sicilian cuisine",
      familyRecipe: "Sicilian Cannoli with ricotta from her grandmother's recipe, featuring pistachios from Bronte",
      culturalInsight: "Expert in the art of 'la bella figura' - making everything beautiful, from plating to presentation",
      experience: "12+ years",
      philosophy: `"In Sicily, we say 'Cu mancia fa muddichi' - those who eat make crumbs. Food should be enjoyed with passion, without pretense, celebrating the simple joy of eating well."`
    },
    {
      id: 3,
      name: "Alessandro Romano",
      role: "Pasta Chef",
      image: "https://images.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg",
      specialties: ["Fresh Pasta", "Risotto", "Traditional Techniques"],
      training: "Pasta Academy of Emilia-Romagna, Master classes with renowned pasta makers",
      familyRecipe: "Hand-rolled Pici pasta from his Tuscan heritage, served with wild boar ragu",
      culturalInsight: "Keeper of traditional pasta-making techniques, believes in the meditative nature of hand-rolling pasta",
      experience: "15+ years",
      philosophy: `"Pasta is the soul of Italian cuisine. Each shape has a purpose, each sauce a perfect match. When you make pasta by hand, you connect with centuries of Italian mothers who fed their families with love."`
    },
    {
      id: 4,
      name: "Giulia Venti",
      role: "Sommelier",
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialties: ["Italian Wines", "Food Pairing", "Wine Education"],
      training: "Italian Sommelier Association, Advanced studies in Tuscany and Piedmont",
      familyRecipe: "Family vineyard\'s Chianti Classico paired with aged Pecorino - a combination perfected over generations",
      culturalInsight: "Believes wine is liquid poetry that enhances every meal and creates lasting memories",
      experience: "10+ years",
      philosophy: `"Wine is not just a beverage—it's the voice of the vineyard, the expression of the winemaker's soul, and the perfect companion to great food. My job is to help you hear that voice."`
    },
    {
      id: 5,
      name: "Roberto Hospitale",
      role: "Maître d\'Hôtel",
      image: "https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg?auto=compress&cs=tinysrgb&w=800",
      specialties: ["Guest Relations", "Service Excellence", "Cultural Hospitality"],
      training: "Hospitality Institute of Rome, Advanced service training in luxury establishments",
      familyRecipe: "Traditional Roman Cacio e Pepe - simple ingredients elevated through perfect technique",
      culturalInsight: "Master of Italian hospitality traditions, ensuring every guest feels like family",
      experience: "18+ years",
      philosophy: `"True Italian hospitality means anticipating needs before they're expressed, creating comfort through genuine warmth, and ensuring every guest leaves feeling they've experienced something special."`
    },
    {
      id: 6,
      name: "Elena Dolci",
      role: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialties: ["Traditional Desserts", "Gelato", "Seasonal Sweets"],
      training: "Pastry Academy of Milan, Specialized training in traditional Italian desserts",
      familyRecipe: "Venetian Tiramisu with ladyfingers soaked in espresso from her family\'s café",
      culturalInsight: "Believes dessert is the perfect ending to any meal, creating sweet memories that linger long after dining",
      experience: "14+ years",
      philosophy: `"Dolce vita begins with dolce - the sweet life starts with sweetness. Every dessert should be a small celebration, a moment of pure joy that completes the dining experience."`
    }
  ];

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Italian Family
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate artisans who bring authentic Italian culture to life every day. 
            Each team member carries unique stories, family traditions, and cultural insights that make 
            Bigspontino more than a restaurant—it's a living piece of Italy.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="group bg-background rounded-2xl shadow-warm overflow-hidden hover:shadow-warm-lg transition-warm cursor-pointer"
              onClick={() => openModal(member)}
            >
              {/* Member Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-warm-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-playfair text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.role}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-warm">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Eye" size={16} className="text-accent-foreground" />
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-accent">{member.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="ChefHat" size={16} className="text-primary" />
                    <span className="text-sm text-muted-foreground">{member.specialties.length} Specialties</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-primary mb-1">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.slice(0, 2).map((specialty, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                      {member.specialties.length > 2 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          +{member.specialties.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-warm">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {member.culturalInsight}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-primary font-medium">Learn More</span>
                  <Icon name="ArrowRight" size={16} className="text-primary group-hover:translate-x-1 transition-warm" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-warm"
                >
                  <Icon name="X" size={20} className="text-foreground" />
                </button>

                {/* Modal Content */}
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <Image
                      src={selectedMember.image}
                      alt={`${selectedMember.name} - ${selectedMember.role}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="font-playfair text-2xl font-bold mb-1">{selectedMember.name}</h3>
                      <p className="text-sm opacity-90">{selectedMember.role}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Icon name="Award" size={14} />
                        <span className="text-xs">{selectedMember.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12">
                    <div className="space-y-6">
                      {/* Specialties */}
                      <div>
                        <h4 className="font-playfair text-lg font-bold text-primary mb-3">Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedMember.specialties.map((specialty, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Training */}
                      <div>
                        <h4 className="font-playfair text-lg font-bold text-primary mb-3">Training & Background</h4>
                        <p className="text-muted-foreground">{selectedMember.training}</p>
                      </div>

                      {/* Family Recipe */}
                      <div>
                        <h4 className="font-playfair text-lg font-bold text-primary mb-3">Signature Family Recipe</h4>
                        <p className="text-muted-foreground">{selectedMember.familyRecipe}</p>
                      </div>

                      {/* Cultural Insight */}
                      <div>
                        <h4 className="font-playfair text-lg font-bold text-primary mb-3">Cultural Insight</h4>
                        <p className="text-muted-foreground">{selectedMember.culturalInsight}</p>
                      </div>

                      {/* Philosophy */}
                      <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                        <div className="flex items-start space-x-3">
                          <Icon name="Quote" size={20} className="text-accent mt-1 flex-shrink-0" />
                          <p className="font-medium text-accent-foreground italic">
                            {selectedMember.philosophy}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;