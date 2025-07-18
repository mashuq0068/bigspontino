import React, { useEffect, useState } from "react";
import Icon from "./AppIcon";

const LanguageToggle = () => {
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "EN";
    setCurrentLanguage(savedLanguage);
  }, [currentLanguage]);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "EN" ? "DE" : "EN";
    setCurrentLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    window.location.reload();
  };
  return (
    <div>
      {/* Language Toggle */}
      <div className="fixed top-[15vh] right-4 lg:right-4 z-20">
        <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 shadow-warm">
          <Icon name="Globe" size={16} className="text-white" />
          <span className="text-sm font-medium text-white">Language </span>
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-warm"
          >
            <span>{currentLanguage}</span>
            <Icon name="ChevronDown" size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageToggle;
