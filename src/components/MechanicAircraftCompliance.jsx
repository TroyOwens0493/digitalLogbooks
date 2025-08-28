import React from 'react';

export default function MechanicAircraftCompliance() {
  const complianceStatus = [
    { id: 1, item: 'AD Compliance', status: 'Compliant' },
    { id: 2, item: 'Service Bulletin Compliance', status: 'Compliant' },
    { id: 3, item: 'Annual Inspection', status: 'Due: 2025-10-15' },
    { id: 4, item: 'Transponder Check', status: 'Due: 2026-03-20' },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-3">FAA Compliance Status</h3>
      <ul className="space-y-2">
        {complianceStatus.map((item) => (
          <li key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
            <span>{item.item}</span>
            <span className={`font-medium ${item.status.includes('Due') ? 'text-red-600' : 'text-green-600'}`}>
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
