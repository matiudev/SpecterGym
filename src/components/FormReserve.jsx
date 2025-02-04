import React, { useState } from 'react'
import { Calendar, Clock, CreditCard } from 'lucide-react'
import WeeklyCalendar from './WeeklyCalendar'
import DatePersonal from './DatePersonal'

function FormReserve() {
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [selectedInfo, setSelectedInfo] = useState(false)

    const handleReservationUpdate = (date, time) => {
        setSelectedDate(date)
        // Solo actualiza selectedInfo cuando la hora cambie
        if (time && time !== selectedTime) {
            setSelectedTime(time);
            setSelectedInfo(true);  // Solo lo activamos si hay una nueva hora
        } else if (!time) {
            setSelectedTime(false); // Si no hay hora seleccionada, reseteamos
        }
    };

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('es-ES', {
            weekday: 'short',
            day: 'numeric',
            month: 'short'
        }).format(date)
    }

    return (
        <div className="pt-14 pb-14 min-h-screen flex justify-center items-start bg-[#f0f3f4]" id="reserva">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-start gap-4 justify-around">
                <div className="bg-white p-8 rounded-md order-last md:order-first">
                    <p className="text-lg font-bold text-start text-gray-600">
                        Selecciona fecha y hora de tu servicio
                    </p>
                    <p className="text-start mb-4 text-gray-600">
                        Esta fecha es relevante para esperar tu visita
                        y brindarte una mejor atención.
                    </p>
                    {!selectedInfo ?
                        <WeeklyCalendar onReservationUpdate={handleReservationUpdate} />
                        :
                        <DatePersonal />
                    }
                </div>

                {/* CUADRO DE INFORMACION */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-9 rounded-xl border border-gray-200 order-first md:order-last">
                    <h3 className="text-xl font-bold mb-3">Tu Reserva</h3>
                    <div className="flex items-center space-x-2 text-gray-600">
                        <CreditCard className="w-5 h-5" />
                        <p className='flex-grow text-start'>{'$15.000 Mensual'}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-5 h-5" />
                        <p className='flex-grow text-start'>
                            {selectedTime
                                ? `${selectedTime}`
                                : "60 min"}
                        </p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-5 h-5" />
                        <p className='flex-grow text-start min-w-[200px]'>
                            {selectedDate
                                ? `${formatDate(selectedDate)}`
                                : "Selecciona una fecha y hora"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormReserve