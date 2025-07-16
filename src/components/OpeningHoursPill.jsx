import React, { useEffect, useState } from "react";
import Icon from "./AppIcon"; // Adjust path as needed

const OpeningHoursPill = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    setLanguage(storedLang === "DE" ? "DE" : "EN");
  }, []);

  const texts = {
    EN: {
      label: "Opening Hours",
      hours: [
        "Wed–Fri: 11 am – 11 pm",
        "Sat: 10 am – 11 pm",
        "Sun: 10 am – 5 pm",
      ],
    },
    DE: {
      label: "Öffnungszeiten",
      hours: [
        "Mi–Fr: 11 Uhr – 23 Uhr",
        "Sa: 10 Uhr – 23 Uhr",
        "So: 10 Uhr – 17 Uhr",
      ],
    },
  };

  const { label, hours } = texts[language];

  return (
    <div
      className={`
        fixed top-4 z-50
        right-1
        xl:right-3
        xl:left-auto
        left-[40vw]  
      `}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-white border border-muted rounded-full shadow-sm hover:bg-primary/10 transition-all"
      >
        {/* Pulsing Icon */}
        <div className="relative w-5 h-5 flex items-center justify-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
          <Icon name="Clock" size={16} className="text-green-600 relative z-10" />
        </div>

        {/* Label - hidden on very small screens */}
        <span className="font-medium text-gray-800 hidden sm:inline">{label}</span>

        {/* Chevron */}
        <Icon
          name="ChevronDown"
          size={18}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 sm:w-56 w-64 bg-white border border-gray-200 rounded-xl shadow-xl p-4 text-sm text-gray-700 space-y-1 animate-fade-in mt-2">
          <h4 className="text-primary font-semibold mb-2 border-b border-muted pb-1">
            {label}
          </h4>
          {hours.map((line, idx) => (
            <p
              key={idx}
              className="whitespace-nowrap text-muted-foreground tracking-tight"
            >
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default OpeningHoursPill;
