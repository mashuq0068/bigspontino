import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const translations = {
  EN: {
    chooseTable: "Choose Your Table",
    floorPlan: "Floor Plan",
    listView: "List View",
    kitchen: "Kitchen",
    entrance: "Entrance",
    unavailable: "Unavailable",
    premium: "Premium",
    seats: "Seats",
    table: "table"
  },
  DE: {
    chooseTable: "Wählen Sie Ihren Tisch",
    floorPlan: "Grundriss",
    listView: "Listenansicht",
    kitchen: "Küche",
    entrance: "Eingang",
    unavailable: "Nicht verfügbar",
    premium: "Premium",
    seats: "Sitze",
    table: "Tisch"
  },
  IT: {
    chooseTable: "Scegli il tuo tavolo",
    floorPlan: "Pianta",
    listView: "Vista Elenco",
    kitchen: "Cucina",
    entrance: "Ingresso",
    unavailable: "Non disponibile",
    premium: "Premium",
    seats: "Posti",
    table: "Tavolo"
  }
};

const tableOptionsLocalized = {
  EN: [
    {
      id: 'chef-counter-1',
      name: "Chef's Counter",
      ambiance: "Interactive dining with chef interaction",
      features: ['Front-row cooking show', 'Wine pairing guidance', 'Personalized menu'],
    },
    {
      id: 'intimate-corner-1',
      name: 'Intimate Corner Table',
      ambiance: 'Romantic and private setting',
      features: ['Secluded location', 'Soft lighting', 'Garden view'],
    },
    {
      id: 'family-table-1',
      name: 'Family Celebration Table',
      ambiance: 'Spacious table for group dining',
      features: ['Round table design', 'Central location', 'Easy conversation'],
    },
    {
      id: 'window-table-1',
      name: 'Window Table',
      ambiance: 'Natural light with street view',
      features: ['Large windows', 'Natural lighting', 'People watching'],
    },
    {
      id: 'private-alcove-1',
      name: 'Private Alcove',
      ambiance: 'Semi-private dining experience',
      features: ['Curtained area', 'Dedicated service', 'Quiet atmosphere'],
    },
    {
      id: 'communal-table-1',
      name: 'Communal Table',
      ambiance: 'Social dining with other guests',
      features: ['Meet new people', 'Shared experience', 'Lively atmosphere'],
    },
  ],
  DE: [
    {
      id: 'chef-counter-1',
      name: "Chef's Tresen",
      ambiance: "Interaktives Essen mit dem Koch",
      features: ['Kochen in erster Reihe', 'Weinempfehlung', 'Persönliches Menü'],
    },
    {
      id: 'intimate-corner-1',
      name: 'Intimer Ecktisch',
      ambiance: 'Romantische und private Umgebung',
      features: ['Abgelegene Lage', 'Sanfte Beleuchtung', 'Gartenblick'],
    },
    {
      id: 'family-table-1',
      name: 'Familienfeier-Tisch',
      ambiance: 'Geräumiger Tisch für Gruppen',
      features: ['Runder Tisch', 'Zentrale Lage', 'Gute Gesprächsmöglichkeiten'],
    },
    {
      id: 'window-table-1',
      name: 'Fenstertisch',
      ambiance: 'Natürliches Licht mit Straßenblick',
      features: ['Große Fenster', 'Tageslicht', 'Leute beobachten'],
    },
    {
      id: 'private-alcove-1',
      name: 'Private Nische',
      ambiance: 'Halbprivates Dinner-Erlebnis',
      features: ['Mit Vorhang', 'Persönlicher Service', 'Ruhige Atmosphäre'],
    },
    {
      id: 'communal-table-1',
      name: 'Gemeinschaftstisch',
      ambiance: 'Soziales Essen mit anderen Gästen',
      features: ['Neue Leute kennenlernen', 'Gemeinsames Erlebnis', 'Lebendige Atmosphäre'],
    },
  ],
  IT: [
    {
      id: 'chef-counter-1',
      name: "Bancone dello Chef",
      ambiance: "Cena interattiva con lo chef",
      features: ['Spettacolo culinario', 'Abbinamento vini', 'Menù personalizzato'],
    },
    {
      id: 'intimate-corner-1',
      name: 'Tavolo Intimo d’Angolo',
      ambiance: 'Ambiente romantico e privato',
      features: ['Posizione appartata', 'Illuminazione soffusa', 'Vista giardino'],
    },
    {
      id: 'family-table-1',
      name: 'Tavolo per Famiglie',
      ambiance: 'Tavolo spazioso per gruppi',
      features: ['Tavolo rotondo', 'Posizione centrale', 'Conversazione facilitata'],
    },
    {
      id: 'window-table-1',
      name: 'Tavolo alla Finestra',
      ambiance: 'Luce naturale con vista sulla strada',
      features: ['Grandi finestre', 'Illuminazione naturale', 'Guardare la gente'],
    },
    {
      id: 'private-alcove-1',
      name: 'Alcova Privata',
      ambiance: 'Esperienza culinaria semi-privata',
      features: ['Area con tende', 'Servizio dedicato', 'Ambiente tranquillo'],
    },
    {
      id: 'communal-table-1',
      name: 'Tavolo Comune',
      ambiance: 'Cena sociale con altri ospiti',
      features: ['Incontrare nuove persone', 'Esperienza condivisa', 'Atmosfera vivace'],
    },
  ]
};

