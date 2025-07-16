import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunityImpactSection = () => {
  const impactStories = [
    {
      id: 1,
      title: "Italian Cultural Festival",
      category: "Cultural Events",
      date: "Annual - September",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Our annual festival brings authentic Italian culture to the local community, featuring live music, traditional crafts, and cooking demonstrations.",
      impact: "5,000+ attendees annually",
      details: `What started as a small gathering has grown into the region's premier Italian cultural celebration. Local families, Italian expatriates, and culture enthusiasts come together to experience authentic traditions.\n\nWe partner with Italian cultural organizations, local musicians, and artisans to create an immersive experience that goes beyond food. Traditional folk dances, live tarantella performances, and hands-on pasta-making workshops create lasting memories and cultural connections.`,
      partners: ["Italian Cultural Association", "Local Arts Council", "Regional Tourism Board"]
    },
    {
      id: 2,
      title: "Culinary Scholarship Program",
      category: "Education",
      date: "Ongoing",
      image: "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Supporting aspiring chefs with scholarships for culinary education and apprenticeships in Italy.",
      impact: "12 scholarships awarded",
      details: `Recognizing that culinary traditions must be passed to the next generation, we established this program to support young chefs who share our passion for authentic Italian cuisine.\n\nRecipients receive funding for culinary school, mentorship from our team, and the opportunity for apprenticeships with our partner restaurants in Italy. This investment in education ensures that traditional techniques and cultural knowledge continue to thrive.`,
      partners: ["Culinary Institute of Bologna", "Local Culinary Schools", "Italian Restaurant Association"]
    },
    {
      id: 3,
      title: "Local Farmer Partnerships",
      category: "Sustainability",
      date: "Year-round",
      image: "https://images.unsplash.com/photo-1498579397066-22750a3cb424?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Supporting local agriculture by sourcing seasonal produce and herbs from regional farmers.",
      impact: "15+ local farms supported",
      details: `While we import specialty ingredients from Italy, we believe in supporting our local agricultural community. Our partnerships with regional farmers provide fresh, seasonal produce that complements our Italian imports.\n\nThese relationships have helped local farmers diversify their crops, introducing Italian varieties like San Marzano tomatoes and fresh basil. We provide guaranteed purchasing agreements and technical support, creating sustainable income streams for farming families.`,
      partners: ["Regional Farmers Cooperative", "Organic Growers Association", "Sustainable Agriculture Initiative"]
    },
    {
      id: 4,
      title: "Community Cooking Classes",
      category: "Education",
      date: "Monthly",
      image: "https://images.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
      description: "Free cooking classes teaching traditional Italian techniques to community members of all ages.",
      impact: "500+ participants trained",
      details: `Every month, we open our kitchen to community members eager to learn authentic Italian cooking techniques. These classes cover everything from basic pasta making to advanced sauce preparation.\n\nParticipants leave not just with new skills, but with understanding of Italian food culture, the importance of quality ingredients, and the joy of sharing meals with family. Many have gone on to start their own food businesses or simply bring more authentic Italian flavors to their family tables.`,
      partners: ["Community Center", "Senior Citizens Association", "Youth Development Programs"]
    }
  ];

  const achievements = [
    {
      icon: "Users",
      number: "25,000+",
      label: "Community Members Reached",
      description: "Through events, classes, and partnerships"
    },
    {
      icon: "Award",
      number: "8",
      label: "Community Awards",
      description: "Recognition for cultural and social impact"
    },
    {
      icon: "Leaf",
      number: "15",
      label: "Local Farms Supported",
      description: "Creating sustainable partnerships"
    },
    {
      icon: "GraduationCap",
      number: "500+",
      label: "Students Taught",
      description: "Culinary skills and cultural knowledge"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            Community Impact
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Beyond serving exceptional food, we're committed to enriching our community through cultural education, 
            sustainable partnerships, and programs that celebrate the Italian spirit of generosity and connection.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={achievement.icon} size={24} className="text-primary" />
              </div>
              <div className="font-playfair text-3xl font-bold text-primary mb-2">
                {achievement.number}
              </div>
              <h4 className="font-medium text-foreground mb-2">{achievement.label}</h4>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Stories */}
        <div className="space-y-12">
          {impactStories.map((story, index) => (
            <div 
              key={story.id}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image Section */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-warm">
                  <Image
                    src={story.image}
                    alt={`${story.title} - Community impact story`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-accent rounded-full text-xs font-medium text-accent-foreground">
                        {story.category}
                      </span>
                      <span className="text-xs opacity-80">{story.date}</span>
                    </div>
                    <h3 className="font-playfair text-xl font-bold">{story.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <Icon name="Heart" size={20} className="text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-playfair text-2xl font-bold text-primary">{story.title}</h4>
                        <p className="text-sm text-muted-foreground">{story.category} • {story.date}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{story.description}</p>
                    <div className="flex items-center space-x-2 mb-6">
                      <Icon name="TrendingUp" size={16} className="text-accent" />
                      <span className="font-medium text-accent">{story.impact}</span>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    {story.details.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-foreground leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h5 className="font-medium text-primary mb-3 flex items-center space-x-2">
                      <Icon name="Handshake" size={16} />
                      <span>Key Partners</span>
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {story.partners.map((partner, pIndex) => (
                        <span 
                          key={pIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-tuscan rounded-2xl p-8 lg:p-12 text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-playfair text-3xl font-bold text-primary mb-6">
              Join Our Community Mission
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Whether through attending our events, participating in our classes, or simply dining with us, 
              you become part of our extended family and our commitment to cultural enrichment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-conversion-gold hover:bg-conversion-gold/90  shadow-warm-lg"
              >
                View Upcoming Events
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Users"
                iconPosition="left"
                className=" border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpactSection;