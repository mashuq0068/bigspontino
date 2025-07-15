import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const GuestPreferences = ({ preferences, onPreferencesChange }) => {
  const [activeSection, setActiveSection] = useState('dining');

  const dietaryOptions = [
    { value: 'none', label: 'No dietary restrictions' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'gluten-free', label: 'Gluten-free' },
    { value: 'dairy-free', label: 'Dairy-free' },
    { value: 'nut-allergy', label: 'Nut allergy' },
    { value: 'seafood-allergy', label: 'Seafood allergy' },
    { value: 'other', label: 'Other (specify below)' }
  ];

  const winePreferenceOptions = [
    { value: 'red', label: 'Red wines' },
    { value: 'white', label: 'White wines' },
    { value: 'sparkling', label: 'Sparkling wines' },
    { value: 'rosé', label: 'Rosé wines' },
    { value: 'no-alcohol', label: 'Non-alcoholic options' },
    { value: 'sommelier', label: 'Sommelier recommendations' }
  ];

  const ambianceOptions = [
    { value: 'romantic', label: 'Romantic & intimate' },
    { value: 'lively', label: 'Lively & social' },
    { value: 'quiet', label: 'Quiet & peaceful' },
    { value: 'cultural', label: 'Cultural & educational' }
  ];

  const culturalInterests = [
    { value: 'history', label: 'Italian culinary history' },
    { value: 'regions', label: 'Regional specialties' },
    { value: 'techniques', label: 'Cooking techniques' },
    { value: 'ingredients', label: 'Ingredient sourcing' },
    { value: 'wine', label: 'Wine culture' },
    { value: 'traditions', label: 'Family traditions' }
  ];

  const handlePreferenceChange = (field, value) => {
    onPreferencesChange({
      ...preferences,
      [field]: value
    });
  };

  const sections = [
    { id: 'dining', name: 'Dining Preferences', icon: 'Utensils' },
    { id: 'wine', name: 'Wine & Beverages', icon: 'Wine' },
    { id: 'ambiance', name: 'Atmosphere', icon: 'Heart' },
    { id: 'cultural', name: 'Cultural Interests', icon: 'BookOpen' }
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-warm border border-warm">
      <div className="mb-6">
        <h3 className="text-xl font-playfair font-semibold text-foreground mb-1">
          Guest Preferences
        </h3>
        <p className="text-sm text-muted-foreground">
          Help us personalize your authentic Italian dining experience
        </p>
      </div>

      {/* Section Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 p-1 bg-muted rounded-lg">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`
              flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-warm
              ${activeSection === section.id
                ? 'bg-background text-primary shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
              }
            `}
          >
            <Icon name={section.icon} size={16} />
            <span>{section.name}</span>
          </button>
        ))}
      </div>

      {/* Dining Preferences */}
      {activeSection === 'dining' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Number of Guests"
              type="number"
              min="1"
              max="12"
              value={preferences.guestCount || '2'}
              onChange={(e) => handlePreferenceChange('guestCount', e.target.value)}
              description="Maximum 12 guests per reservation"
            />
            
            <Select
              label="Primary Dietary Requirements"
              options={dietaryOptions}
              value={preferences.dietaryRestrictions || 'none'}
              onChange={(value) => handlePreferenceChange('dietaryRestrictions', value)}
            />
          </div>

          {preferences.dietaryRestrictions === 'other' && (
            <Input
              label="Please specify dietary requirements"
              type="text"
              placeholder="Describe your specific dietary needs"
              value={preferences.customDietary || ''}
              onChange={(e) => handlePreferenceChange('customDietary', e.target.value)}
            />
          )}

          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Food Preferences
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Checkbox
                label="Prefer traditional recipes"
                checked={preferences.traditionalRecipes || false}
                onChange={(e) => handlePreferenceChange('traditionalRecipes', e.target.checked)}
              />
              <Checkbox
                label="Open to chef's recommendations"
                checked={preferences.chefRecommendations || false}
                onChange={(e) => handlePreferenceChange('chefRecommendations', e.target.checked)}
              />
              <Checkbox
                label="Interested in seasonal specials"
                checked={preferences.seasonalSpecials || false}
                onChange={(e) => handlePreferenceChange('seasonalSpecials', e.target.checked)}
              />
              <Checkbox
                label="Family-style sharing preferred"
                checked={preferences.familyStyle || false}
                onChange={(e) => handlePreferenceChange('familyStyle', e.target.checked)}
              />
            </div>
          </div>

          <Input
            label="Food Allergies & Intolerances"
            type="text"
            placeholder="Please list any allergies or intolerances"
            value={preferences.allergies || ''}
            onChange={(e) => handlePreferenceChange('allergies', e.target.value)}
            description="This information will be shared with our kitchen team"
          />
        </div>
      )}

      {/* Wine & Beverages */}
      {activeSection === 'wine' && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Wine Preferences
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {winePreferenceOptions.map((option) => (
                <Checkbox
                  key={option.value}
                  label={option.label}
                  checked={preferences.winePreferences?.includes(option.value) || false}
                  onChange={(e) => {
                    const current = preferences.winePreferences || [];
                    const updated = e.target.checked
                      ? [...current, option.value]
                      : current.filter(item => item !== option.value);
                    handlePreferenceChange('winePreferences', updated);
                  }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Wine Budget (per bottle)"
              type="text"
              placeholder="e.g., €30-50, €50+, No preference"
              value={preferences.wineBudget || ''}
              onChange={(e) => handlePreferenceChange('wineBudget', e.target.value)}
            />
            
            <Input
              label="Preferred Wine Regions"
              type="text"
              placeholder="e.g., Tuscany, Piedmont, Veneto"
              value={preferences.wineRegions || ''}
              onChange={(e) => handlePreferenceChange('wineRegions', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Beverage Options
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Checkbox
                label="Italian craft cocktails"
                checked={preferences.cocktails || false}
                onChange={(e) => handlePreferenceChange('cocktails', e.target.checked)}
              />
              <Checkbox
                label="Espresso & Italian coffee"
                checked={preferences.coffee || false}
                onChange={(e) => handlePreferenceChange('coffee', e.target.checked)}
              />
              <Checkbox
                label="Digestivi (after-dinner drinks)"
                checked={preferences.digestivi || false}
                onChange={(e) => handlePreferenceChange('digestivi', e.target.checked)}
              />
              <Checkbox
                label="Non-alcoholic pairings"
                checked={preferences.nonAlcoholic || false}
                onChange={(e) => handlePreferenceChange('nonAlcoholic', e.target.checked)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Atmosphere */}
      {activeSection === 'ambiance' && (
        <div className="space-y-6">
          <Select
            label="Preferred Atmosphere"
            options={ambianceOptions}
            value={preferences.ambiance || ''}
            onChange={(value) => handlePreferenceChange('ambiance', value)}
            description="Help us set the perfect mood for your dining experience"
          />

          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Seating Preferences
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Checkbox
                label="Window seating"
                checked={preferences.windowSeating || false}
                onChange={(e) => handlePreferenceChange('windowSeating', e.target.checked)}
              />
              <Checkbox
                label="Quiet corner"
                checked={preferences.quietCorner || false}
                onChange={(e) => handlePreferenceChange('quietCorner', e.target.checked)}
              />
              <Checkbox
                label="Chef's counter"
                checked={preferences.chefsCounter || false}
                onChange={(e) => handlePreferenceChange('chefsCounter', e.target.checked)}
              />
              <Checkbox
                label="Private alcove"
                checked={preferences.privateAlcove || false}
                onChange={(e) => handlePreferenceChange('privateAlcove', e.target.checked)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Service Style
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Checkbox
                label="Detailed dish explanations"
                checked={preferences.dishExplanations || false}
                onChange={(e) => handlePreferenceChange('dishExplanations', e.target.checked)}
              />
              <Checkbox
                label="Wine service guidance"
                checked={preferences.wineGuidance || false}
                onChange={(e) => handlePreferenceChange('wineGuidance', e.target.checked)}
              />
              <Checkbox
                label="Minimal interruptions"
                checked={preferences.minimalService || false}
                onChange={(e) => handlePreferenceChange('minimalService', e.target.checked)}
              />
              <Checkbox
                label="Interactive dining experience"
                checked={preferences.interactiveService || false}
                onChange={(e) => handlePreferenceChange('interactiveService', e.target.checked)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Cultural Interests */}
      {activeSection === 'cultural' && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Cultural Learning Interests
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {culturalInterests.map((interest) => (
                <Checkbox
                  key={interest.value}
                  label={interest.label}
                  checked={preferences.culturalInterests?.includes(interest.value) || false}
                  onChange={(e) => {
                    const current = preferences.culturalInterests || [];
                    const updated = e.target.checked
                      ? [...current, interest.value]
                      : current.filter(item => item !== interest.value);
                    handlePreferenceChange('culturalInterests', updated);
                  }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Favorite Italian Region"
              type="text"
              placeholder="e.g., Tuscany, Sicily, Emilia-Romagna"
              value={preferences.favoriteRegion || ''}
              onChange={(e) => handlePreferenceChange('favoriteRegion', e.target.value)}
            />
            
            <Input
              label="Italian Language Level"
              type="text"
              placeholder="e.g., Beginner, Intermediate, Fluent"
              value={preferences.languageLevel || ''}
              onChange={(e) => handlePreferenceChange('languageLevel', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Experience Enhancements
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Checkbox
                label="Chef interaction during meal"
                checked={preferences.chefInteraction || false}
                onChange={(e) => handlePreferenceChange('chefInteraction', e.target.checked)}
              />
              <Checkbox
                label="Ingredient sourcing stories"
                checked={preferences.ingredientStories || false}
                onChange={(e) => handlePreferenceChange('ingredientStories', e.target.checked)}
              />
              <Checkbox
                label="Traditional music playlist"
                checked={preferences.traditionalMusic || false}
                onChange={(e) => handlePreferenceChange('traditionalMusic', e.target.checked)}
              />
              <Checkbox
                label="Recipe sharing"
                checked={preferences.recipeSharing || false}
                onChange={(e) => handlePreferenceChange('recipeSharing', e.target.checked)}
              />
            </div>
          </div>

          <Input
            label="Special Cultural Requests"
            type="text"
            placeholder="Any specific cultural experiences you'd like to explore?"
            value={preferences.culturalRequests || ''}
            onChange={(e) => handlePreferenceChange('culturalRequests', e.target.value)}
          />
        </div>
      )}

      {/* Summary */}
      <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Info" size={16} className="text-primary" />
          <h4 className="font-medium text-primary">Preference Summary</h4>
        </div>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>• Guests: {preferences.guestCount || '2'}</p>
          <p>• Dietary: {dietaryOptions.find(opt => opt.value === preferences.dietaryRestrictions)?.label || 'Not specified'}</p>
          <p>• Atmosphere: {ambianceOptions.find(opt => opt.value === preferences.ambiance)?.label || 'Not specified'}</p>
          <p>• Wine preferences: {preferences.winePreferences?.length || 0} selected</p>
          <p>• Cultural interests: {preferences.culturalInterests?.length || 0} selected</p>
        </div>
      </div>
    </div>
  );
};

export default GuestPreferences;