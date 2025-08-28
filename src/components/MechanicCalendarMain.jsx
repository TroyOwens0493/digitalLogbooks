"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Wrench, Clock } from "lucide-react";

export default function MechanicCalendarMain() {
  // Sample data for maintenance schedules
  const maintenanceSchedules = [
    { id: 1, aircraft: "N12345", type: "100-Hour Inspection", time: "08:00-12:00", date: "2025-08-20" },
    { id: 2, aircraft: "N67890", type: "Engine Overhaul", time: "09:00-17:00", date: "2025-08-20" },
    { id: 3, aircraft: "N23456", type: "Avionics Upgrade", time: "13:00-16:00", date: "2025-08-22" },
    { id: 4, aircraft: "N12345", type: "Oil Change", time: "09:00-10:00", date: "2025-08-23" },
    { id: 5, aircraft: "N67890", type: "Landing Gear Check", time: "14:00-16:00", date: "2025-08-25" },
  ];

  // Generate calendar days for August 2025 (Today is Wednesday, August 27, 2025)
  const generateCalendarDays = () => {
    const daysInMonth = 31;
    const firstDay = 4; // August 1, 2025 is a Friday (0=Sunday, 1=Monday, etc.)
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

  // Get maintenance schedules for a specific date
  const getSchedulesForDate = (day) => {
    if (!day) return [];
    const dateStr = `2025-08-${day.toString().padStart(2, '0')}`;
    return maintenanceSchedules.filter(schedule => schedule.date === dateStr);
  };

  return (
    <>
      {/* Calendar Grid */}
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Maintenance Calendar</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <ChevronLeft size={20} />
              </button>
              <span className="text-lg font-semibold">August 2025</span>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <ChevronRight size={20} />
              </button>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <CalendarIcon size={16} />
              Schedule Maintenance
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-4">
          {dayNames.map(day => (
            <div key={day} className="text-center font-semibold text-gray-600 py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => {
            const daySchedules = getSchedulesForDate(day);
            const isToday = day === 27; // Highlighting August 27 as today

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
                      {daySchedules.map(schedule => (
                        <div
                          key={schedule.id}
                          className="text-xs p-1 bg-blue-100 text-blue-800 rounded truncate"
                          title={`${schedule.aircraft} - ${schedule.type} (${schedule.time})`}
                        >
                          {schedule.aircraft}
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

      {/* Sidebar with upcoming schedule and quick actions */}
      <div className="space-y-6">
        {/* Upcoming Scheduled Maintenance */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-3">Upcoming Scheduled Maintenance</h3>
          <ul className="space-y-2">
            {maintenanceSchedules
              .filter(schedule => new Date(schedule.date) > new Date('2025-08-27')) // Filter for future dates
              .map((item) => (
                <li key={item.id} className="bg-gray-50 p-3 rounded-md">
                  <p className="font-medium">{item.aircraft} - {item.date}: {item.type}</p>
                </li>
              ))}
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full bg-blue-100 text-blue-700 p-3 rounded-lg hover:bg-blue-200 flex items-center gap-2">
              <CalendarIcon size={16} />
              Schedule New Maintenance
            </button>
            <button className="w-full bg-red-100 text-red-700 p-3 rounded-lg hover:bg-red-200 flex items-center gap-2">
              <Wrench size={16} />
              Cancel Maintenance
            </button>
            <button className="w-full bg-yellow-100 text-yellow-700 p-3 rounded-lg hover:bg-yellow-200 flex items-center gap-2">
              <Clock size={16} />
              Change Maintenance Time
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
