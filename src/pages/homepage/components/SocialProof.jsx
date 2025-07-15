import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'EN';
    setCurrentLanguage(savedLanguage);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Maria & Giuseppe Bianchi",
      occasion: { EN: "25th Anniversary Celebration", DE: "25. Hochzeitstag Feier" },
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      review: {
        EN: `Bigspontino transformed our anniversary into an unforgettable journey through Italy. Every dish told a story, every wine carried memories of our honeymoon in Tuscany. The staff treated us like family.`,
        DE: `Bigspontino verwandelte unseren Hochzeitstag in eine unvergessliche Reise durch Italien. Jedes Gericht erzählte eine Geschichte, jeder Wein trug Erinnerungen an unsere Flitterwochen in der Toskana. Das Personal behandelte uns wie Familie.`
      },
      rating: 5,
      date: "2024-06-15",
      location: "Munich, Germany"
    },
    {
      id: 2,
      name: "James & Sarah Mitchell",
      occasion: { EN: "Cultural Discovery Evening", DE: "Kultureller Entdeckungsabend" },
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
      review: {
        EN: `As food enthusiasts, we've dined at many Italian restaurants, but Bigspontino is different. The cultural storytelling, the authentic ingredients, the passion - it's not just dinner, it's an education in Italian soul.`,
        DE: `Als Food-Enthusiasten haben wir in vielen italienischen Restaurants gegessen, aber Bigspontino ist anders. Das kulturelle Storytelling, die authentischen Zutaten, die Leidenschaft - es ist nicht nur ein Abendessen, es ist eine Bildung in italienischer Seele.`
      },
      rating: 5,
      date: "2024-07-02",
      location: "London, UK"
    },
    {
      id: 3,
      name: "Dr. Elena Rossi",
      occasion: { EN: "Business Dinner", DE: "Geschäftsessen" },
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg",
      review: {
        EN: `Brought my international clients here and they were amazed by the authentic Italian experience. The truffle risotto was perfection, and the wine selection impressed even our sommelier colleague.`,
        DE: `Brachte meine internationalen Kunden hierher und sie waren von der authentischen italienischen Erfahrung begeistert. Das Trüffel-Risotto war Perfektion, und die Weinauswahl beeindruckte sogar unseren Sommelier-Kollegen.`
      },
      rating: 5,
      date: "2024-06-28",
      location: "Frankfurt, Germany"
    }
  ];

  const mediaRecognition = [
    {
      publication: "Gourmet Magazine",
      award: { EN: "Best Italian Restaurant 2024", DE: "Bestes Italienisches Restaurant 2024" },
      logo: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
      publication: "Culinary Excellence Awards",
      award: { EN: "Authentic Cuisine Award", DE: "Authentische Küche Auszeichnung" },
      logo: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    },
    {
      publication: "Food & Wine International",
      award: { EN: "Cultural Dining Experience", DE: "Kulturelles Dining Erlebnis" },
      logo: "https://images.pexels.com/photos/4253285/pexels-photo-4253285.jpeg"
    }
  ];

  const stats = [
    {
      number: "2,500+",
      label: { EN: "Happy Guests", DE: "Glückliche Gäste" },
      icon: "Users"
    },
    {
      number: "98%",
      label: { EN: "Return Rate", DE: "Rückkehrrate" },
      icon: "Heart"
    },
    {
      number: "15+",
      label: { EN: "Awards Won", DE: "Gewonnene Auszeichnungen" },
      icon: "Award"
    },
    {
      number: "4.9/5",
      label: { EN: "Average Rating", DE: "Durchschnittsbewertung" },
      icon: "Star"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-primary mb-4">
            {currentLanguage === 'EN' ? 'Celebrated Experiences' : 'Gefeierte Erlebnisse'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {currentLanguage === 'EN' ?'Stories from our guests who have discovered the authentic taste of Italy with us.' :'Geschichten von unseren Gästen, die mit uns den authentischen Geschmack Italiens entdeckt haben.'
            }
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={24} className="text-accent" />
              </div>
              <div className="font-playfair text-2xl lg:text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label[currentLanguage]}
              </div>
            </div>
          ))}
        </div>

        {/* Guest Testimonials */}
        <div className="mb-16">
          <h3 className="font-playfair text-2xl font-bold text-primary text-center mb-8">
            {currentLanguage === 'EN' ? 'Guest Stories' : 'Gäste-Geschichten'}
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-muted/30 rounded-xl p-6 shadow-warm">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.occasion[currentLanguage]}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-foreground text-sm leading-relaxed mb-4">
                  "{testimonial.review[currentLanguage]}"
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{testimonial.location}</span>
                  <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Recognition */}
        <div className="text-center">
          <h3 className="font-playfair text-2xl font-bold text-primary mb-8">
            {currentLanguage === 'EN' ? 'Media Recognition' : 'Medien-Anerkennung'}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {mediaRecognition.map((recognition, index) => (
              <div key={index} className="bg-muted/30 rounded-xl p-6 shadow-warm">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} className="text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-2">
                  {recognition.publication}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {recognition.award[currentLanguage]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {currentLanguage === 'EN' ?'Ready to create your own memorable experience?' :'Bereit, Ihr eigenes unvergessliches Erlebnis zu schaffen?'
            }
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Icon name="Phone" size={16} />
              <span>+49 89 123 456 789</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Icon name="Mail" size={16} />
              <span>reservations@bigspontino.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;