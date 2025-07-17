import React, { useEffect, useState } from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    alt: 'Italian Cuisine 1',
  },
  {
    src: 'https://admin.expatica.com/it/wp-content/uploads/sites/17/2023/11/italian-cuisine.jpg',
    alt: 'Italian Cuisine 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    alt: 'Italian Cuisine 3',
  },
  {
    src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80',
    alt: 'Italian Cuisine 4',
  },
  {
    src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
    alt: 'Italian Cuisine 5',
  },
  {
    src: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=800&q=80',
    alt: 'Italian Cuisine 6',
  },
];

const Impressions = () => {
    const [language, setLanguage] = useState("EN");
  
    useEffect(() => {
      const storedLang = localStorage.getItem("language");
      if (storedLang) {
        setLanguage(storedLang);
      }
    }, []);
  return (
    <section className="bg-[#fff7ef] min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl  font-bold text-primary mb-12 text-center">
          {language === "EN" ? "Impressions Gallery" :  "Impressionen Galerie" }
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map(({ src, alt }, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <img
                src={src}
                alt={alt}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impressions;
