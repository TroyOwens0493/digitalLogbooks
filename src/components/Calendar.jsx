// components/Calendar.jsx
"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, User } from "lucide-react";

export default function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date(2024, 2, 1)); // March 2024
    
    // Sample flight reservations
    const reservations = {
        '2024-03-15': [
            { time: '08:00 - 09:30', type: 'Solo', aircraft: 'A12345', pilot: 'John Doe' }
        ],
        '2024-03-18': [
            { time: '10:30 - 12:00', type: 'Dual', aircraft: 'B67890', pilot: 'Jane Smith' },
            { time: '14:00 - 15:30', type: 'Solo', aircraft: 'C23456', pilot: 'Mike Johnson' }
        ],
        '2024-03-22': [
            { time: '09:00 - 10:30', type: 'Dual', aircraft: 'A12345', pilot: 'Sarah Williams' }
        ],
        '2024-03-25': [
            { time: '13:00 - 15:00', type: 'Solo', aircraft: 'C23456', pilot: 'Alex Brown' },
            { time: '15:30 - 17:00', type: 'Solo', aircraft: 'B67890', pilot: 'Chris Davis' }
        ]
    };

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
        
        // Add all days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day);
        }
        
        return days;
    };

    const navigateMonth = (direction) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() + direction);
        setCurrentDate(newDate);
    };

    const formatDateKey = (day) => {
        if (!day) return null;
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const dayStr = day.toString().padStart(2, '0');
        return `${year}-${month}-${dayStr}`;
    };

    const getDayReservations = (day) => {
        const dateKey = formatDateKey(day);
        return dateKey ? reservations[dateKey] || [] : [];
    };

    const isToday = (day) => {
        if (!day) return false;
        const today = new Date();
        return day === today.getDate() && 
               currentDate.getMonth() === today.getMonth() && 
               currentDate.getFullYear() === today.getFullYear();
    };

    const days = getDaysInMonth(currentDate);

    return (
        <div className="p-6 flex-1">
            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">Flight Calendar</h1>
                <p className="text-gray-600">View and manage flight reservations</p>
            </div>

            {/* Calendar Header */}
            <div className="bg-white rounded-2xl shadow p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">
                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h2>
                    <div className="flex gap-2">
                        <button
                            onClick={() => navigateMonth(-1)}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => navigateMonth(1)}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Days of Week Header */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                    {daysOfWeek.map(day => (
                        <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1">
                    {days.map((day, index) => {
                        const dayReservations = getDayReservations(day);
                        const hasReservations = dayReservations.length > 0;
                        
                        return (
                            <div
                                key={index}
                                className={`min-h-24 p-1 border border-gray-100 ${
                                    day ? 'bg-white hover:bg-gray-50' : 'bg-gray-50'
                                } ${isToday(day) ? 'bg-blue-50 border-blue-200' : ''}`}
                            >
                                {day && (
                                    <>
                                        <div className={`text-sm font-medium mb-1 ${
                                            isToday(day) ? 'text-blue-600' : 'text-gray-900'
                                        }`}>
                                            {day}
                                        </div>
                                        {hasReservations && (
                                            <div className="space-y-1">
                                                {dayReservations.slice(0, 2).map((reservation, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`text-xs p-1 rounded ${
                                                            reservation.type === 'Solo' 
                                                                ? 'bg-green-100 text-green-800' 
                                                                : 'bg-blue-100 text-blue-800'
                                                        }`}
                                                    >
                                                        <div className="font-semibold">{reservation.aircraft}</div>
                                                        <div className="truncate">{reservation.time}</div>
                                                    </div>
                                                ))}
                                                {dayReservations.length > 2 && (
                                                    <div className="text-xs text-gray-500 text-center">
                                                        +{dayReservations.length - 2} more
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Legend */}
            <div className="mt-6 bg-white rounded-2xl shadow p-4">
                <h3 className="text-lg font-semibold mb-3">Legend</h3>
                <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-100 border border-green-200 rounded"></div>
                        <span className="text-sm text-gray-700">Solo Flight</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-100 border border-blue-200 rounded"></div>
                        <span className="text-sm text-gray-700">Dual Flight</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-50 border border-blue-200 rounded"></div>
                        <span className="text-sm text-gray-700">Today</span>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 bg-white rounded-2xl shadow p-4">
                <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
                <div className="flex gap-3">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        <Clock size={16} className="inline mr-2" />
                        Book New Flight
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                        <User size={16} className="inline mr-2" />
                        View My Reservations
                    </button>
                </div>
            </div>
        </div>
    );
}