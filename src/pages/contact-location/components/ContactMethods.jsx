import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactMethods = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  const contactMethods = [
    {
      type: 'Reservations',
      icon: 'Calendar',
      phone: '+49 30 1234 5678',
      email: 'reservations@bigspontino.de',
      hours: 'Daily 10:00 - 22:00',
      description: 'Table bookings, special occasions, group dining'
    },
    {
      type: 'Events & Private Dining',
      icon: 'Users',
      phone: '+49 30 1234 5679',
      email: 'events@bigspontino.de',
      hours: 'Mon-Fri 9:00 - 18:00',
      description: 'Private parties, corporate events, cooking classes'
    },
    {
      type: 'General Inquiries',
      icon: 'MessageCircle',
      phone: '+49 30 1234 5680',
      email: 'info@bigspontino.de',
      hours: 'Mon-Sat 9:00 - 19:00',
      description: 'Questions, feedback, partnership opportunities'
    },
    {
      type: 'Press & Media',
      icon: 'Camera',
      phone: '+49 30 1234 5681',
      email: 'press@bigspontino.de',
      hours: 'Mon-Fri 9:00 - 17:00',
      description: 'Media inquiries, interviews, photography requests'
    }
  ];

  const socialMedia = [
    { name: 'Instagram', icon: 'Instagram', handle: '@bigspontino_berlin', followers: '12.5K' },
    { name: 'Facebook', icon: 'Facebook', handle: 'Bigspontino Berlin', followers: '8.2K' },
    { name: 'TikTok', icon: 'Music', handle: '@bigspontino', followers: '5.8K' },
    { name: 'YouTube', icon: 'Youtube', handle: 'Bigspontino Kitchen', followers: '3.1K' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're planning a special celebration or simply want to say ciao, 
            we're here to help make your Italian experience unforgettable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-primary mb-8">
              Contact Methods
            </h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-warm transition-warm hover:shadow-warm-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon name={method.icon} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-lg mb-2">
                        {method.type}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {method.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Icon name="Phone" size={16} className="text-accent mr-2" />
                          <a 
                            href={`tel:${method.phone}`}
                            className="text-foreground hover:text-primary transition-warm"
                          >
                            {method.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Icon name="Mail" size={16} className="text-accent mr-2" />
                          <a 
                            href={`mailto:${method.email}`}
                            className="text-foreground hover:text-primary transition-warm"
                          >
                            {method.email}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Icon name="Clock" size={16} className="text-accent mr-2" />
                          <span className="text-sm text-muted-foreground">{method.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
                Follow Our Journey
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialMedia.map((social, index) => (
                  <div key={index} className="bg-card rounded-lg p-4 shadow-warm text-center transition-warm hover:shadow-warm-lg hover:scale-105">
                    <Icon name={social.icon} size={32} className="text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {social.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">{social.handle}</p>
                    <p className="text-xs font-medium text-accent">{social.followers} followers</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card rounded-lg p-8 shadow-warm">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+49 30 ..."
                  />
                </div>

                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="reservation">Reservation</option>
                    <option value="event">Private Event</option>
                    <option value="feedback">Feedback</option>
                    <option value="press">Press Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  fullWidth
                  iconName="Send"
                  iconPosition="right"
                  className="bg-conversion-gold hover:bg-conversion-gold/90 font-montserrat"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;