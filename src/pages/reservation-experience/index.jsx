import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CalendarView from './components/CalendarView';
import TimeSlotPicker from './components/TimeSlotPicker';
import TableSelection from './components/TableSelection';
import OccasionPlanner from './components/OccasionPlanner';
import GuestPreferences from './components/GuestPreferences';
import ReservationSummary from './components/ReservationSummary';

const ReservationExperience = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  // Reservation state
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [occasionDetails, setOccasionDetails] = useState({});
  const [preferences, setPreferences] = useState({
    guestCount: '2',
    dietaryRestrictions: 'none'
  });

  // Mock availability data
  const availabilityData = {
    '2025-07-16': { available: true, slots: 8, special: false },
    '2025-07-17': { available: true, slots: 3, special: false },
    '2025-07-18': { available: true, slots: 6, special: true },
    '2025-07-19': { available: false, slots: 0, special: false },
    '2025-07-20': { available: true, slots: 5, special: false },
    '2025-07-21': { available: true, slots: 7, special: true },
    '2025-07-22': { available: true, slots: 4, special: false }
  };

  const steps = [
    { id: 1, name: 'Date & Time', icon: 'Calendar', description: 'Choose your preferred date and time' },
    { id: 2, name: 'Table Selection', icon: 'MapPin', description: 'Select your perfect dining spot' },
    { id: 3, name: 'Occasion', icon: 'Heart', description: 'Plan your special experience' },
    { id: 4, name: 'Preferences', icon: 'Settings', description: 'Personalize your dining' },
    { id: 5, name: 'Summary', icon: 'Check', description: 'Review and confirm' }
  ];

  const canProceedToStep = (step) => {
    switch (step) {
      case 2: return selectedDate && selectedTime;
      case 3: return selectedTable;
      case 4: return selectedOccasion;
      case 5: return preferences.guestCount;
      default: return true;
    }
  };

  const handleNextStep = () => {
    if (currentStep < 5 && canProceedToStep(currentStep + 1)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleConfirmReservation = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setShowConfirmation(true);
  };

  const handleEditReservation = () => {
    setCurrentStep(1);
    setShowConfirmation(false);
  };

  const reservationData = {
    selectedDate,
    selectedTime,
    selectedTable,
    selectedOccasion,
    occasionDetails,
    preferences
  };

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  if (showConfirmation) {
    return (
      <>
        <Helmet>
          <title>Reservation Confirmed - Bigspontino</title>
          <meta name="description" content="Your reservation at Bigspontino has been confirmed. We look forward to providing you with an authentic Italian dining experience." />
        </Helmet>
        
        <div className="min-h-screen bg-background">
          <Header />
          
          <div className="pt-20 pb-16">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" size={40} className="text-success-foreground" />
                </div>
                <h1 className="text-3xl font-playfair font-bold text-foreground mb-2">
                  Reservation Confirmed!
                </h1>
                <p className="text-lg text-muted-foreground">
                  Grazie! Your authentic Italian dining experience awaits.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-warm border border-warm mb-6">
                <h2 className="text-xl font-playfair font-semibold text-foreground mb-4">
                  Reservation Details
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="text-foreground font-medium">
                      {selectedDate?.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="text-foreground font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Table:</span>
                    <span className="text-foreground font-medium">{selectedTable?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Guests:</span>
                    <span className="text-foreground font-medium">{preferences.guestCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Confirmation:</span>
                    <span className="text-primary font-medium">#BIG{Date.now().toString().slice(-6)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 mb-6">
                <h3 className="font-medium text-primary mb-3">What's Next?</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={14} />
                    <span>Confirmation email sent with cultural dining tips</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={14} />
                    <span>Our team will contact you 24 hours before your visit</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={14} />
                    <span>Arrive 10 minutes early to begin your Italian journey</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={() => window.print()}
                >
                  Save Confirmation
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  iconName="Home"
                  iconPosition="left"
                  onClick={() => window.location.href = '/homepage'}
                  className="bg-primary hover:bg-primary/90"
                >
                  Return Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Reserve Your Table - Bigspontino</title>
        <meta name="description" content="Reserve your table at Bigspontino for an authentic Italian dining experience. Choose your date, time, and personalize your visit with our cultural dining options." />
        <meta name="keywords" content="Italian restaurant reservation, authentic dining, cultural experience, table booking" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <div className="pt-20 pb-8 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
                Reserve Your Italian Journey
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform your dining into a personalized Italian experience that reflects the warmth of our hospitality and the richness of our culinary heritage.
              </p>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="bg-card border-b border-warm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex items-center">
                    <button
                      onClick={() => canProceedToStep(step.id) && setCurrentStep(step.id)}
                      disabled={!canProceedToStep(step.id)}
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center transition-warm
                        ${currentStep === step.id
                          ? 'bg-primary text-primary-foreground shadow-warm'
                          : currentStep > step.id
                            ? 'bg-success text-success-foreground'
                            : canProceedToStep(step.id)
                              ? 'bg-muted text-muted-foreground hover:bg-primary/10 cursor-pointer'
                              : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                        }
                      `}
                    >
                      {currentStep > step.id ? (
                        <Icon name="Check" size={20} />
                      ) : (
                        <Icon name={step.icon} size={20} />
                      )}
                    </button>
                    <div className="ml-3 hidden sm:block">
                      <div className={`text-sm font-medium ${
                        currentStep === step.id ? 'text-primary' : 'text-foreground'
                      }`}>
                        {step.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {step.description}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`
                      w-8 h-0.5 mx-4 transition-warm
                      ${currentStep > step.id ? 'bg-success' : 'bg-muted'}
                    `} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <CalendarView
                      selectedDate={selectedDate}
                      onDateSelect={setSelectedDate}
                      availabilityData={availabilityData}
                    />
                    {selectedDate && (
                      <TimeSlotPicker
                        selectedTime={selectedTime}
                        onTimeSelect={setSelectedTime}
                        selectedDate={selectedDate}
                      />
                    )}
                  </div>
                )}

                {currentStep === 2 && (
                  <TableSelection
                    selectedTable={selectedTable}
                    onTableSelect={setSelectedTable}
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                  />
                )}

                {currentStep === 3 && (
                  <OccasionPlanner
                    selectedOccasion={selectedOccasion}
                    onOccasionSelect={setSelectedOccasion}
                    occasionDetails={occasionDetails}
                    onDetailsChange={setOccasionDetails}
                  />
                )}

                {currentStep === 4 && (
                  <GuestPreferences
                    preferences={preferences}
                    onPreferencesChange={setPreferences}
                  />
                )}

                {currentStep === 5 && (
                  <ReservationSummary
                    reservationData={reservationData}
                    onConfirm={handleConfirmReservation}
                    onEdit={handleEditReservation}
                    isLoading={isLoading}
                  />
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Summary */}
                <div className="bg-card rounded-xl p-6 shadow-warm border border-warm sticky top-24">
                  <h3 className="font-playfair font-semibold text-foreground mb-4">
                    Your Reservation
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <Icon name="Calendar" size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground">Date:</span>
                      <span className="text-foreground font-medium">
                        {selectedDate ? selectedDate.toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        }) : 'Not selected'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground">Time:</span>
                      <span className="text-foreground font-medium">
                        {selectedTime || 'Not selected'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="MapPin" size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground">Table:</span>
                      <span className="text-foreground font-medium">
                        {selectedTable?.name || 'Not selected'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Users" size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground">Guests:</span>
                      <span className="text-foreground font-medium">
                        {preferences.guestCount || '2'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-card rounded-xl p-6 shadow-warm border border-warm">
                  <h3 className="font-playfair font-semibold text-foreground mb-4">
                    Need Assistance?
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={16} className="text-primary" />
                      <div>
                        <div className="text-foreground font-medium">+49 30 1234 5678</div>
                        <div className="text-muted-foreground">Mon-Sun 10:00-22:00</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={16} className="text-primary" />
                      <div>
                        <div className="text-foreground font-medium">reservations@bigspontino.de</div>
                        <div className="text-muted-foreground">24/7 support</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cultural Tip */}
                <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon name="Lightbulb" size={16} className="text-accent" />
                    <h3 className="font-medium text-accent">Cultural Tip</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    In Italy, dining is a celebration of life and relationships. Take your time, savor each course, and enjoy the conversation. "La dolce vita" begins at the table.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-warm">
              <Button
                variant="outline"
                iconName="ChevronLeft"
                iconPosition="left"
                onClick={handlePrevStep}
                disabled={currentStep === 1}
              >
                Previous Step
              </Button>
              
              <div className="text-sm text-muted-foreground">
                Step {currentStep} of {steps.length}
              </div>
              
              <Button
                variant="default"
                iconName="ChevronRight"
                iconPosition="right"
                onClick={handleNextStep}
                disabled={currentStep === 5 || !canProceedToStep(currentStep + 1)}
                className="bg-primary hover:bg-primary/90"
              >
                {currentStep === 5 ? 'Complete' : 'Next Step'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationExperience;