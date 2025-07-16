import React, { useEffect, useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Image from "../../../components/AppImage";

const ReservationSummary = ({
  reservationData,
  onConfirm,
  onEdit,
  isLoading,
}) => {
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const lang = localStorage.getItem("language") || "EN";
    setLanguage(lang);
  }, []);
  const {
    selectedDate,
    selectedTime,
    selectedTable,
    selectedOccasion,
    occasionDetails,
  } = reservationData;

  // Translation content
  const content = {
    EN: {
      title: "Reservation Summary",
      editButton: "Edit Details",
      dateTime: "Date & Time",
      tableSelection: "Table Selection",
      occasionTitle: "Occasion Details",
      clientDetails: "Client Details",
      firstName: "First Name*",
      lastName: "Last Name*",
      email: "Email Address*",
      phone: "Phone Number*",
      languageLabel: "Preferred Communication Language",
      confirmButton: "Confirm Reservation",
      confirmingButton: "Confirming Reservation...",
      termsText:
        "By confirming, you agree to our reservation terms and cancellation policy",
      occasions: {
        anniversary: "Anniversary Celebration",
        birthday: "Birthday Celebration",
        business: "Business Dinner",
        cultural: "Cultural Immersion",
        family: "Family Gathering",
        casual: "Casual Dining",
        default: "Special Dining",
      },
      duration: {
        cultural: "2.5-3 hours",
        business: "1.5-2 hours",
        default: "2-2.5 hours",
      },
      tableInfo: {
        seats: "Seats",
        type: "table",
        premium: "Premium",
      },
      countryCodes: {
        US: "+1 (US)",
        DE: "+49 (DE)",
        IT: "+39 (IT)",
      },
      languages: {
        en: "English",
        de: "German",
        it: "Italian",
      },
    },
    DE: {
      title: "Reservierungsübersicht",
      editButton: "Details bearbeiten",
      dateTime: "Datum & Uhrzeit",
      tableSelection: "Tischauswahl",
      occasionTitle: "Anlassdetails",
      clientDetails: "Kundendaten",
      firstName: "Vorname*",
      lastName: "Nachname*",
      email: "E-Mail-Adresse*",
      phone: "Telefonnummer*",
      languageLabel: "Bevorzugte Kommunikationssprache",
      confirmButton: "Reservierung bestätigen",
      confirmingButton: "Bestätigung läuft...",
      termsText:
        "Mit der Bestätigung akzeptieren Sie unsere Reservierungsbedingungen und Stornierungsrichtlinien",
      occasions: {
        anniversary: "Jubiläumsfeier",
        birthday: "Geburtstagsfeier",
        business: "Geschäftsessen",
        cultural: "Kulturelles Erlebnis",
        family: "Familientreffen",
        casual: "Informelles Essen",
        default: "Besonderes Essen",
      },
      duration: {
        cultural: "2,5-3 Stunden",
        business: "1,5-2 Stunden",
        default: "2-2,5 Stunden",
      },
      tableInfo: {
        seats: "Plätze",
        type: "Tisch",
        premium: "Premium",
      },
      countryCodes: {
        US: "+1 (USA)",
        DE: "+49 (DE)",
        IT: "+39 (IT)",
      },
      languages: {
        en: "Englisch",
        de: "Deutsch",
        it: "Italienisch",
      },
    },
    IT: {
      title: "Riepilogo Prenotazione",
      editButton: "Modifica Dettagli",
      dateTime: "Data & Ora",
      tableSelection: "Selezione Tavolo",
      occasionTitle: "Dettagli Occasione",
      clientDetails: "Dettagli Cliente",
      firstName: "Nome*",
      lastName: "Cognome*",
      email: "Indirizzo Email*",
      phone: "Numero di Telefono*",
      languageLabel: "Lingua di Comunicazione Preferita",
      confirmButton: "Conferma Prenotazione",
      confirmingButton: "Conferma in corso...",
      termsText:
        "Confermando, accetti i nostri termini di prenotazione e la politica di cancellazione",
      occasions: {
        anniversary: "Celebrazione Anniversario",
        birthday: "Festa di Compleanno",
        business: "Cena di Lavoro",
        cultural: "Esperienza Culturale",
        family: "Raduno Familiare",
        casual: "Pasto Informale",
        default: "Cena Speciale",
      },
      duration: {
        cultural: "2,5-3 ore",
        business: "1,5-2 ore",
        default: "2-2,5 ore",
      },
      tableInfo: {
        seats: "Posti",
        type: "tavolo",
        premium: "Premium",
      },
      countryCodes: {
        US: "+1 (USA)",
        DE: "+49 (DE)",
        IT: "+39 (IT)",
      },
      languages: {
        en: "Inglese",
        de: "Tedesco",
        it: "Italiano",
      },
    },
  };

  const t = content[language] || content.EN;

  const formatDate = (date) => {
    if (!date) return "";
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    // Different date formats per language
    const locales = {
      EN: "en-US",
      DE: "de-DE",
      IT: "it-IT",
    };

    return date.toLocaleDateString(locales[language] || "en-US", options);
  };

  const getOccasionName = (occasionId) => {
    return t.occasions[occasionId] || t.occasions.default;
  };

  const getEstimatedDuration = () => {
    if (selectedOccasion === "cultural") return t.duration.cultural;
    if (selectedOccasion === "business") return t.duration.business;
    return t.duration.default;
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-warm border border-warm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-playfair font-semibold text-foreground">
          {t.title}
        </h3>
        <Button
          variant="ghost"
          size="sm"
          iconName="Edit"
          iconPosition="left"
          onClick={onEdit}
        >
          {t.editButton}
        </Button>
      </div>

      <div className="space-y-6">
        {/* Date & Time */}
        <div className="flex items-start space-x-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
            <Icon
              name="Calendar"
              size={24}
              className="text-primary-foreground"
            />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-primary mb-1">{t.dateTime}</h4>
            <p className="text-foreground font-medium">
              {formatDate(selectedDate)}
            </p>
            <p className="text-sm text-muted-foreground">
              {selectedTime} • {getEstimatedDuration()}
            </p>
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
                  <Icon
                    name="Star"
                    size={12}
                    className="text-accent-foreground"
                  />
                </div>
              )}
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-foreground mb-1">
                {selectedTable.name}
              </h4>
              <p className="text-sm text-muted-foreground mb-1">
                {selectedTable.ambiance}
              </p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={12} />
                  <span>
                    {t.tableInfo.seats} {selectedTable.capacity}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="MapPin" size={12} />
                  <span className="capitalize">
                    {selectedTable.type} {t.tableInfo.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Occasion Details */}
        {selectedOccasion && (
          <div className="p-4 bg-background rounded-lg border border-warm">
            <h4 className="font-medium text-foreground mb-2">
              {getOccasionName(selectedOccasion)}
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              {occasionDetails?.specialRequests && (
                <div className="flex items-start space-x-2">
                  <Icon
                    name="MessageSquare"
                    size={14}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span>{occasionDetails.specialRequests}</span>
                </div>
              )}
              {occasionDetails?.anniversaryYear && (
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" size={14} />
                  <span>
                    {occasionDetails.anniversaryYear}{" "}
                    {language === "DE"
                      ? "Jahre"
                      : language === "IT"
                      ? "anni"
                      : "year"}{" "}
                    anniversary
                  </span>
                </div>
              )}
              {occasionDetails?.birthdayName && (
                <div className="flex items-center space-x-2">
                  <Icon name="Gift" size={14} />
                  <span>
                    {language === "DE"
                      ? "Geburtstagsfeier für"
                      : language === "IT"
                      ? "Festa di compleanno per"
                      : "Birthday celebration for"}{" "}
                    {occasionDetails.birthdayName}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        <form onSubmit={onConfirm}>
          {/* Client Contact Details Form */}
          <div className="space-y-4 border-t border-warm pt-6">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              {t.clientDetails}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground block mb-1">
                  {t.firstName}
                </label>
                <input
                  type="text"
                  placeholder={t.firstName}
                  className="w-full border border-input rounded-lg p-2 text-sm"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground block mb-1">
                  {t.lastName}
                </label>
                <input
                  type="text"
                  placeholder={t.lastName}
                  className="w-full border border-input rounded-lg p-2 text-sm"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground block mb-1">
                  {t.email}
                </label>
                <input
                  type="email"
                  placeholder={t.email}
                  className="w-full border border-input rounded-lg p-2 text-sm"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground block mb-1">
                  {t.phone}
                </label>
                <div className="flex gap-2">
                  <select className="border border-input rounded-lg p-2 text-sm">
                    <option value="+1">{t.countryCodes.US}</option>
                    <option value="+49">{t.countryCodes.DE}</option>
                    <option value="+39">{t.countryCodes.IT}</option>
                  </select>
                  <input
                    type="tel"
                    placeholder={t.phone}
                    className="flex-1 border border-input rounded-lg p-2 text-sm"
                    required
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium text-muted-foreground block mb-1">
                  {t.languageLabel}
                </label>
                <select className="w-full border border-input rounded-lg p-2 text-sm">
                  <option value="en">{t.languages.en}</option>
                  <option value="de">{t.languages.de}</option>
                  <option value="it">{t.languages.it}</option>
                </select>
              </div>
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
              className="bg-conversion-gold hover:bg-conversion-gold/90  shadow-warm-lg"
            >
              {isLoading ? t.confirmingButton : t.confirmButton}
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-2">
              {t.termsText}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationSummary;

