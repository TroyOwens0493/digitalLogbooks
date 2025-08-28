import { AlertCircle, Wrench } from "lucide-react";

export default function MechanicAlerts() {
  return (
    <div className="space-y-6">
      {/* Inspections Due & Overdue */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
        <h3 className="text-md font-semibold mb-4 flex items-center gap-2"><Wrench size={16} /> Inspections Due & Overdue</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><strong>N12345:</strong> 100-hour inspection (Due in 5 hours)</li>
          <li><strong>N67890:</strong> Annual inspection (Overdue by 10 days)</li>
          <li><strong>N23456:</strong> 50-hour inspection (Due in 20 hours)</li>
        </ul>
      </div>

      {/* Unresolved Squawks */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
        <h3 className="text-md font-semibold mb-4 flex items-center gap-2"><AlertCircle size={16} /> Unresolved Squawks</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><strong>N12345:</strong> Engine oil leak (Reported: 2025-08-26)</li>
          <li><strong>N67890:</strong> Landing gear indicator light faulty (Reported: 2025-08-25)</li>
        </ul>
      </div>
    </div>
  );
}