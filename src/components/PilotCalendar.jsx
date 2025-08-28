import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Plane, Clock } from "lucide-react";

export default function PilotCalendar() {
  // Sample data for reservations (adapted for pilot's upcoming flights)
  const reservations = [
    { id: 1, aircraft: "N12345", type: "Solo", time: "08:00-09:30", date: "2025-09-01", pilot: "You" },
    { id: 2, aircraft: "N67890", type: "Dual", time: "10:30-12:00", date: "2025-09-03", pilot: "You" },
    { id: 3, aircraft: "N23456", type: "Solo", time: "13:00-15:00", date: "2025-09-05", pilot: "You" },
    { id: 4, aircraft: "N12345", type: "Training", time: "09:00-11:00", date: "2025-09-08", pilot: "You" },
    { id: 5, aircraft: "N67890", type: "Solo", time: "14:00-16:00", date: "2025-09-10", pilot: "You" },
    { id: 6, aircraft: "N12345", type: "Dual", time: "07:00-09:00", date: "2025-09-15", pilot: "You" },
  ];

  // For simplicity, let's fix the month to September 2025 for now
  const currentMonth = 8; // September (0-indexed)
  const currentYear = 2025;
  const todayDay = 27; // August 27, 2025 (for highlighting)

  const generateCalendarDays = (month, year) => {
    const date = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const calendarDays = generateCalendarDays(currentMonth, currentYear);
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getReservationsForDate = (day) => {
    if (!day) return [];
    const dateStr = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return reservations.filter(res => res.date === dateStr);
  };

  const getUpcomingFlights = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return reservations.filter(res => new Date(res.date) >= today).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
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
            <span className="text-lg font-semibold">September 2025</span>
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
              // Note: Highlighting 'today' is hardcoded for August 27, 2025 for demonstration
              // In a real app, this would be dynamic based on current date.
              const isToday = (currentMonth === 7 && day === todayDay); // August is 7 (0-indexed)

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

        {/* Sidebar with Upcoming Flights and Quick Actions */}
        <div className="space-y-6">
          {/* Upcoming Flights and Reservations */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Plane size={18} />
              Upcoming Flights
            </h3>
            <div className="space-y-3">
              {getUpcomingFlights().map(res => (
                <div key={res.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-sm">{res.aircraft} - {res.type}</div>
                    <div className="text-xs text-gray-600">{res.pilot}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{res.time}</div>
                    <div className="text-xs text-gray-600">{res.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions (adapted for pilot) */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full bg-blue-100 text-blue-700 p-3 rounded-lg hover:bg-blue-200 flex items-center gap-2">
                <Plane size={16} />
                Log New Flight
              </button>
              <button className="w-full bg-green-100 text-green-700 p-3 rounded-lg hover:bg-green-200 flex items-center gap-2">
                <CalendarIcon size={16} />
                View My Schedule
              </button>
              <button className="w-full bg-gray-100 text-gray-700 p-3 rounded-lg hover:bg-gray-200">
                Export Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}