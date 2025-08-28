"use client";

import PilotUpcomingFlights from "../../components/PilotUpcomingFlights";
import PilotAircraftMaintenance from "../../components/PilotAircraftMaintenance";
import PilotAircraftDown from "../../components/PilotAircraftDown";
import PilotNotifications from "../../components/PilotNotifications";
import PilotSidebar from "../../components/PilotSidebar";

export default function PilotDashboard() {
  return (
    <div className="flex">
      <PilotSidebar />
      <div className="flex-1 p-6 bg-white">
        <h1 className="text-2xl font-bold mb-4">Pilot Dashboard</h1>

        <div className="grid grid-cols-3 gap-4">
          {/* Upcoming Flights Schedule */}
          <div className="bg-white p-4 rounded-2xl shadow col-span-3">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Upcoming Flights Schedule</h2>
            <PilotUpcomingFlights />
          </div>

          {/* Aircraft Maintenance Schedule */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Aircraft Maintenance Schedule</h2>
            <PilotAircraftMaintenance />
          </div>

          {/* Aircraft Down */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Aircraft Down</h2>
            <PilotAircraftDown />
          </div>

          {/* Notifications from Admin */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Notifications from Admin</h2>
            <PilotNotifications />
          </div>
        </div>
      </div>
    </div>
  );
}
