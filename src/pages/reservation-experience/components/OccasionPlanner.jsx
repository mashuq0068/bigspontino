import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const OccasionPlanner = ({ selectedOccasion, onOccasionSelect, occasionDetails, onDetailsChange }) => {
  const [showCustomDetails, setShowCustomDetails] = useState(false);

  const occasions = [
    {
      id: 'anniversary',
      name: 'Anniversary Celebration',
      icon: 'Heart',
      description: 'Romantic evening with personalized touches',
      features: [
        'Complimentary prosecco toast',
        'Rose petals on table',
        'Personalized menu card',
        'Chef\'s special dessert'
      ],
      customizations: [
        'Special dietary requirements',
        'Preferred seating arrangement',
        'Anniversary milestone',
        'Special requests'
      ]
    },
    {
      id: 'birthday',
      name: 'Birthday Celebration',
      icon: 'Gift',
      description: 'Festive dining with birthday surprises',
      features: [
        'Birthday dessert with candle',
        'Celebration playlist',
        'Group photo service',
        'Special birthday menu'
      ],
      customizations: [
        'Age being celebrated',
        'Favorite Italian dishes',
        'Cake preferences',
        'Party size and seating'
      ]
    },
    {
      id: 'business',
      name: 'Business Dinner',
      icon: 'Briefcase',
      description: 'Professional atmosphere with wine selections',
      features: [
        'Quiet corner seating',
        'Business-friendly timing',
        'Wine sommelier service',
        'Discrete service style'
      ],
      customizations: [
        'Meeting duration',
        'Dietary restrictions',
        'Wine preferences',
        'Privacy requirements'
      ]
    },
    {
      id: 'cultural',
      name: 'Cultural Immersion',
      icon: 'BookOpen',
      description: 'Educational dining with chef interaction',
      features: [
        'Chef table experience',
        'Ingredient story telling',
        'Regional wine education',
        'Cultural context sharing'
      ],
      customizations: [
        'Preferred Italian region',
        'Cooking technique interest',
        'Wine knowledge level',
        'Cultural topics of interest'
      ]
    },
    {
      id: 'family',
      name: 'Family Gathering',
      icon: 'Users',
      description: 'Warm family-style dining experience',
      features: [
        'Family-style sharing plates',
        'Kid-friendly options',
        'Flexible timing',
        'Group photo opportunities'
      ],
      customizations: [
        'Number of children',
        'Age ranges',
        'Family dietary needs',
        'Special family traditions'
      ]
    },
    {
      id: 'casual',
      name: 'Casual Dining',
      icon: 'Coffee',
      description: 'Relaxed Italian dining experience',
      features: [
        'Flexible menu options',
        'Casual atmosphere',
        'No time pressure',
        'Comfortable seating'
      ],
      customizations: [
        'Preferred dining pace',
        'Menu preferences',
        'Atmosphere preference',
        'Special requests'
      ]
    }
  ];

  const handleCustomizationChange = (field, value) => {
    onDetailsChange({
      ...occasionDetails,
      [field]: value
    });
  };

  const selectedOccasionData = occasions.find(occ => occ.id === selectedOccasion);

  return (
    <div className="bg-card rounded-xl p-6 shadow-warm border border-warm">
      <div className="mb-6">
        <h3 className="text-xl font-playfair font-semibold text-foreground mb-1">
          Plan Your Occasion
        </h3>
        <p className="text-sm text-muted-foreground">
          Let us create the perfect Italian dining experience for your special moment
        </p>
      </div>

      {/* Occasion Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {occasions.map((occasion) => (
          <button
            key={occasion.id}
            onClick={() => onOccasionSelect(occasion.id)}
            className={`
              p-4 rounded-lg border transition-warm text-left
              ${selectedOccasion === occasion.id
                ? 'border-primary bg-primary/10 shadow-warm'
                : 'border-warm hover:border-primary/50 hover:bg-primary/5'
              }
            `}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center
                ${selectedOccasion === occasion.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
                }
              `}>
                <Icon name={occasion.icon} size={24} />
              </div>
              <div>
                <h4 className="font-medium text-foreground">{occasion.name}</h4>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{occasion.description}</p>
            <div className="space-y-1">
              {occasion.features.slice(0, 2).map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Icon name="Check" size={12} className="text-success" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* Selected Occasion Details */}
      {selectedOccasionData && (
        <div className="space-y-6">
          <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name={selectedOccasionData.icon} size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-playfair font-semibold text-primary">{selectedOccasionData.name}</h4>
                <p className="text-sm text-muted-foreground">{selectedOccasionData.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-foreground mb-2">Included Features</h5>
                <div className="space-y-1">
                  {selectedOccasionData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={14} className="text-success" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-foreground mb-2">Customization Options</h5>
                <div className="space-y-1">
                  {selectedOccasionData.customizations.slice(0, 3).map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Settings" size={14} className="text-accent" />
                      <span>{option}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Customization Form */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-foreground">Customize Your Experience</h4>
              <Button
                variant="ghost"
                size="sm"
                iconName={showCustomDetails ? "ChevronUp" : "ChevronDown"}
                iconPosition="right"
                onClick={() => setShowCustomDetails(!showCustomDetails)}
              >
                {showCustomDetails ? 'Hide Details' : 'Show Details'}
              </Button>
            </div>

            {showCustomDetails && (
              <div className="space-y-4 p-4 bg-background rounded-lg border border-warm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Special Requests"
                    type="text"
                    placeholder="Any special arrangements needed?"
                    value={occasionDetails.specialRequests || ''}
                    onChange={(e) => handleCustomizationChange('specialRequests', e.target.value)}
                  />
                  
                  <Input
                    label="Dietary Requirements"
                    type="text"
                    placeholder="Allergies, preferences, restrictions"
                    value={occasionDetails.dietaryRequirements || ''}
                    onChange={(e) => handleCustomizationChange('dietaryRequirements', e.target.value)}
                  />
                </div>

                {selectedOccasion === 'anniversary' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Anniversary Year"
                      type="number"
                      placeholder="Which anniversary?"
                      value={occasionDetails.anniversaryYear || ''}
                      onChange={(e) => handleCustomizationChange('anniversaryYear', e.target.value)}
                    />
                    <Input
                      label="Partner's Name"
                      type="text"
                      placeholder="For personalized menu card"
                      value={occasionDetails.partnerName || ''}
                      onChange={(e) => handleCustomizationChange('partnerName', e.target.value)}
                    />
                  </div>
                )}

                {selectedOccasion === 'birthday' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Birthday Person's Name"
                      type="text"
                      placeholder="For personalized celebration"
                      value={occasionDetails.birthdayName || ''}
                      onChange={(e) => handleCustomizationChange('birthdayName', e.target.value)}
                    />
                    <Input
                      label="Age Celebrating"
                      type="number"
                      placeholder="Special milestone?"
                      value={occasionDetails.age || ''}
                      onChange={(e) => handleCustomizationChange('age', e.target.value)}
                    />
                  </div>
                )}

                <div className="space-y-3">
                  <h5 className="font-medium text-foreground">Additional Services</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Checkbox
                      label="Wine pairing recommendations"
                      checked={occasionDetails.winePairing || false}
                      onChange={(e) => handleCustomizationChange('winePairing', e.target.checked)}
                    />
                    <Checkbox
                      label="Photography service"
                      checked={occasionDetails.photography || false}
                      onChange={(e) => handleCustomizationChange('photography', e.target.checked)}
                    />
                    <Checkbox
                      label="Private dining area"
                      checked={occasionDetails.privateDining || false}
                      onChange={(e) => handleCustomizationChange('privateDining', e.target.checked)}
                    />
                    <Checkbox
                      label="Cultural storytelling"
                      checked={occasionDetails.culturalStory || false}
                      onChange={(e) => handleCustomizationChange('culturalStory', e.target.checked)}
                    />
                  </div>
                </div>

                <Input
                  label="Additional Notes"
                  type="text"
                  placeholder="Anything else we should know to make your experience perfect?"
                  value={occasionDetails.additionalNotes || ''}
                  onChange={(e) => handleCustomizationChange('additionalNotes', e.target.value)}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OccasionPlanner;