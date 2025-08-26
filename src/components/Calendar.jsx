// components/Calendar.jsx
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Plane, Clock } from "lucide-react";

export default function Calendar() {
    // Sample data for reservations
    const reservations = [
        { id: 1, aircraft: "N12345", type: "Solo", time: "08:00-09:30", date: "2024-03-20", pilot: "John Doe" },
        { id: 2, aircraft: "N67890", type: "Dual", time: "10:30-12:00", date: "2024-03-20", pilot: "Jane Smith" },
        { id: 3, aircraft: "N23456", type: "Solo", time: "13:00-15:00", date: "2024-03-22", pilot: "Mike Johnson" },
        { id: 4, aircraft: "N12345", type: "Training", time: "09:00-11:00", date: "2024-03-23", pilot: "Sarah Wilson" },
        { id: 5, aircraft: "N67890", type: "Solo", time: "14:00-16:00", date: "2024-03-25", pilot: "Tom Brown" },
    ];

    // Generate calendar days for March 2024
    const generateCalendarDays = () => {
        const daysInMonth = 31;
        const firstDay = 5; // March 1, 2024 is a Friday (0=Sunday, 1=Monday, etc.)
        const days = [];
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }
        
        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day);
        }
        
        return days;
    };

    const calendarDays = generateCalendarDays();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Get reservations for a specific date
    const getReservationsForDate = (day) => {
        if (!day) return [];
        const dateStr = `2024-03-${day.toString().padStart(2, '0')}`;
        return reservations.filter(res => res.date === dateStr);
    };

    return (
        <div className="p-6 flex-1 overflow-auto">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Flight Calendar</h1>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <ChevronLeft size={20} />
                        </button>
                        <span className="text-lg font-semibold">March 2024</span>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
                        <CalendarIcon size={16} />
                        Book Flight
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Calendar Grid */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
                    <div className="grid grid-cols-7 gap-1 mb-4">
                        {dayNames.map(day => (
                            <div key={day} className="text-center font-semibold text-gray-600 py-2">
                                {day}
                            </div>
                        ))}
                    </div>
                    
                    <div className="grid grid-cols-7 gap-1">
                        {calendarDays.map((day, index) => {
                            const dayReservations = getReservationsForDate(day);
                            const isToday = day === 20; // Highlighting March 20 as today
                            
                            return (
                                <div
                                    key={index}
                                    className={`min-h-[100px] p-2 border border-gray-100 ${
                                        day ? 'hover:bg-gray-50 cursor-pointer' : ''
                                    } ${isToday ? 'bg-blue-50 border-blue-200' : ''}`}
                                >
                                    {day && (
                                        <>
                                            <div className={`text-sm font-medium mb-1 ${
                                                isToday ? 'text-blue-600' : 'text-gray-700'
                                            }`}>
                                                {day}
                                            </div>
                                            <div className="space-y-1">
                                                {dayReservations.map(res => (
                                                    <div
                                                        key={res.id}
                                                        className="text-xs p-1 bg-blue-100 text-blue-800 rounded truncate"
                                                        title={`${res.aircraft} - ${res.pilot} (${res.time})`}
                                                    >
                                                        {res.aircraft}
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Sidebar with today's schedule and quick actions */}
                <div className="space-y-6">
                    {/* Today's Schedule */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <Clock size={18} />
                            Today's Schedule
                        </h3>
                        <div className="space-y-3">
                            {reservations
                                .filter(res => res.date === "2024-03-20")
                                .map(res => (
                                    <div key={res.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div>
                                            <div className="font-medium text-sm">{res.aircraft}</div>
                                            <div className="text-xs text-gray-600">{res.pilot}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-medium">{res.time}</div>
                                            <div className="text-xs text-gray-600">{res.type}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                        <div className="space-y-2">
                            <button className="w-full bg-blue-100 text-blue-700 p-3 rounded-lg hover:bg-blue-200 flex items-center gap-2">
                                <Plane size={16} />
                                Book New Flight
                            </button>
                            <button className="w-full bg-green-100 text-green-700 p-3 rounded-lg hover:bg-green-200 flex items-center gap-2">
                                <CalendarIcon size={16} />
                                View Week Schedule
                            </button>
                            <button className="w-full bg-gray-100 text-gray-700 p-3 rounded-lg hover:bg-gray-200">
                                Export Calendar
                            </button>
                        </div>
                    </div>

                    {/* Aircraft Availability */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="text-lg font-semibold mb-4">Aircraft Status</h3>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm">N12345</span>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Available</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">N67890</span>
                                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">In Use</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">N23456</span>
                                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Maintenance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}