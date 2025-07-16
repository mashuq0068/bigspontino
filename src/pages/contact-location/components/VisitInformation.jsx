import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VisitInformation = () => {
  const [selectedDay, setSelectedDay] = useState('today');

  const operatingHours = {
    today: {
      day: 'Today (Monday)',
      lunch: '12:00 - 15:00',
      dinner: '17:00 - 23:00',
      status: 'Open',
      note: 'Kitchen closes 30 minutes before closing time'
    },
    tuesday: {
      day: 'Tuesday',
      lunch: '12:00 - 15:00',
      dinner: '17:00 - 23:00',
      status: 'Open'
    },
    wednesday: {
      day: 'Wednesday',
      lunch: '12:00 - 15:00',
      dinner: '17:00 - 23:00',
      status: 'Open'
    },
    thursday: {
      day: 'Thursday',
      lunch: '12:00 - 15:00',
      dinner: '17:00 - 23:00',
      status: 'Open'
    },
    friday: {
      day: 'Friday',
      lunch: '12:00 - 15:00',
      dinner: '17:00 - 24:00',
      status: 'Open',
      note: 'Extended hours for weekend'
    },
    saturday: {
      day: 'Saturday',
      lunch: '11:00 - 15:30',
      dinner: '17:00 - 24:00',
      status: 'Open',
      note: 'Brunch available 11:00 - 14:00'
    },
    sunday: {
      day: 'Sunday',
      lunch: '11:00 - 15:30',
      dinner: '17:00 - 22:00',
      status: 'Open',
      note: 'Family day - special children\'s menu'
    }
  };

  const culturalTips = [
    {
      title: 'Italian Dining Times',
      icon: 'Clock',
      description: 'Lunch is typically served 12:00-15:00, dinner from 19:00 onwards. Early dinner (17:00-18:30) is perfect for families.',
      tip: 'Italians rarely dine before 19:00 for dinner'
    },
    {
      title: 'Dress Code',
      icon: 'Shirt',
      description: 'Smart casual attire is appreciated. Think elegant comfort - no shorts or flip-flops for dinner service.',
      tip: 'Italians dress well for dining out'
    },
    {
      title: 'Dining Pace',
      icon: 'Coffee',
      description: 'Italian meals are meant to be savored. Allow 2-3 hours for a complete dinner experience with multiple courses.',
      tip: 'La dolce vita - life is meant to be enjoyed slowly'
    },
    {
      title: 'Tipping Culture',
      icon: 'Euro',
      description: 'Service charge is included. Additional 5-10% tip for exceptional service is appreciated but not expected.',
      tip: 'Quality service is a matter of pride, not obligation'
    }
  ];

  const accommodations = [
    {
      category: 'Dietary Requirements',
      icon: 'Utensils',
      options: [
        'Vegetarian & Vegan Options',
        'Gluten-Free Menu Available',
        'Lactose-Free Alternatives',
        'Halal Preparation Available',
        'Children\'s Menu (Under 12)'
      ]
    },
    {
      category: 'Accessibility',
      icon: 'Accessibility',
      options: [
        'Wheelchair Accessible Entrance',
        'Accessible Restroom Facilities',
        'Reserved Parking Space',
        'Braille Menu Available',
        'Staff Assistance Available'
      ]
    },
    {
      category: 'Group Dining',
      icon: 'Users',
      options: [
        'Private Dining Room (8-20 guests)',
        'Semi-Private Sections (6-12 guests)',
        'Large Group Accommodations (20+ guests)',
        'Custom Menu Planning',
        'Event Coordination Services'
      ]
    }
  ];

  const seasonalInfo = {
    current: 'Summer 2024',
    specialHours: 'Extended terrace hours until 24:00',
    seasonalMenu: 'Fresh summer ingredients from Italian suppliers',
    events: 'Outdoor wine tastings every Friday evening'
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Plan Your Visit
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know for the perfect Italian dining experience, 
            from cultural customs to practical information.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Operating Hours */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 shadow-warm">
              <h3 className="font-playfair text-xl font-bold text-primary mb-6 flex items-center">
                <Icon name="Clock" size={24} className="mr-3 text-accent" />
                Operating Hours
              </h3>
              
              <div className="space-y-2 mb-6">
                {Object.entries(operatingHours).map(([key, hours]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedDay(key)}
                    className={`w-full text-left p-3 rounded-md transition-warm ${
                      selectedDay === key
                        ? 'bg-primary/10 text-primary border-l-4 border-primary' :'hover:bg-muted/50 text-foreground'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{hours.day}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        hours.status === 'Open' ?'bg-success/10 text-success' :'bg-error/10 text-error'
                      }`}>
                        {hours.status}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">
                  {operatingHours[selectedDay].day}
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lunch:</span>
                    <span className="font-medium">{operatingHours[selectedDay].lunch}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dinner:</span>
                    <span className="font-medium">{operatingHours[selectedDay].dinner}</span>
                  </div>
                  {operatingHours[selectedDay].note && (
                    <p className="text-xs text-accent mt-2 italic">
                      {operatingHours[selectedDay].note}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="bg-accent/10 rounded-lg p-4">
                  <h4 className="font-semibold text-accent mb-2 flex items-center">
                    <Icon name="Sun" size={16} className="mr-2" />
                    {seasonalInfo.current}
                  </h4>
                  <p className="text-sm text-foreground mb-2">{seasonalInfo.specialHours}</p>
                  <p className="text-xs text-muted-foreground">{seasonalInfo.events}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cultural Tips */}
          <div className="lg:col-span-2">
            <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
              Before You Arrive - Italian Dining Culture
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {culturalTips.map((tip, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-warm">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon name={tip.icon} size={20} className="text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground text-lg">{tip.title}</h4>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                    {tip.description}
                  </p>
                  <div className="bg-primary/5 rounded-lg p-3">
                    <p className="text-xs text-primary font-medium italic">
                      💡 {tip.tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Special Accommodations */}
        <div className="mb-16">
          <h3 className="font-playfair text-2xl font-bold text-primary mb-8 text-center">
            Special Accommodations
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {accommodations.map((category, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-warm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon name={category.icon} size={24} className="text-secondary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-lg">{category.category}</h4>
                </div>
                <ul className="space-y-3">
                  {category.options.map((option, optionIndex) => (
                    <li key={optionIndex} className="flex items-center text-sm">
                      <Icon name="Check" size={16} className="text-success mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-tuscan rounded-lg p-8 text-center">
          <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
            Ready to Experience Bigspontino?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join us for an authentic Italian journey where every meal is a celebration 
            of culture, tradition, and the art of living well.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-conversion-gold bg-conversion-gold/90 "
            >
              Reserve Your Table
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              className=""
            >
              Call for Special Requests
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitInformation;