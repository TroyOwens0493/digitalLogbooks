import React from 'react';

export default function MechanicSquawksList() {
  const currentSquawks = [
    { id: 1, aircraft: 'N12345', description: 'Landing gear warning light intermittent', status: 'Open' },
    { id: 2, aircraft: 'N67890', description: 'APU oil pressure low', status: 'Open' },
    { id: 3, aircraft: 'N11223', description: 'Cabin pressure fluctuating', status: 'Open' },
  ];

  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-semibold mb-3">Current Squawks in Fleet</h3>
      <ul className="space-y-2">
        {currentSquawks.map((squawk) => (
          <li key={squawk.id} className="bg-gray-50 p-3 rounded-md flex justify-between items-center">
            <div>
              <p className="font-medium">{squawk.aircraft}: {squawk.description}</p>
              <span className="text-sm text-gray-600">Status: {squawk.status}</span>
            </div>
            <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600">View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
