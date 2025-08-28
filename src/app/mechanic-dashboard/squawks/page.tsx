import React from 'react';
import MechanicSquawkCommunication from '../../../components/MechanicSquawkCommunication';
import MechanicSquawksList from '../../../components/MechanicSquawksList';
import MechanicMaintenanceEntry from '../../../components/MechanicMaintenanceEntry';

export default function MechanicSquawksPage() {
  return (
    <div className="p-6 flex-1 bg-white overflow-auto">
      <h1 className="text-2xl font-bold mb-4">Mechanic Squawks</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="md:col-span-2 lg:col-span-1">
          <MechanicSquawkCommunication />
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <MechanicSquawksList />
        </div>
        <div className="md:col-span-3 lg:col-span-1">
          <MechanicMaintenanceEntry />
        </div>
      </div>
    </div>
  );
}
