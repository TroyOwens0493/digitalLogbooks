"use client";

import { Plane, AlertTriangle, Calendar, Wrench, CheckCircle, XCircle } from "lucide-react";

export default function AdminDashboard() {
  // Sample data - in a real app this would come from an API
  const fleetStats = {
    totalAircraft: 12,
    airworthy: 9,
    inMaintenance: 2,
    withSquawks: 3
  };

  const todayReservations = [
    { aircraft: "N12345", time: "08:00-09:30", purpose: "Flight Training", type: "flight" },
    { aircraft: "N67890", time: "10:00-12:00", purpose: "Annual Inspection", type: "maintenance" },
    { aircraft: "N23456", time: "14:00-16:00", purpose: "Solo Flight", type: "flight" },
    { aircraft: "N78901", time: "16:30-18:00", purpose: "Instrument Training", type: "flight" }
  ];

  const nonCompliantAircraft = [
    { aircraft: "N45678", issue: "Annual Inspection Overdue", daysOverdue: 5 },
    { aircraft: "N89012", issue: "VOR Check Expired", daysOverdue: 12 }
  ];

  const upcomingMaintenance = [
    { aircraft: "N12345", type: "100-Hour Inspection", dueDate: "2025-01-25", hoursRemaining: 15 },
    { aircraft: "N67890", type: "Annual Inspection", dueDate: "2025-02-10", hoursRemaining: null },
    { aircraft: "N23456", type: "Oil Change", dueDate: "2025-01-20", hoursRemaining: 8 }
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {/* Fleet Overview Cards */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <div className="flex items-center gap-3 mb-2">
            <Plane className="text-blue-500" size={20} />
            <h3 className="text-lg font-semibold">Total Aircraft</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600">{fleetStats.totalAircraft}</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="text-green-500" size={20} />
            <h3 className="text-lg font-semibold">Airworthy</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">{fleetStats.airworthy}</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <div className="flex items-center gap-3 mb-2">
            <Wrench className="text-orange-500" size={20} />
            <h3 className="text-lg font-semibold">In Maintenance</h3>
          </div>
          <p className="text-3xl font-bold text-orange-600">{fleetStats.inMaintenance}</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="text-red-500" size={20} />
            <h3 className="text-lg font-semibold">With Squawks</h3>
          </div>
          <p className="text-3xl font-bold text-red-600">{fleetStats.withSquawks}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Today&apos;s Reservations */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="text-blue-500" size={20} />
            <h2 className="text-lg font-semibold">Today&apos;s Reservations</h2>
          </div>
          <div className="space-y-3">
            {todayReservations.map((reservation, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{reservation.aircraft}</div>
                  <div className="text-sm text-gray-600">{reservation.purpose}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{reservation.time}</div>
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    reservation.type === 'flight' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {reservation.type === 'flight' ? 'Flight' : 'Maintenance'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aircraft Maintenance Schedule */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="text-orange-500" size={20} />
            <h2 className="text-lg font-semibold">Upcoming Maintenance</h2>
          </div>
          <div className="space-y-3">
            {upcomingMaintenance.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{item.aircraft}</div>
                  <div className="text-sm text-gray-600">{item.type}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{item.dueDate}</div>
                  {item.hoursRemaining && (
                    <div className="text-xs text-gray-600">{item.hoursRemaining}h remaining</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aircraft Not in FAA Compliance */}
      <div className="bg-white p-4 rounded-2xl shadow mt-6">
        <div className="flex items-center gap-3 mb-4">
          <XCircle className="text-red-500" size={20} />
          <h2 className="text-lg font-semibold text-red-700">Aircraft Not in FAA Compliance</h2>
        </div>
        {nonCompliantAircraft.length === 0 ? (
          <p className="text-green-600 font-medium">All aircraft are in compliance!</p>
        ) : (
          <div className="space-y-3">
            {nonCompliantAircraft.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                <div>
                  <div className="font-medium text-red-800">{item.aircraft}</div>
                  <div className="text-sm text-red-600">{item.issue}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-red-700">{item.daysOverdue} days overdue</div>
                  <div className="text-xs text-red-600">Immediate attention required</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}