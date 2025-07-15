import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationMap = () => {
  const [activeTab, setActiveTab] = useState('map');

  const locationDetails = {
    address: "Kastanienallee 42, 10119 Berlin, Germany",
    coordinates: "52.5289,13.4015",
    neighborhood: "Prenzlauer Berg",
    landmarks: [
      { name: "Hackescher Markt", distance: "800m", icon: "Train" },
      { name: "Mauerpark", distance: "1.2km", icon: "Trees" },
      { name: "Museum Island", distance: "2.1km", icon: "Building" }
    ],
    parking: [
      { type: "Street Parking", availability: "Limited", cost: "€2/hour" },
      { type: "Parking Garage", name: "Hackescher Hof", distance: "600m" },
      { type: "Bike Parking", availability: "Available", cost: "Free" }
    ],
    transport: [
      { type: "U-Bahn", line: "U8", station: "Rosenthaler Platz", time: "3 min walk" },
      { type: "Tram", line: "M1, M12", station: "Kastanienallee", time: "1 min walk" },
      { type: "Bus", line: "142, 245", station: "Zionskirchplatz", time: "4 min walk" }
    ]
  };

  const tabs = [
    { id: 'map', label: 'Interactive Map', icon: 'Map' },
    { id: 'directions', label: 'Directions', icon: 'Navigation' },
    { id: 'parking', label: 'Parking', icon: 'Car' },
    { id: 'transport', label: 'Public Transport', icon: 'Train' }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Find Your Way to Bigspontino
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Berlin's vibrant Prenzlauer Berg district, 
            surrounded by culture and easily accessible from anywhere in the city.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 bg-card rounded-lg p-2 shadow-warm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-3 rounded-md text-sm font-medium transition-warm ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
              }`}
            >
              <Icon name={tab.icon} size={16} className="mr-2" />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            {activeTab === 'map' && (
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
            )}

            {activeTab === 'directions' && (
              <div className="bg-card rounded-lg p-6 shadow-warm">
                <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
                  Getting to Bigspontino
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Icon name="MapPin" size={24} className="text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Our Address</h4>
                      <p className="text-muted-foreground">{locationDetails.address}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {locationDetails.neighborhood} District
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Icon name="Navigation" size={24} className="text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">From City Center</h4>
                      <p className="text-muted-foreground">
                        Take U8 to Rosenthaler Platz, then 3-minute walk along Kastanienallee. 
                        Look for our warm terracotta facade with Italian cypress trees.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Icon name="Plane" size={24} className="text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">From Airport</h4>
                      <p className="text-muted-foreground">
                        Airport Express to Alexanderplatz, then U8 to Rosenthaler Platz. 
                        Total journey: approximately 45 minutes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'parking' && (
              <div className="bg-card rounded-lg p-6 shadow-warm">
                <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
                  Parking Options
                </h3>
                <div className="space-y-4">
                  {locationDetails.parking.map((option, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center">
                        <Icon 
                          name={option.type === 'Bike Parking' ? 'Bike' : 'Car'} 
                          size={20} 
                          className="text-accent mr-3" 
                        />
                        <div>
                          <h4 className="font-semibold text-foreground">{option.type}</h4>
                          {option.name && (
                            <p className="text-sm text-muted-foreground">{option.name}</p>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">
                          {option.availability || option.distance}
                        </p>
                        {option.cost && (
                          <p className="text-xs text-muted-foreground">{option.cost}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'transport' && (
              <div className="bg-card rounded-lg p-6 shadow-warm">
                <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
                  Public Transportation
                </h3>
                <div className="space-y-4">
                  {locationDetails.transport.map((option, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center">
                        <Icon name={option.type === 'Bus' ? 'Bus' : 'Train'} size={20} className="text-accent mr-3" />
                        <div>
                          <h4 className="font-semibold text-foreground">{option.type}</h4>
                          <p className="text-sm text-muted-foreground">
                            {option.line} - {option.station}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">{option.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Nearby Landmarks */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 shadow-warm">
              <h3 className="font-playfair text-xl font-bold text-primary mb-4">
                Nearby Landmarks
              </h3>
              <div className="space-y-3">
                {locationDetails.landmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Icon name={landmark.icon} size={16} className="text-accent mr-3" />
                      <span className="text-foreground">{landmark.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{landmark.distance}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  fullWidth
                  iconName="ExternalLink"
                  iconPosition="right"
                  className="text-sm"
                >
                  View in Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;