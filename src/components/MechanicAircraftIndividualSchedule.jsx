import React from 'react';

export default function MechanicAircraftIndividualSchedule() {
  const individualSchedule = [
    { id: 1, date: '2025-08-28', time: '09:00-11:00', description: 'Scheduled Maintenance (Oil Change)' },
    { id: 2, date: '2025-08-29', time: '14:00-16:00', description: 'Flight (Pilot Jane Doe)' },
    { id: 3, date: '2025-09-01', time: '08:00-12:00', description: '100-Hour Inspection' },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-3">Individual Aircraft Schedule (N12345)</h3>
      <ul className="space-y-2">
        {individualSchedule.map((event) => (
          <li key={event.id} className="bg-gray-50 p-3 rounded-md">
            <p className="font-medium">{event.date} {event.time}</p>
            <p className="text-sm text-gray-700">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
