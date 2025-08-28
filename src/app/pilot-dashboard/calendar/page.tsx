"use client";

import PilotCalendar from "../../../components/PilotCalendar";
import PilotSidebar from "../../../components/PilotSidebar";

export default function PilotCalendarPage() {
  return (
    <div className="flex">
      <PilotSidebar />
      <div className="flex-1 p-6 bg-white overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Calendar</h1>
        <PilotCalendar />
      </div>
    </div>
  );
}
