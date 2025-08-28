import React from 'react';

export default function MechanicAircraftStatus() {
  const aircraftFleetStatus = [
    { id: 1, tailNumber: 'N12345', inspectionStatus: 'Due Soon', bookingStatus: 'Available', operationalStatus: 'Operational' },
    { id: 2, tailNumber: 'N67890', inspectionStatus: 'Compliant', bookingStatus: 'Booked', operationalStatus: 'Operational' },
    { id: 3, tailNumber: 'N23456', inspectionStatus: 'Overdue', bookingStatus: 'Unavailable', operationalStatus: 'Down for Maintenance' },
    { id: 4, tailNumber: 'N98765', inspectionStatus: 'Compliant', bookingStatus: 'Available', operationalStatus: 'Operational' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Operational': return 'text-green-600';
      case 'Down for Maintenance': return 'text-red-600';
      case 'Available': return 'text-green-600';
      case 'Booked': return 'text-yellow-600';
      case 'Unavailable': return 'text-red-600';
      case 'Compliant': return 'text-green-600';
      case 'Due Soon': return 'text-yellow-600';
      case 'Overdue': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-3">Aircraft Fleet Status</h3>
      <ul className="space-y-3">
        {aircraftFleetStatus.map((aircraft) => (
          <li key={aircraft.id} className="bg-gray-50 p-3 rounded-md">
            <p className="font-medium text-lg mb-1">{aircraft.tailNumber}</p>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div>
                <span className="font-semibold">Inspection:</span>
                <span className={`ml-1 ${getStatusColor(aircraft.inspectionStatus)}`}>{aircraft.inspectionStatus}</span>
              </div>
              <div>
                <span className="font-semibold">Booking:</span>
                <span className={`ml-1 ${getStatusColor(aircraft.bookingStatus)}`}>{aircraft.bookingStatus}</span>
              </div>
              <div>
                <span className="font-semibold">Status:</span>
                <span className={`ml-1 ${getStatusColor(aircraft.operationalStatus)}`}>{aircraft.operationalStatus}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
