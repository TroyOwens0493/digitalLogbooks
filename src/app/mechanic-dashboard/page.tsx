"use client";

import MechanicFAACompliance from "../../components/MechanicFAACompliance";
import MechanicUpcomingMaintenance from "../../components/MechanicUpcomingMaintenance";
import MechanicCurrentSquawks from "../../components/MechanicCurrentSquawks";
import MechanicMaintenanceSchedule from "../../components/MechanicMaintenanceSchedule";
import MechanicNotifications from "../../components/MechanicNotifications";
import MechanicTaskAssignment from "../../components/MechanicTaskAssignment";
import MechanicSidebar from "../../components/MechanicSidebar";

export default function MechanicDashboard() {
  return (
    <div className="flex h-screen">
      <MechanicSidebar />
      <div className="p-6 flex-1 bg-white overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Mechanic Dashboard</h1>

        <div className="grid grid-cols-3 gap-4">
          {/* Aircraft not in FAA compliance */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Aircraft Not in FAA Compliance</h2>
            <MechanicFAACompliance />
          </div>

          {/* Upcoming Maintenance Schedule */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Upcoming Maintenance Schedule</h2>
            <MechanicUpcomingMaintenance />
          </div>

          {/* Current Squawks / Aircraft Status */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Current Squawks / Aircraft Status</h2>
            <MechanicCurrentSquawks />
          </div>

          {/* Aircraft Maintenance Schedule (Detailed) */}
          <div className="bg-white p-4 rounded-2xl shadow col-span-3">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Aircraft Maintenance Schedule</h2>
            <MechanicMaintenanceSchedule />
          </div>

          {/* Notifications from Admin */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Notifications from Admin</h2>
            <MechanicNotifications />
          </div>

          {/* Task Assignment */}
          <div className="bg-white p-4 rounded-2xl shadow col-span-2">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Task Assignment</h2>
            <MechanicTaskAssignment />
          </div>
        </div>
      </div>
    </div>
  );
}
