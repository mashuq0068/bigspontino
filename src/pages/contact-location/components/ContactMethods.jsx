import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const ContactMethods = () => {
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang) setLanguage(storedLang);
  }, []);

  const contactInfo = {
    address: "Mühlenkamp 8, 22303 Hamburg",
    phone: "040 / 69 45 68 28",
    email: "mail@bigspuntino.de",
    website: "bigspuntino.de",
  };

  const openingHours = [
    { day: "Wed–Fri", time: "11:00 – 23:00" },
    { day: "Sat", time: "10:00 – 23:00" },
    { day: "Sun", time: "10:00 – 17:00" },
  ];
  const texts = {
    EN: {
      contactHeading: "Contact Information",
      openingHeading: "Opening Hours",
    },
    DE: {
      contactHeading: "Kontaktinformation",
      openingHeading: "Öffnungszeiten",
    },
  };

  return (
    <div className="bg-background text-primary">
      {/* Contact Info Section */}
      <section className="py-16 px-6 md:px-12 bg-[#fffaf3]">
        <div className="max-w-3xl mx-auto flex gap-36 justify-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {texts[language].contactHeading}
            </h2>
            <ul className="space-y-4 ">
              <li>
                <Icon name="MapPin" className="inline-block mr-2 text-golden" />
                {contactInfo.address}
              </li>
              <li>
                <Icon name="Phone" className="inline-block mr-2 text-golden" />
                {contactInfo.phone}
              </li>
              <li>
                <Icon name="Mail" className="inline-block mr-2 text-golden" />
                <a href={`mailto:${contactInfo.email}`} className="underline">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <Icon name="Globe" className="inline-block mr-2 text-golden" />
                <a
                  href={`https://${contactInfo.website}`}
                  className="underline"
                  target="_blank"
                >
                  {contactInfo.website}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {texts[language].openingHeading}
            </h2>
            <ul className="space-y-2 text-black">
              {openingHours.map((item, idx) => (
                <li key={idx} className="flex justify-between  pb-2">
                  <span>{item.day}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Optional: Google Map */}
      <section className="h-96 w-full">
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?q=Mühlenkamp%208,%2022303%20Hamburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};

export default ContactMethods;
