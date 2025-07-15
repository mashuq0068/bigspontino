import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactMethods = () => {
  const [language, setLanguage] = useState('EN');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  const content = {
    EN: {
      title: 'Get in Touch',
      subtitle: "Whether you're planning a special celebration or simply want to say ciao, we're here to help make your Italian experience unforgettable.",
      contactTitle: 'Contact Methods',
      formTitle: 'Send Us a Message',
      formLabels: {
        name: 'Full Name',
        phone: 'Phone Number',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Message'
      },
      subjectOptions: {
        general: 'General Inquiry',
        reservation: 'Reservation',
        event: 'Private Event',
        feedback: 'Feedback',
        press: 'Press Inquiry'
      },
      submitButton: 'Send Message',
      placeholder: {
        name: 'Your name',
        phone: '+49 30 ...',
        email: 'your.email@example.com',
        message: 'Tell us how we can help you...'
      }
    },
    DE: {
      title: 'Kontaktieren Sie uns',
      subtitle: "Ob Sie eine besondere Feier planen oder einfach nur Hallo sagen möchten, wir sind hier, um Ihr italienisches Erlebnis unvergesslich zu machen.",
      contactTitle: 'Kontaktmöglichkeiten',
      formTitle: 'Senden Sie uns eine Nachricht',
      formLabels: {
        name: 'Vollständiger Name',
        phone: 'Telefonnummer',
        email: 'E-Mail-Adresse',
        subject: 'Betreff',
        message: 'Nachricht'
      },
      subjectOptions: {
        general: 'Allgemeine Anfrage',
        reservation: 'Reservierung',
        event: 'Private Veranstaltung',
        feedback: 'Feedback',
        press: 'Presseanfrage'
      },
      submitButton: 'Nachricht senden',
      placeholder: {
        name: 'Ihr Name',
        phone: '+49 30 ...',
        email: 'ihre.email@beispiel.de',
        message: 'Teilen Sie uns mit, wie wir Ihnen helfen können...'
      }
    },
    IT: {
      title: 'Mettiti in Contatto',
      subtitle: "Che tu stia pianificando una celebrazione speciale o semplicemente vuoi salutare, siamo qui per rendere la tua esperienza italiana indimenticabile.",
      contactTitle: 'Metodi di Contatto',
      formTitle: 'Inviaci un Messaggio',
      formLabels: {
        name: 'Nome Completo',
        phone: 'Numero di Telefono',
        email: 'Indirizzo Email',
        subject: 'Oggetto',
        message: 'Messaggio'
      },
      subjectOptions: {
        general: 'Richiesta Generale',
        reservation: 'Prenotazione',
        event: 'Evento Privato',
        feedback: 'Feedback',
        press: 'Richiesta Stampa'
      },
      submitButton: 'Invia Messaggio',
      placeholder: {
        name: 'Il tuo nome',
        phone: '+49 30 ...',
        email: 'tua.email@esempio.com',
        message: 'Dicci come possiamo aiutarti...'
      }
    }
  };

  const t = content[language] || content.EN;

  const locationDetails = {
    address: language === 'DE' ? "Kastanienallee 42, 10119 Berlin, Deutschland" : 
             language === 'IT' ? "Kastanienallee 42, 10119 Berlino, Germania" : 
             "Kastanienallee 42, 10119 Berlin, Germany",
    coordinates: "52.5289,13.4015",
    neighborhood: language === 'DE' ? "Prenzlauer Berg" : 
                 language === 'IT' ? "Prenzlauer Berg" : 
                 "Prenzlauer Berg",
    landmarks: [
      { name: "Hackescher Markt", distance: "800m", icon: "Train" },
      { name: language === 'DE' ? "Mauerpark" : "Mauerpark", distance: "1.2km", icon: "Trees" },
      { name: language === 'DE' ? "Museumsinsel" : "Museum Island", distance: "2.1km", icon: "Building" }
    ],
    parking: [
      { type: language === 'DE' ? "Straßenparken" : language === 'IT' ? "Parcheggio stradale" : "Street Parking", 
        availability: language === 'DE' ? "Begrenzt" : language === 'IT' ? "Limitato" : "Limited", 
        cost: "€2/hour" },
      { type: language === 'DE' ? "Parkhaus" : language === 'IT' ? "Parcheggio coperto" : "Parking Garage", 
        name: "Hackescher Hof", distance: "600m" },
      { type: language === 'DE' ? "Fahrradparken" : language === 'IT' ? "Parcheggio bici" : "Bike Parking", 
        availability: language === 'DE' ? "Verfügbar" : language === 'IT' ? "Disponibile" : "Available", 
        cost: language === 'DE' ? "Kostenlos" : language === 'IT' ? "Gratuito" : "Free" }
    ],
    transport: [
      { type: "U-Bahn", line: "U8", 
        station: "Rosenthaler Platz", 
        time: language === 'DE' ? "3 min zu Fuß" : language === 'IT' ? "3 min a piedi" : "3 min walk" },
      { type: "Tram", line: "M1, M12", 
        station: "Kastanienallee", 
        time: language === 'DE' ? "1 min zu Fuß" : language === 'IT' ? "1 min a piedi" : "1 min walk" },
      { type: language === 'DE' ? "Bus" : "Bus", line: "142, 245", 
        station: "Zionskirchplatz", 
        time: language === 'DE' ? "4 min zu Fuß" : language === 'IT' ? "4 min a piedi" : "4 min walk" }
    ]
  };

  const contactMethods = [
    {
      type: language === 'DE' ? 'Reservierungen' : language === 'IT' ? 'Prenotazioni' : 'Reservations',
      icon: 'Calendar',
      phone: '+49 30 1234 5678',
      email: 'reservations@bigspontino.de',
      hours: language === 'DE' ? 'Täglich 10:00 - 22:00' : language === 'IT' ? 'Tutti i giorni 10:00 - 22:00' : 'Daily 10:00 - 22:00',
      description: language === 'DE' ? 'Tischreservierungen, besondere Anlässe, Gruppenessen' : 
                  language === 'IT' ? 'Prenotazioni tavoli, occasioni speciali, cene di gruppo' : 
                  'Table bookings, special occasions, group dining'
    }
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
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-primary mb-8">
              {t.contactTitle}
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
              <div className="bg-card rounded-lg overflow-hidden shadow-warm h-96 lg:h-[500px]">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Bigspontino Restaurant Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${locationDetails.coordinates}&z=16&output=embed`}
                  className="border-0"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card rounded-lg p-8 shadow-warm">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
                {t.formTitle}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label={t.formLabels.name}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.placeholder.name}
                    required
                  />
                  <Input
                    label={t.formLabels.phone}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t.placeholder.phone}
                  />
                </div>

                <Input
                  label={t.formLabels.email}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t.placeholder.email}
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.formLabels.subject}
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="general">{t.subjectOptions.general}</option>
                    <option value="reservation">{t.subjectOptions.reservation}</option>
                    <option value="event">{t.subjectOptions.event}</option>
                    <option value="feedback">{t.subjectOptions.feedback}</option>
                    <option value="press">{t.subjectOptions.press}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.formLabels.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder={t.placeholder.message}
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
                  {t.submitButton}
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