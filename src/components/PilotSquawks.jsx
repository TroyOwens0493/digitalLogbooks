import { useState } from "react";

export default function PilotSquawks() {
  const [aircraftTailNumber, setAircraftTailNumber] = useState("");
  const [issueDescription, setIssueDescription] = useState("");

  const handleReportSquawk = (e) => {
    e.preventDefault();
    // Logic to send squawk to admin/mechanic
    console.log("Reporting Squawk:", { aircraftTailNumber, issueDescription });
    alert("Squawk Reported! (Sent to admin/mechanic)");
    setAircraftTailNumber("");
    setIssueDescription("");
  };

  return (
    <div className="space-y-6">
      {/* Report Squawk Form */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
        <h3 className="text-md font-semibold mb-4">Report Squawk</h3>
        <form onSubmit={handleReportSquawk} className="space-y-3">
          <div>
            <label htmlFor="aircraftTailNumber" className="block text-sm font-medium text-gray-700">Aircraft Tail Number</label>
            <input type="text" id="aircraftTailNumber" value={aircraftTailNumber} onChange={(e) => setAircraftTailNumber(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="N12345" required />
          </div>
          <div>
            <label htmlFor="issueDescription" className="block text-sm font-medium text-gray-700">Issue Description</label>
            <textarea id="issueDescription" value={issueDescription} onChange={(e) => setIssueDescription(e.target.value)} rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required></textarea>
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Report Squawk</button>
        </form>
      </div>

      {/* Current Squawks */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
        <h3 className="text-md font-semibold mb-4">Current Squawks</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><strong>N12345</strong> - Engine oil leak (Reported: 2025-08-26)</li>
          <li><strong>N67890</strong> - Landing gear indicator light faulty (Reported: 2025-08-25)</li>
          <li><strong>N23456</strong> - Flat tire (Reported: 2025-08-24)</li>
        </ul>
      </div>
    </div>
  );
}