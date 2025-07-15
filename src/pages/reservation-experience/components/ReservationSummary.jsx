import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ReservationSummary = ({ 
  reservationData, 
  onConfirm, 
  onEdit, 
  isLoading 
}) => {
  const {
    selectedDate,
    selectedTime,
    selectedTable,
    selectedOccasion,
    occasionDetails,
    preferences
  } = reservationData;

  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getOccasionName = (occasionId) => {
    const occasions = {
      'anniversary': 'Anniversary Celebration',
      'birthday': 'Birthday Celebration',
      'business': 'Business Dinner',
      'cultural': 'Cultural Immersion',
      'family': 'Family Gathering',
      'casual': 'Casual Dining'
    };
    return occasions[occasionId] || 'Special Dining';
  };

  const getDietaryInfo = () => {
    const dietaryMap = {
      'none': 'No dietary restrictions',
      'vegetarian': 'Vegetarian',
      'vegan': 'Vegan',
      'gluten-free': 'Gluten-free',
      'dairy-free': 'Dairy-free',
      'nut-allergy': 'Nut allergy',
      'seafood-allergy': 'Seafood allergy',
      'other': 'Custom dietary requirements'
    };
    return dietaryMap[preferences?.dietaryRestrictions] || 'Not specified';
  };

  const getEstimatedDuration = () => {
    if (selectedOccasion === 'cultural') return '2.5-3 hours';
    if (selectedOccasion === 'business') return '1.5-2 hours';
    return '2-2.5 hours';
  };

  const getEstimatedCost = () => {
    const baseCost = 45; // Base cost per person
    const guestCount = parseInt(preferences?.guestCount || '2');
    let total = baseCost * guestCount;
    
    // Add premium for special occasions
    if (selectedOccasion === 'cultural' || selectedOccasion === 'anniversary') {
      total += 15 * guestCount;
    }
    
    // Add premium for premium tables
    if (selectedTable?.premium) {
      total += 20;
    }
    
    return total;
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-warm border border-warm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-playfair font-semibold text-foreground">
          Reservation Summary
        </h3>
        <Button
          variant="ghost"
          size="sm"
          iconName="Edit"
          iconPosition="left"
          onClick={onEdit}
        >
          Edit Details
        </Button>
      </div>

      <div className="space-y-6">
        {/* Date & Time */}
        <div className="flex items-start space-x-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
            <Icon name="Calendar" size={24} className="text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-primary mb-1">Date & Time</h4>
            <p className="text-foreground font-medium">{formatDate(selectedDate)}</p>
            <p className="text-sm text-muted-foreground">{selectedTime} • {getEstimatedDuration()}</p>
          </div>
        </div>

        {/* Table Selection */}
        {selectedTable && (
          <div className="flex items-start space-x-4 p-4 bg-background rounded-lg border border-warm">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={selectedTable.image}
                alt={selectedTable.name}
                className="w-full h-full object-cover"
              />
              {selectedTable.premium && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Star" size={12} className="text-accent-foreground" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-foreground mb-1">{selectedTable.name}</h4>
              <p className="text-sm text-muted-foreground mb-1">{selectedTable.ambiance}</p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={12} />
                  <span>Seats {selectedTable.capacity}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="MapPin" size={12} />
                  <span className="capitalize">{selectedTable.type} table</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Occasion Details */}
        {selectedOccasion && (
          <div className="p-4 bg-background rounded-lg border border-warm">
            <h4 className="font-medium text-foreground mb-2">{getOccasionName(selectedOccasion)}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              {occasionDetails?.specialRequests && (
                <div className="flex items-start space-x-2">
                  <Icon name="MessageSquare" size={14} className="mt-0.5 flex-shrink-0" />
                  <span>{occasionDetails.specialRequests}</span>
                </div>
              )}
              {occasionDetails?.anniversaryYear && (
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" size={14} />
                  <span>{occasionDetails.anniversaryYear} year anniversary</span>
                </div>
              )}
              {occasionDetails?.birthdayName && (
                <div className="flex items-center space-x-2">
                  <Icon name="Gift" size={14} />
                  <span>Birthday celebration for {occasionDetails.birthdayName}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Guest Information */}
        <div className="p-4 bg-background rounded-lg border border-warm">
          <h4 className="font-medium text-foreground mb-3">Guest Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={14} className="text-muted-foreground" />
              <span className="text-muted-foreground">Guests:</span>
              <span className="text-foreground font-medium">{preferences?.guestCount || '2'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Utensils" size={14} className="text-muted-foreground" />
              <span className="text-muted-foreground">Dietary:</span>
              <span className="text-foreground">{getDietaryInfo()}</span>
            </div>
            {preferences?.ambiance && (
              <div className="flex items-center space-x-2">
                <Icon name="Heart" size={14} className="text-muted-foreground" />
                <span className="text-muted-foreground">Atmosphere:</span>
                <span className="text-foreground capitalize">{preferences.ambiance}</span>
              </div>
            )}
            {preferences?.winePreferences?.length > 0 && (
              <div className="flex items-center space-x-2">
                <Icon name="Wine" size={14} className="text-muted-foreground" />
                <span className="text-muted-foreground">Wine:</span>
                <span className="text-foreground">{preferences.winePreferences.length} preferences</span>
              </div>
            )}
          </div>
        </div>

        {/* Pricing Estimate */}
        <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-foreground">Estimated Cost</h4>
            <div className="text-right">
              <div className="text-2xl font-playfair font-bold text-accent">€{getEstimatedCost()}</div>
              <div className="text-xs text-muted-foreground">for {preferences?.guestCount || '2'} guests</div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>• Base dining experience: €45 per person</p>
            {(selectedOccasion === 'cultural' || selectedOccasion === 'anniversary') && (
              <p>• Special occasion enhancement: €15 per person</p>
            )}
            {selectedTable?.premium && (
              <p>• Premium table selection: €20</p>
            )}
            <p>• Final cost may vary based on menu selections and beverages</p>
          </div>
        </div>

        {/* Important Information */}
        <div className="p-4 bg-muted/50 rounded-lg border border-muted">
          <h4 className="font-medium text-foreground mb-2 flex items-center space-x-2">
            <Icon name="Info" size={16} />
            <span>Important Information</span>
          </h4>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>• Please arrive 10 minutes before your reservation time</p>
            <p>• Cancellations must be made at least 24 hours in advance</p>
            <p>• A confirmation email will be sent with cultural dining tips</p>
            <p>• Our team will contact you if any clarifications are needed</p>
          </div>
        </div>

        {/* Confirmation Button */}
        <div className="pt-4 border-t border-warm">
          <Button
            variant="default"
            size="lg"
            fullWidth
            loading={isLoading}
            iconName="Check"
            iconPosition="left"
            onClick={onConfirm}
            className="bg-conversion-gold hover:bg-conversion-gold/90 font-montserrat shadow-warm-lg"
          >
            {isLoading ? 'Confirming Reservation...' : 'Confirm Reservation'}
          </Button>
          
          <p className="text-xs text-center text-muted-foreground mt-2">
            By confirming, you agree to our reservation terms and cancellation policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReservationSummary;