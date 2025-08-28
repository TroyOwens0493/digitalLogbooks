import { AlertCircle } from "lucide-react";

export default function PilotAircraftDown() {
  return (
    <div className="text-sm text-gray-700">
      <p className="text-sm font-semibold">Aircraft Currently Down:</p>
      <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-lg text-sm mt-2">
        <AlertCircle size={18} />
        N12345 - Engine Squawk
      </div>
      <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-lg text-sm mt-2">
        <AlertCircle size={18} />
        N67890 - Scheduled Maintenance
      </div>
      <button className="mt-3 text-blue-500 text-sm hover:underline">
        View All Down Aircraft
      </button>
    </div>
  );
}