import { useState } from "react";
import { FileText, CheckCircle, Book, Wrench, Calendar, Plane } from "lucide-react";

export default function PilotAircraft() {
  const [selectedAircraft, setSelectedAircraft] = useState("N12345"); // Sample selected aircraft

  const aircraftList = [
    { tailNumber: "N12345", type: "Cessna 172" },
    { tailNumber: "N67890", type: "Piper Archer" },
    { tailNumber: "N23456", type: "Diamond DA40" },
  ];

  return (
    <div className="space-y-6">
      {/* Aircraft Selection */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
        <h3 className="text-md font-semibold mb-2">Select Aircraft</h3>
        <select
          value={selectedAircraft}
          onChange={(e) => setSelectedAircraft(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        >
          {aircraftList.map((aircraft) => (
            <option key={aircraft.tailNumber} value={aircraft.tailNumber}>
              {aircraft.tailNumber} - {aircraft.type}
            </option>
          ))}
        </select>
      </div>

      {/* Aircraft Profile & Documents */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
        <h3 className="text-md font-semibold mb-4">Aircraft Profile: {selectedAircraft}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2"><FileText size={16} /> Important Documents</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Airworthiness Certificate (View/Download)</li>
              <li>Registration (View/Download)</li>
              <li>Weight and Balance (View/Download)</li>
              <li>Operating Limitations (View/Download)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2"><CheckCircle size={16} /> FAA Compliance Status</h4>
            <p className="text-sm text-gray-700">Status for {selectedAircraft}: <span className="text-green-600 font-medium">Compliant</span></p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-2">
              <li>AD 2023-01-01 (Compliant)</li>
              <li>AD 2022-05-10 (Compliant)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Aircraft Logbooks */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
        <h3 className="text-md font-semibold mb-4 flex items-center gap-2"><Book size={16} /> Aircraft Logbooks</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div className="bg-white p-3 rounded-md shadow-sm hover:bg-gray-50 cursor-pointer">Engine Logbook (Digital)</div>
          <div className="bg-white p-3 rounded-md shadow-sm hover:bg-gray-50 cursor-pointer">Propeller Logbook (Digital)</div>
          <div className="bg-white p-3 rounded-md shadow-sm hover:bg-gray-50 cursor-pointer">Airframe Logbook (Digital)</div>
          <div className="bg-white p-3 rounded-md shadow-sm hover:bg-gray-50 cursor-pointer">AD Compliance Records</div>
          <div className="bg-white p-3 rounded-md shadow-sm hover:bg-gray-50 cursor-pointer">Required Forms & Supplements</div>
        </div>
      </div>

      {/* Aircraft Maintenance Schedule */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
        <h3 className="text-md font-semibold mb-4 flex items-center gap-2"><Wrench size={16} /> Aircraft Maintenance Schedule</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><strong>100-Hour Inspection:</strong> Due in 25 hours (N12345)</li>
          <li><strong>Annual Inspection:</strong> Due October 2025 (N12345)</li>
          <li><strong>50-Hour Inspection:</strong> Due in 10 hours (N67890)</li>
        </ul>
        <button className="mt-3 text-blue-500 text-sm hover:underline">View Full Maintenance Log</button>
      </div>

      {/* Aircraft Status & Schedule */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
        <h3 className="text-md font-semibold mb-4 flex items-center gap-2"><Plane size={16} /> Aircraft Status & Schedule</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
            <span className="font-medium">N12345</span>
            <span className="text-sm text-green-600">Available</span>
            <button className="text-blue-500 text-sm hover:underline">View Schedule</button>
          </div>
          <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
            <span className="font-medium">N67890</span>
            <span className="text-sm text-yellow-600">In Use (until 14:00)</span>
            <button className="text-blue-500 text-sm hover:underline">View Schedule</button>
          </div>
          <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
            <span className="font-medium">N23456</span>
            <span className="text-sm text-red-600">Maintenance</span>
            <button className="text-blue-500 text-sm hover:underline">View Schedule</button>
          </div>
        </div>
      </div>
    </div>
  );
}