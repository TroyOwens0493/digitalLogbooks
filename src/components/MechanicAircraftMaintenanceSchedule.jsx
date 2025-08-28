import React from 'react';

export default function MechanicAircraftMaintenanceSchedule() {
  const maintenanceSchedule = [
    { id: 1, inspection: 'Annual Inspection', dueDate: '2025-10-15', timeRemaining: '2 months' },
    { id: 2, inspection: '100-Hour Inspection', dueDate: 'Next 100 hours', timeRemaining: '50 hours' },
    { id: 3, inspection: 'Transponder Check', dueDate: '2026-03-20', timeRemaining: '7 months' },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-3">Aircraft Maintenance Schedule</h3>
      <ul className="space-y-2">
        {maintenanceSchedule.map((item) => (
          <li key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
            <div>
              <p className="font-medium">{item.inspection}</p>
              <span className="text-sm text-gray-600">Due: {item.dueDate}</span>
            </div>
            <span className="text-sm font-semibold text-blue-600">{item.timeRemaining}</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-500 mt-2">Updated via pilot hours or monthly basis.</p>
    </div>
  );
}
