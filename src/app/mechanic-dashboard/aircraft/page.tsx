import React from 'react';
import MechanicAircraftSelector from '../../../components/MechanicAircraftSelector';
import MechanicAircraftDocuments from '../../../components/MechanicAircraftDocuments';
import MechanicAircraftCompliance from '../../../components/MechanicAircraftCompliance';
import MechanicAircraftLogbooks from '../../../components/MechanicAircraftLogbooks';
import MechanicAircraftMaintenanceSchedule from '../../../components/MechanicAircraftMaintenanceSchedule';
import MechanicAircraftStatus from '../../../components/MechanicAircraftStatus';
import MechanicAircraftIndividualSchedule from '../../../components/MechanicAircraftIndividualSchedule';

export default function MechanicAircraftPage() {
  return (
    <div className="p-6 flex-1 bg-white overflow-auto">
      <h1 className="text-2xl font-bold mb-4">Mechanic Aircraft Management</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">
          <MechanicAircraftSelector />
          <MechanicAircraftStatus />
          <MechanicAircraftIndividualSchedule />
        </div>

        {/* Middle Column */}
        <div className="lg:col-span-1 space-y-6">
          <MechanicAircraftDocuments />
          <MechanicAircraftLogbooks />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1 space-y-6">
          <MechanicAircraftCompliance />
          <MechanicAircraftMaintenanceSchedule />
        </div>
      </div>
    </div>
  );
}
