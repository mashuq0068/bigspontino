import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReservationPopup = () => {
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState('EN');
const navigate = useNavigate();
  // Sample available/popular dates — can be dynamic later
  const popularDates = ['July 20', 'July 23', 'July 27'];

  useEffect(() => {
    const lang = localStorage.getItem('language');
    setLanguage(lang || 'EN');

    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[340px] bg-[#fdf5e6] border border-[#b8860b] shadow-xl rounded-xl p-5 animate-fade-in transition-all">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-[#8b4513]">
            {language === 'DE' ? 'Reservieren Sie Ihren Tisch' : 'Reserve Your Table'}
          </h3>
          <p className="text-sm text-[#8b4513] mt-1">
            {language === 'DE'
              ? 'Buchen Sie jetzt Ihren Tisch für ein unvergessliches Erlebnis.'
              : 'Book your table now for an unforgettable experience.'}
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-[#8b4513] hover:text-[#b8860b] text-xl leading-none ml-4"
          aria-label="Close"
        >
          &times;
        </button>
      </div>

    {/* Recent Dates */}
<div className="mt-4">
  <p className="text-sm text-[#8b4513] font-medium mb-2">
    {language === 'DE' ? 'Neueste Termine:' : 'Recent Dates:'}
  </p>
  <ul className="flex flex-wrap gap-2">
    {popularDates?.map((date) => (
      <li
        key={date}
        className="text-xs text-[#8b4513] border border-[#b8860b] px-3 py-1 rounded-full font-medium"
      >
        {date}
      </li>
    ))}
  </ul>
</div>


      {/* CTA */}
      <div className="mt-5 text-right">
        <button
          onClick={() => {
            console.log('Open reservation modal');
            navigate('/reservation-experience');
            
          }}
          className="px-4 py-2 rounded-full bg-[#b8860b] hover:bg-[#8b4513] text-white font-semibold text-sm tracking-wide transition"
        >
          {language === 'DE' ? 'Jetzt reservieren' : 'Reserve Now'}
        </button>
      </div>
    </div>
  );
};

export default ReservationPopup;
