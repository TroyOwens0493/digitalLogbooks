"use client";

import PilotSquawks from "../../../components/PilotSquawks";
import PilotSidebar from "../../../components/PilotSidebar";

export default function PilotSquawksPage() {
  return (
    <div className="flex">
      <PilotSidebar />
      <div className="flex-1 p-6 bg-white">
        <h1 className="text-2xl font-bold mb-4">Squawks</h1>
        <PilotSquawks />
      </div>
    </div>
  );
}
