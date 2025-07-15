import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const TimeSlotPicker = ({ selectedTime, onTimeSelect, selectedDate }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('dinner');

  const timeSlots = {
    lunch: [
      { time: '12:00 PM', available: true, popular: false },
      { time: '12:30 PM', available: true, popular: true },
      { time: '1:00 PM', available: true, popular: true },
      { time: '1:30 PM', available: true, popular: false },
      { time: '2:00 PM', available: false, popular: false },
      { time: '2:30 PM', available: true, popular: false }
    ],
    dinner: [
      { time: '5:30 PM', available: true, popular: false },
      { time: '6:00 PM', available: true, popular: true },
      { time: '6:30 PM', available: false, popular: true },
      { time: '7:00 PM', available: true, popular: true },
      { time: '7:30 PM', available: true, popular: true },
      { time: '8:00 PM', available: true, popular: true },
      { time: '8:30 PM', available: true, popular: false },
      { time: '9:00 PM', available: true, popular: false },
      { time: '9:30 PM', available: false, popular: false }
    ]
  };

  const periods = [
    { 
      id: 'lunch', 
      name: 'Lunch Service', 
      time: '12:00 PM - 3:00 PM',
      icon: 'Sun',
      description: 'Light Italian fare with seasonal ingredients'
    },
    { 
      id: 'dinner', 
      name: 'Dinner Service', 
      time: '5:30 PM - 10:00 PM',
      icon: 'Moon',
      description: 'Full menu with wine pairings and chef specials'
    }
  ];

  const getAvailableCount = (period) => {
    return timeSlots[period].filter(slot => slot.available).length;
  };

  const formatDateForDisplay = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-warm border border-warm">
      <div className="mb-6">
        <h3 className="text-xl font-playfair font-semibold text-foreground mb-1">
          Select Time
        </h3>
        {selectedDate && (
          <p className="text-sm text-muted-foreground">
            {formatDateForDisplay(selectedDate)}
          </p>
        )}
      </div>

      {/* Service Period Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {periods.map((period) => (
          <button
            key={period.id}
            onClick={() => setSelectedPeriod(period.id)}
            className={`
              p-4 rounded-lg border transition-warm text-left
              ${selectedPeriod === period.id
                ? 'border-primary bg-primary/10 shadow-warm'
                : 'border-warm hover:border-primary/50 hover:bg-primary/5'
              }
            `}
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center
                ${selectedPeriod === period.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
                }
              `}>
                <Icon name={period.icon} size={20} />
              </div>
              <div>
                <h4 className="font-medium text-foreground">{period.name}</h4>
                <p className="text-sm text-muted-foreground">{period.time}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{period.description}</p>
            <div className="flex items-center space-x-2 text-xs">
              <div className={`
                w-2 h-2 rounded-full
                ${getAvailableCount(period.id) > 5 
                  ? 'bg-success' 
                  : getAvailableCount(period.id) > 2 
                    ? 'bg-warning' :'bg-error'
                }
              `}></div>
              <span className="text-muted-foreground">
                {getAvailableCount(period.id)} slots available
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Time Slots Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-foreground">Available Times</h4>
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Popular</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={12} />
              <span>2-hour dining experience</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
          {timeSlots[selectedPeriod].map((slot, index) => (
            <button
              key={index}
              onClick={() => slot.available && onTimeSelect(slot.time)}
              disabled={!slot.available}
              className={`
                relative p-3 rounded-lg border text-sm font-medium transition-warm
                ${selectedTime === slot.time
                  ? 'border-primary bg-primary text-primary-foreground shadow-warm'
                  : slot.available
                    ? 'border-warm bg-background hover:border-primary/50 hover:bg-primary/5 text-foreground'
                    : 'border-muted bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                }
              `}
            >
              <div className="text-center">
                <div>{slot.time}</div>
                {slot.popular && slot.available && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-accent-foreground rounded-full"></div>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedTime && (
        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Clock" size={20} className="text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-medium text-primary">Time Selected</h4>
              <p className="text-sm text-muted-foreground">
                {selectedTime} • {periods.find(p => p.id === selectedPeriod)?.name}
              </p>
            </div>
          </div>
          <div className="mt-3 text-xs text-muted-foreground">
            <p>• Please arrive 10 minutes before your reservation</p>
            <p>• Dining experience typically lasts 2 hours</p>
            <p>• Late arrivals may result in reduced dining time</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSlotPicker;