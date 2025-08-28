"use client";

import MechanicAlerts from "../../../components/MechanicAlerts";
import MechanicSidebar from "../../../components/MechanicSidebar";

export default function MechanicAlertsPage() {
  return (
    <div className="flex h-screen">
      <MechanicSidebar />
      <div className="flex-1 p-6 bg-white overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Alerts</h1>
        <MechanicAlerts />
      </div>
    </div>
  );
}
