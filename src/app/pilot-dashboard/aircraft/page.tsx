"use client";

import PilotAircraft from "../../../components/PilotAircraft";
import PilotSidebar from "../../../components/PilotSidebar";

export default function PilotAircraftPage() {
  return (
    <div className="flex h-screen">
      <PilotSidebar />
      <div className="flex-1 p-6 bg-white overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Aircraft</h1>
        <PilotAircraft />
      </div>
    </div>
  );
}
