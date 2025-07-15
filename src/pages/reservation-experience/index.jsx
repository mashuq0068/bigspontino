import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import CalendarView from "./components/CalendarView";
import TimeSlotPicker from "./components/TimeSlotPicker";
import TableSelection from "./components/TableSelection";
import OccasionPlanner from "./components/OccasionPlanner";
import GuestPreferences from "./components/GuestPreferences";
import ReservationSummary from "./components/ReservationSummary";

const ReservationExperience = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Reservation state
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [occasionDetails, setOccasionDetails] = useState({});
  const [preferences, setPreferences] = useState({
    guestCount: "2",
    dietaryRestrictions: "none",
  });

  // Mock availability data
  const availabilityData = {
    "2025-07-16": { available: true, slots: 8, special: false },
    "2025-07-17": { available: true, slots: 3, special: false },
    "2025-07-18": { available: true, slots: 6, special: true },
    "2025-07-19": { available: false, slots: 0, special: false },
    "2025-07-20": { available: true, slots: 5, special: false },
    "2025-07-21": { available: true, slots: 7, special: true },
    "2025-07-22": { available: true, slots: 4, special: false },
  };

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleConfirmReservation = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

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
    preferences,
  };

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  if (showConfirmation) {
    const translations = {
      EN: {
        title: "Reservation Confirmed!",
        description:
          "Your reservation at Bigspontino has been confirmed. We look forward to providing you with an authentic Italian dining experience.",
        thanks: "Grazie! Your authentic Italian dining experience awaits.",
        reservationDetails: "Reservation Details",
        date: "Date:",
        time: "Time:",
        table: "Table:",
        guests: "Guests:",
        confirmation: "Confirmation:",
        whatsNext: "What's Next?",
        nextSteps: [
          "Confirmation email sent with cultural dining tips",
          "Our team will contact you 24 hours before your visit",
          "Arrive 10 minutes early to begin your Italian journey",
        ],
        saveConfirmation: "Save Confirmation",
        returnHome: "Return Home",
      },
      DE: {
        title: "Reservierung bestätigt!",
        description:
          "Ihre Reservierung bei Bigspontino wurde bestätigt. Wir freuen uns, Ihnen ein authentisches italienisches Erlebnis zu bieten.",
        thanks:
          "Grazie! Ihr authentisches italienisches Essenserlebnis erwartet Sie.",
        reservationDetails: "Reservierungsdetails",
        date: "Datum:",
        time: "Uhrzeit:",
        table: "Tisch:",
        guests: "Gäste:",
        confirmation: "Bestätigung:",
        whatsNext: "Was passiert als Nächstes?",
        nextSteps: [
          "Bestätigungs-E-Mail mit kulturellen Essens-Tipps gesendet",
          "Unser Team kontaktiert Sie 24 Stunden vor Ihrem Besuch",
          "Kommen Sie 10 Minuten früher an, um Ihre italienische Reise zu beginnen",
        ],
        saveConfirmation: "Bestätigung speichern",
        returnHome: "Zur Startseite",
      },
    };

    const language = localStorage.getItem("language") || "EN";
    const t = translations[language] || translations.EN;

    return (
      <>
        <Helmet>
          <title>{t.title} - Bigspontino</title>
          <meta name="description" content={t.description} />
        </Helmet>

        <div className="min-h-screen bg-background">
          <Header />

          <div className="pt-20 pb-16">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="Check"
                    size={40}
                    className="text-success-foreground"
                  />
                </div>
                <h1 className="text-3xl font-playfair font-bold text-foreground mb-2">
                  {t.title}
                </h1>
                <p className="text-lg text-muted-foreground">{t.thanks}</p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-warm border border-warm mb-6">
                <h2 className="text-xl font-playfair font-semibold text-foreground mb-4">
                  {t.reservationDetails}
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t.date}</span>
                    <span className="text-foreground font-medium">
                      {selectedDate?.toLocaleDateString(
                        language === "DE" ? "de-DE" : "en-US",
                        {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t.time}</span>
                    <span className="text-foreground font-medium">
                      {selectedTime}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t.table}</span>
                    <span className="text-foreground font-medium">
                      {selectedTable?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t.guests}</span>
                    <span className="text-foreground font-medium">
                      {preferences.guestCount}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {t.confirmation}
                    </span>
                    <span className="text-primary font-medium">
                      #BIG{Date.now().toString().slice(-6)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 mb-6">
                <h3 className="font-medium text-primary mb-3">{t.whatsNext}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {t.nextSteps.map((step, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <Icon
                        name={i === 0 ? "Mail" : i === 1 ? "Phone" : "MapPin"}
                        size={14}
                      />
                      <span>{step}</span>
                    </div>
                  ))}
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
                  {t.saveConfirmation}
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  iconName="Home"
                  iconPosition="left"
                  onClick={() => (window.location.href = "/homepage")}
                  className="bg-primary hover:bg-primary/90"
                >
                  {t.returnHome}
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
        <meta
          name="description"
          content="Reserve your table at Bigspontino for an authentic Italian dining experience. Choose your date, time, and personalize your visit with our cultural dining options."
        />
        <meta
          name="keywords"
          content="Italian restaurant reservation, authentic dining, cultural experience, table booking"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Main Content */}
        <div className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="">
              <div className="max-w-5xl mb-5 mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <button
                  onClick={() => window.history.back()}
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon name="ArrowLeft" size={18} className="mr-2" />
                  Back
                </button>
              </div>

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
                  <ReservationSummary
                    reservationData={reservationData}
                    onConfirm={handleConfirmReservation}
                    onEdit={handleEditReservation}
                    isLoading={isLoading}
                  />
                )}
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
                Step {currentStep} of {3}
              </div>

              <Button
                variant="default"
                iconName="ChevronRight"
                iconPosition="right"
                onClick={handleNextStep}
                className={`bg-primary hover:bg-primary/90 ${
                  currentStep === 3 ? "hidden" : ""
                }`}
              >
                {currentStep === 3 ? "Complete" : "Next Step"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationExperience;
