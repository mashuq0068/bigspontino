import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CalendarView = ({ selectedDate, onDateSelect, availabilityData }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
  };

  const getDateAvailability = (date) => {
    if (!date) return null;
    const dateStr = date.toISOString().split('T')[0];
    return availabilityData[dateStr] || { available: true, slots: 8, special: false };
  };

  const isDateSelectable = (date) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };

  const formatDateForDisplay = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <div className="bg-card rounded-xl p-6 shadow-warm border border-warm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-playfair font-semibold text-foreground">
          Select Your Date
        </h3>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            iconName="ChevronLeft"
            onClick={() => navigateMonth(-1)}
            className="h-8 w-8 p-0"
          />
          <span className="text-lg font-medium text-foreground min-w-[140px] text-center">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </span>
          <Button
            variant="ghost"
            size="sm"
            iconName="ChevronRight"
            onClick={() => navigateMonth(1)}
            className="h-8 w-8 p-0"
          />
        </div>
      </div>

      {selectedDate && (
        <div className="mb-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
          <p className="text-sm text-primary font-medium">
            Selected: {formatDateForDisplay(selectedDate)}
          </p>
        </div>
      )}

      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((date, index) => {
          if (!date) {
            return <div key={index} className="p-2 h-12"></div>;
          }

          const availability = getDateAvailability(date);
          const isSelectable = isDateSelectable(date);
          const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
          const isToday = date.toDateString() === new Date().toDateString();

          return (
            <button
              key={index}
              onClick={() => isSelectable && onDateSelect(date)}
              disabled={!isSelectable}
              className={`
                relative p-2 h-12 text-sm font-medium rounded-lg transition-warm
                ${isSelected 
                  ? 'bg-primary text-primary-foreground shadow-warm' 
                  : isSelectable
                    ? availability.available
                      ? 'bg-background hover:bg-primary/10 text-foreground border border-warm hover:border-primary/30'
                      : 'bg-muted text-muted-foreground cursor-not-allowed' :'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                }
                ${isToday && !isSelected ? 'ring-2 ring-accent' : ''}
              `}
            >
              <span className="relative z-10">{date.getDate()}</span>
              
              {availability.special && isSelectable && (
                <div className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></div>
              )}
              
              {availability.available && availability.slots <= 3 && isSelectable && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-warning rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Special Event</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-warning rounded-full"></div>
            <span>Limited Availability</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Icon name="Info" size={12} />
          <span>Reservations up to 60 days in advance</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;