import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamContacts = () => {
  const teamMembers = [
    {
      name: 'Marco Benedetti',
      role: 'Executive Chef & Owner',
      specialty: 'Culinary Direction & Menu Development',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      contact: {
        email: 'marco@bigspontino.de',
        phone: '+49 30 1234 5682',
        availability: 'Tue-Sat 14:00-17:00'
      },
      languages: ['Italian', 'German', 'English'],
      bio: 'Third-generation chef from Tuscany, bringing 25 years of culinary expertise and family recipes to Berlin.',
      specialties: ['Traditional Tuscan Cuisine', 'Wine Pairing', 'Seasonal Menu Creation']
    },
    {
      name: 'Sofia Rossi',
      role: 'Restaurant Manager',
      specialty: 'Guest Experience & Operations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      contact: {
        email: 'sofia@bigspontino.de',
        phone: '+49 30 1234 5683',
        availability: 'Mon-Fri 10:00-18:00'
      },
      languages: ['Italian', 'German', 'English', 'French'],
      bio: 'Hospitality expert with 15 years in luxury dining, ensuring every guest feels like famiglia.',
      specialties: ['Event Planning', 'Wine Service', 'Cultural Experiences']
    },
    {
      name: 'Alessandro Conti',
      role: 'Sommelier & Beverage Director',
      specialty: 'Wine Program & Italian Spirits',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      contact: {
        email: 'alessandro@bigspontino.de',
        phone: '+49 30 1234 5684',
        availability: 'Wed-Sun 16:00-22:00'
      },
      languages: ['Italian', 'German', 'English'],
      bio: 'Certified sommelier specializing in Italian wines and traditional spirits, with deep knowledge of regional pairings.',
      specialties: ['Wine Tastings', 'Private Cellar Tours', 'Pairing Dinners']
    },
    {
      name: 'Giulia Marchetti',
      role: 'Events & Cultural Coordinator',
      specialty: 'Private Dining & Cultural Programs',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      contact: {
        email: 'giulia@bigspontino.de',
        phone: '+49 30 1234 5685',
        availability: 'Mon-Fri 9:00-17:00'
      },
      languages: ['Italian', 'German', 'English', 'Spanish'],
      bio: 'Cultural ambassador creating immersive Italian experiences through cooking classes and cultural events.',
      specialties: ['Cooking Classes', 'Cultural Events', 'Corporate Dining']
    }
  ];

  const mediaContacts = [
    {
      type: 'Press Inquiries',
      contact: 'Elena Bianchi',
      role: 'PR & Communications Manager',
      email: 'press@bigspontino.de',
      phone: '+49 30 1234 5686',
      specialties: ['Media Relations', 'Photography Coordination', 'Interview Scheduling']
    },
    {
      type: 'Partnership Opportunities',
      contact: 'Roberto Ferretti',
      role: 'Business Development',
      email: 'partnerships@bigspontino.de',
      phone: '+49 30 1234 5687',
      specialties: ['Supplier Relations', 'Cultural Partnerships', 'Community Events']
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Meet Our Famiglia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The passionate team behind Bigspontino's authentic Italian experience. 
            Each member brings unique expertise and genuine Italian hospitality.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-warm transition-warm hover:shadow-warm-lg">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-primary mb-1">
                        {member.name}
                      </h3>
                      <p className="text-accent font-medium mb-2">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.specialty}</p>
                    </div>
                    <div className="flex space-x-2">
                      {member.languages.map((lang, langIndex) => (
                        <span
                          key={langIndex}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specIndex) => (
                        <span
                          key={specIndex}
                          className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-md"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center">
                        <Icon name="Mail" size={16} className="text-accent mr-2" />
                        <a
                          href={`mailto:${member.contact.email}`}
                          className="text-foreground hover:text-primary transition-warm truncate"
                        >
                          {member.contact.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Phone" size={16} className="text-accent mr-2" />
                        <a
                          href={`tel:${member.contact.phone}`}
                          className="text-foreground hover:text-primary transition-warm"
                        >
                          {member.contact.phone}
                        </a>
                      </div>
                      <div className="flex items-center sm:col-span-2">
                        <Icon name="Clock" size={16} className="text-accent mr-2" />
                        <span className="text-muted-foreground">{member.contact.availability}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Media & Partnership Contacts */}
        <div className="grid md:grid-cols-2 gap-8">
          {mediaContacts.map((contact, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-warm">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon 
                    name={contact.type.includes('Press') ? 'Camera' : 'Handshake'} 
                    size={24} 
                    className="text-primary" 
                  />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-primary mb-1">
                    {contact.type}
                  </h3>
                  <p className="text-accent font-medium">{contact.contact}</p>
                  <p className="text-sm text-muted-foreground">{contact.role}</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="text-accent mr-3" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-foreground hover:text-primary transition-warm"
                  >
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="text-accent mr-3" />
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-foreground hover:text-primary transition-warm"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Areas of Expertise:</h4>
                <div className="space-y-1">
                  {contact.specialties.map((specialty, specIndex) => (
                    <div key={specIndex} className="flex items-center">
                      <Icon name="Check" size={14} className="text-success mr-2" />
                      <span className="text-sm text-muted-foreground">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-tuscan rounded-lg p-8">
            <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
              Need Personalized Assistance?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team is here to help create the perfect Italian experience for you. 
              Whether it's a special celebration or cultural inquiry, we're just a call away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+493012345678"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium transition-warm hover:bg-primary/90"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Call Main Line
              </a>
              <a
                href="mailto:info@bigspontino.de"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md font-medium transition-warm hover:bg-primary/5"
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamContacts;