"use client";

import { useState } from "react";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, Plane, Wrench, GraduationCap } from "lucide-react";

export default function AdminCalendar() {
  const [viewMode, setViewMode] = useState<'day' | 'week' | 'month'>('week');
  const [currentDate, setCurrentDate] = useState(new Date());

  // Sample calendar data
  const events = [
    {
      id: 1,
      title: "N12345 - Flight Training",
      start: "09:00",
      end: "10:30",
      date: "2025-01-22",
      type: "flight",
      instructor: "John Smith",
      student: "Mike Johnson"
    },
    {
      id: 2,
      title: "N67890 - Annual Inspection",
      start: "08:00",
      end: "17:00",
      date: "2025-01-22",
      type: "maintenance",
      mechanic: "Bob Wilson"
    },
    {
      id: 3,
      title: "N23456 - Solo Flight",
      start: "14:00",
      end: "15:30",
      date: "2025-01-23",
      type: "flight",
      pilot: "Sarah Davis"
    },
    {
      id: 4,
      title: "Invoice Deadline - ABC Flight School",
      start: "23:59",
      end: "23:59",
      date: "2025-01-24",
      type: "billing",
      amount: "$2,850"
    },
    {
      id: 5,
      title: "CFI Recurrency Training",
      start: "09:00",
      end: "17:00",
      date: "2025-01-25",
      type: "training",
      attendees: "All CFIs"
    }
  ];

  const upcomingMaintenances = [
    { aircraft: "N12345", type: "100-Hour Inspection", date: "2025-01-28", mechanic: "TBD" },
    { aircraft: "N45678", type: "Oil Change", date: "2025-01-30", mechanic: "Bob Wilson" },
    { aircraft: "N78901", type: "Annual Inspection", date: "2025-02-05", mechanic: "TBD" }
  ];

  const upcomingFlights = [
    { aircraft: "N12345", date: "2025-01-23", time: "10:00-11:30", type: "Dual", instructor: "John Smith", student: "Amy Chen" },
    { aircraft: "N23456", date: "2025-01-24", time: "14:00-16:00", type: "Solo", pilot: "Tom Brown" },
    { aircraft: "N67890", date: "2025-01-25", time: "09:00-11:00", type: "Checkride", examiner: "Jane Wilson", student: "Rob Green" }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'flight': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'maintenance': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'training': return 'bg-green-100 text-green-800 border-green-200';
      case 'billing': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'flight': return <Plane size={16} />;
      case 'maintenance': return <Wrench size={16} />;
      case 'training': return <GraduationCap size={16} />;
      case 'billing': return <CalendarIcon size={16} />;
      default: return <CalendarIcon size={16} />;
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long'
    });
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Fleet Calendar</h1>
        
        {/* View Mode Selector */}
        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {(['day', 'week', 'month'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-4 py-2 rounded-md capitalize transition-colors ${
                  viewMode === mode 
                    ? 'bg-white shadow text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)))}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-lg font-semibold min-w-[200px] text-center">
              {viewMode === 'month' ? formatMonth(currentDate) : formatDate(currentDate)}
            </span>
            <button 
              onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)))}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus size={16} />
            Add Event
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {/* Main Calendar View */}
        <div className="col-span-3 bg-white p-6 rounded-2xl shadow">
          <div className="space-y-4">
            {/* Time slots for week view */}
            {viewMode === 'week' && (
              <div className="grid grid-cols-8 gap-2">
                <div className="font-semibold text-gray-600">Time</div>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <div key={day} className="font-semibold text-gray-600 text-center">{day}</div>
                ))}
                
                {/* Time slots */}
                {Array.from({ length: 12 }, (_, i) => {
                  const hour = i + 6; // Start from 6 AM
                  return (
                    <div key={hour} className="contents">
                      <div className="text-sm text-gray-500 py-2">
                        {hour < 12 ? `${hour}:00 AM` : `${hour === 12 ? 12 : hour - 12}:00 PM`}
                      </div>
                      {Array.from({ length: 7 }, (_, dayIndex) => (
                        <div key={`${hour}-${dayIndex}`} className="border border-gray-100 p-2 min-h-[60px]">
                          {/* Events would be rendered here based on time and day */}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Event list for day/month view */}
            {(viewMode === 'day' || viewMode === 'month') && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold mb-4">
                  {viewMode === 'day' ? "Today's Events" : "This Month's Events"}
                </h3>
                {events.map((event) => (
                  <div key={event.id} className={`p-4 rounded-lg border ${getEventTypeColor(event.type)}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {getEventIcon(event.type)}
                        <div>
                          <div className="font-semibold">{event.title}</div>
                          <div className="text-sm opacity-80">
                            {event.date} • {event.start} - {event.end}
                          </div>
                          {event.instructor && (
                            <div className="text-sm">Instructor: {event.instructor}</div>
                          )}
                          {event.mechanic && (
                            <div className="text-sm">Mechanic: {event.mechanic}</div>
                          )}
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        ⋯
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Maintenance */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Wrench size={18} />
              Upcoming Maintenance
            </h3>
            <div className="space-y-3">
              {upcomingMaintenances.map((maintenance, idx) => (
                <div key={idx} className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="font-medium text-sm">{maintenance.aircraft}</div>
                  <div className="text-xs text-gray-600">{maintenance.type}</div>
                  <div className="text-xs text-gray-600">{maintenance.date}</div>
                  <div className="text-xs text-orange-600">
                    {maintenance.mechanic === 'TBD' ? 'Needs assignment' : `Assigned to ${maintenance.mechanic}`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Flights */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Plane size={18} />
              Upcoming Flights
            </h3>
            <div className="space-y-3">
              {upcomingFlights.map((flight, idx) => (
                <div key={idx} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="font-medium text-sm">{flight.aircraft} - {flight.type}</div>
                  <div className="text-xs text-gray-600">{flight.date} • {flight.time}</div>
                  {flight.instructor && (
                    <div className="text-xs text-blue-600">CFI: {flight.instructor}</div>
                  )}
                  {flight.student && (
                    <div className="text-xs text-blue-600">Student: {flight.student}</div>
                  )}
                  {flight.pilot && (
                    <div className="text-xs text-blue-600">Pilot: {flight.pilot}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full bg-blue-100 text-blue-700 p-3 rounded-lg hover:bg-blue-200 text-sm">
                Schedule Flight
              </button>
              <button className="w-full bg-orange-100 text-orange-700 p-3 rounded-lg hover:bg-orange-200 text-sm">
                Schedule Maintenance
              </button>
              <button className="w-full bg-green-100 text-green-700 p-3 rounded-lg hover:bg-green-200 text-sm">
                Add Training Event
              </button>
              <button className="w-full bg-purple-100 text-purple-700 p-3 rounded-lg hover:bg-purple-200 text-sm">
                Set Billing Deadline
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}