const staticData = [
  {
    id: 'chef-counter-1',
    capacity: 2,
    type: 'counter',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop',
    position: { x: 20, y: 15 },
    available: true,
    premium: true
  },
  {
    id: 'intimate-corner-1',
    capacity: 2,
    type: 'corner',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
    position: { x: 75, y: 25 },
    available: true,
    premium: false
  },
  {
    id: 'family-table-1',
    capacity: 6,
    type: 'family',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop',
    position: { x: 45, y: 45 },
    available: true,
    premium: false
  },
  {
    id: 'window-table-1',
    capacity: 4,
    type: 'window',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop',
    position: { x: 15, y: 65 },
    available: false,
    premium: false
  },
  {
    id: 'private-alcove-1',
    capacity: 4,
    type: 'private',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&h=300&fit=crop',
    position: { x: 70, y: 70 },
    available: true,
    premium: true
  },
  {
    id: 'communal-table-1',
    capacity: 8,
    type: 'communal',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400&h=300&fit=crop',
    position: { x: 40, y: 80 },
    available: true,
    premium: false
  }
];

const TableSelection = ({ selectedTable, onTableSelect, selectedDate, selectedTime }) => {
  const [viewMode, setViewMode] = useState('floor');
   const [language, setLanguage] = useState('EN');
 
   useEffect(() => {
     const lang = localStorage.getItem('language') || 'EN';
     setLanguage(lang);
   }, []);
  const t = translations[language] || translations.EN;
  const localizedMeta = tableOptionsLocalized[language] || tableOptionsLocalized.EN;

  const tableOptions = staticData.map(table => {
    const meta = localizedMeta.find(t => t.id === table.id);
    return { ...table, ...meta };
  });

  const getTableIcon = (type) => {
    switch (type) {
      case 'counter': return 'ChefHat';
      case 'corner': return 'Heart';
      case 'family': return 'Users';
      case 'window': return 'Sun';
      case 'private': return 'Lock';
      case 'communal': return 'Coffee';
      default: return 'Circle';
    }
  };

  const FloorPlanView = () => (
    <div className="relative bg-gradient-to-br from-background to-muted rounded-xl p-8 border border-warm min-h-[400px]">
      <div className="absolute inset-4 border-2 border-dashed border-muted-foreground/20 rounded-lg" />
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-muted-foreground">
        <Icon name="ChefHat" size={16} />
        <span className="text-sm font-medium">{t.kitchen}</span>
      </div>
      <div className="absolute bottom-6 left-6 flex items-center space-x-2 text-muted-foreground">
        <Icon name="DoorOpen" size={16} />
        <span className="text-sm font-medium">{t.entrance}</span>
      </div>
      {tableOptions.map((table) => (
        <button
          key={table.id}
          onClick={() => table.available && onTableSelect(table)}
          disabled={!table.available}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-warm ${selectedTable?.id === table.id ? 'scale-110 z-10' : 'hover:scale-105'}`}
          style={{ left: `${table.position.x}%`, top: `${table.position.y}%` }}
        >
          <div className={`
            relative w-12 h-12 rounded-full border-2 flex items-center justify-center
            ${selectedTable?.id === table.id
              ? 'bg-primary border-primary text-primary-foreground shadow-warm-lg'
              : table.available
                ? 'bg-background border-primary/30 text-primary hover:border-primary hover:bg-primary/10'
                : 'bg-muted border-muted-foreground/30 text-muted-foreground cursor-not-allowed'
            }
            ${table.premium ? 'ring-2 ring-accent ring-offset-2' : ''}
          `}>
            <Icon name={getTableIcon(table.type)} size={20} />
            {table.premium && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                <Icon name="Star" size={10} className="text-accent-foreground" />
              </div>
            )}
          </div>
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 text-xs font-medium text-center whitespace-nowrap">
            <div className={selectedTable?.id === table.id ? 'text-primary' : 'text-foreground'}>
              {table.capacity} {t.seats}
            </div>
          </div>
        </button>
      ))}
    </div>
  );

  const ListView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tableOptions.map((table) => (
        <div
          key={table.id}
          className={`
            relative bg-card rounded-xl border transition-warm cursor-pointer
            ${selectedTable?.id === table.id
              ? 'border-primary shadow-warm-lg ring-2 ring-primary/20'
              : table.available
                ? 'border-warm hover:border-primary/50 hover:shadow-warm'
                : 'border-muted opacity-60 cursor-not-allowed'
            }
          `}
          onClick={() => table.available && onTableSelect(table)}
        >
          <div className="relative h-32 rounded-t-xl overflow-hidden">
            <Image src={table.image} alt={table.name} className="w-full h-full object-cover" />
            {table.premium && (
              <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                <Icon name="Star" size={12} />
                <span>{t.premium}</span>
              </div>
            )}
            {!table.available && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="bg-error text-error-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {t.unavailable}
                </div>
              </div>
            )}
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-playfair font-semibold text-foreground">{table.name}</h4>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Icon name="Users" size={14} />
                <span className="text-sm">{table.capacity}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{table.ambiance}</p>
            <div className="space-y-1">
              {table.features.slice(0, 2).map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Icon name="Check" size={12} className="text-success" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-playfair font-semibold text-foreground mb-1">{t.chooseTable}</h3>
          {selectedDate && selectedTime && (
            <p className="text-sm text-muted-foreground">
              {selectedDate.toLocaleDateString(
                language === 'DE' ? 'de-DE' : language === 'IT' ? 'it-IT' : 'en-US',
                { weekday: 'long', month: 'long', day: 'numeric' }
              )} at {selectedTime}
            </p>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Button variant={viewMode === 'floor' ? 'default' : 'outline'} size="sm" iconName="Layout" onClick={() => setViewMode('floor')}>
            {t.floorPlan}
          </Button>
          <Button variant={viewMode === 'list' ? 'default' : 'outline'} size="sm" iconName="List" onClick={() => setViewMode('list')}>
            {t.listView}
          </Button>
        </div>
      </div>

      {viewMode === 'floor' ? <FloorPlanView /> : <ListView />}

      {selectedTable && (
        <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
          <div className="flex items-start space-x-4">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
              <Image src={selectedTable.image} alt={selectedTable.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-playfair font-semibold text-primary">{selectedTable.name}</h4>
                {selectedTable.premium && (
                  <div className="bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Icon name="Star" size={10} />
                    <span>{t.premium}</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-2">{selectedTable.ambiance}</p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={12} />
                  <span>{t.seats} {selectedTable.capacity}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name={getTableIcon(selectedTable.type)} size={12} />
                  <span className="capitalize">{selectedTable.type} {t.table}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableSelection;
