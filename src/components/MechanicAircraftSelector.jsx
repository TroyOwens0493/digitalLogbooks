"use client";

import React, { useState } from 'react';

export default function MechanicAircraftSelector() {
  const [selectedAircraft, setSelectedAircraft] = useState('N12345');
  const aircraftList = ['N12345', 'N67890', 'N23456', 'N98765']; // Sample aircraft

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-3">Select Aircraft</h3>
      <select
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedAircraft}
        onChange={(e) => setSelectedAircraft(e.target.value)}
      >
        {aircraftList.map((aircraft) => (
          <option key={aircraft} value={aircraft}>
            {aircraft}
          </option>
        ))}
      </select>
      <p className="text-sm text-gray-600 mt-2">Currently viewing: {selectedAircraft}</p>
    </div>
  );
}
