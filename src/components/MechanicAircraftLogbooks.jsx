import React from 'react';

export default function MechanicAircraftLogbooks() {
  const logbooks = [
    { id: 1, name: 'Engine Logbook', status: 'Digital, Up-to-date', link: '#' },
    { id: 2, name: 'Propeller Logbook', status: 'Digital, Up-to-date', link: '#' },
    { id: 3, name: 'Airframe Logbook', status: 'Digital, Up-to-date', link: '#' },
    { id: 4, name: 'AD Compliance Records', status: 'Digital, Compliant', link: '#' },
    { id: 5, name: 'Required Forms & Supplements', status: 'Digital, Complete', link: '#' },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-3">Aircraft Logbooks</h3>
      <ul className="space-y-2">
        {logbooks.map((log) => (
          <li key={log.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
            <span>{log.name}</span>
            <a href={log.link} className="text-blue-600 hover:underline">View ({log.status})</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
