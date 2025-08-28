export default function PilotAircraftMaintenance() {
  return (
    <div className="text-sm text-gray-700">
      <p className="text-sm font-semibold">N12345</p>
      <p className="text-green-600 font-semibold">Airworthy</p>
      <p className="text-sm text-gray-700 mt-2">Next Inspection Due:</p>
      <p className="text-red-500 font-bold">3 Days</p>
      <button className="mt-3 text-blue-500 text-sm hover:underline">
        View Maintenance Log
      </button>
    </div>
  );
}