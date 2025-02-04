import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sun, Sunset, Moon, Clock } from 'lucide-react';

const timeSlots = {
    "Mañana": ["09:00","10:00", "11:00", "12:00",],
    "Tarde": ["15:00", "16:00", "17:00", "18:00"],
    "Noche": ["19:00", "20:00", "21:00", "22:00", "23:00"]
};

const periodIcons = {
    "Mañana": Sun,
    "Tarde": Sunset,
    "Noche": Moon
};

function WeeklyCalendar({ onReservationUpdate }) {
    const [currentWeek, setCurrentWeek] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const generateWeekDays = (startDate = new Date()) => {
        const days = [];
        const currentDay = new Date(startDate);
        currentDay.setHours(0, 0, 0, 0);
        const diff = currentDay.getDate() - currentDay.getDay();
        currentDay.setDate(diff);

        for (let i = 0; i < 7; i++) {
            const date = new Date(currentDay);
            date.setDate(currentDay.getDate() + i);
            days.push(date);
        }
        return days;
    };

    useEffect(() => {
        setCurrentWeek(generateWeekDays());
        // Seleccionar automáticamente el día actual
        const today = new Date();
        setSelectedDate(today);
    }, []);

    const navigateWeek = (direction) => {
        const firstDay = new Date(currentWeek[0]);
        const newDate = new Date(firstDay);
        newDate.setDate(firstDay.getDate() + (direction === 'next' ? 7 : -7));
        setCurrentWeek(generateWeekDays(newDate));
    };

    const isDateDisabled = (date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };

    const isTimeDisabled = (date, time) => {
        if (isDateDisabled(date)) return true;

        const now = new Date();
        const [hours] = time.split(':').map(Number);

        if (date.toDateString() === now.toDateString()) {
            return hours <= now.getHours();
        }

        return false;
    };

    const handleDateSelect = (date) => {
        if (!isDateDisabled(date)) {
            setSelectedDate(date)
            onReservationUpdate(date, selectedTime)
        }
    }

    const handleTimeSelect = (time) => {
        if (!isTimeDisabled(selectedDate, time)) {
            setSelectedTime(time)
            onReservationUpdate(selectedDate, time)
        }
    }

    return (
        <div className="max-w-7xl mx-auto bg-white rounded-2xl md:p-6">
            {/* Días de la semana */}
            <div className="grid grid-cols-9 gap-0 md:gap-3 md:grid-cols-9">
                <button
                    onClick={() => navigateWeek('prev')}
                    className="p-2 hover:bg-white rounded-lg transition-all duration-200"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                {currentWeek.map((date) => {
                    const isSelected = selectedDate?.toDateString() === date.toDateString();
                    const isDisabled = isDateDisabled(date);

                    return (
                        <button
                            key={date.toISOString()}
                            onClick={() => handleDateSelect(date)}
                            disabled={isDisabled}
                            className={`
                p-4 rounded-xl transition-all duration-200 relative overflow-hidden
                ${isSelected
                                    ? 'bg-black text-white shadow-lg scale-105'
                                    : isDisabled
                                        ? 'bg-gray-100 cursor-not-allowed opacity-50'
                                        : 'bg-gray-50 hover:bg-gray-100'
                                }
              `}
                        >
                            <div className="flex flex-col items-center">
                                <span className="text-sm font-medium">
                                    {date.toLocaleDateString('es-ES', { weekday: 'short' })}
                                </span>
                                <span className="text-2xl font-bold mt-1">
                                    {date.getDate()}
                                </span>
                            </div>
                        </button>
                    );
                })}
                <button
                    onClick={() => navigateWeek('next')}
                    className="p-2 hover:bg-white rounded-lg transition-all duration-200"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
            <div className='flex justify-center mt-4 mb-8'>
                <span className="font-medium">
                    {currentWeek[0]?.toLocaleDateString('es-ES', { month: 'long' }).charAt(0).toUpperCase() + currentWeek[0]?.toLocaleDateString('es-ES', { month: 'long' }).slice(1)}
                </span>
            </div>

            {/* Horarios por período */}
            {selectedDate && (
                <div className="space-y-8">
                    {Object.entries(timeSlots).map(([period, slots]) => {
                        const PeriodIcon = periodIcons[period];

                        return (
                            <div key={period} className="bg-gray-50 p-6 rounded-xl">
                                <div className="flex items-center space-x-3 mb-4">
                                    <PeriodIcon className="w-6 h-6" />
                                    <h3 className="text-xl font-bold">{period}</h3>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                                    {slots.map((time) => {
                                        const isSelected = selectedTime === time;
                                        const isDisabled = isTimeDisabled(selectedDate, time);

                                        return (
                                            <button
                                                key={time}
                                                onClick={() => handleTimeSelect(time)}
                                                disabled={isDisabled}
                                                className={`
                          p-3 rounded-lg border-2 transition-all duration-200
                          ${isSelected
                                                        ? 'border-black bg-black text-white'
                                                        : isDisabled
                                                            ? 'border-gray-200 bg-gray-100 cursor-not-allowed'
                                                            : 'border-gray-200 hover:border-black'
                                                    }
                        `}
                                            >
                                                <div className="flex items-center justify-center space-x-2">
                                                    {isDisabled ? (
                                                        <Clock className="w-4 h-4 text-gray-400" />
                                                    ) : (
                                                        <span className="font-medium">{time}</span>
                                                    )}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default WeeklyCalendar;