"use client";

import PilotFlights from "../../../components/PilotFlights";
import PilotSidebar from "../../../components/PilotSidebar";

export default function PilotFlightsPage() {
  return (
    <div className="flex">
      <PilotSidebar />
      <div className="flex-1 p-6 bg-white">
        <h1 className="text-2xl font-bold mb-4">Flights</h1>
        <PilotFlights />
      </div>
    </div>
  );
}
