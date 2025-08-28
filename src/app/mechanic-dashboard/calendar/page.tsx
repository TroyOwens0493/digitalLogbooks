import React from 'react';
import MechanicCalendarMain from '../../../components/MechanicCalendarMain';

export default function MechanicCalendarPage() {
  return (
    <div className="p-6 flex-1 bg-white overflow-auto">
      <h1 className="text-2xl font-bold mb-4">Mechanic Calendar</h1>

      <MechanicCalendarMain />
    </div>
  );
}
