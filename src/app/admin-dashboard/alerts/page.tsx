"use client";

import { AlertTriangle, Clock, Wrench, DollarSign } from "lucide-react";

export default function AdminAlerts() {
  // Sample data
  const inspectionsDue = [
    { aircraft: "N12345", type: "100-Hour Inspection", dueDate: "2025-01-25", status: "due", daysUntilDue: 3 },
    { aircraft: "N67890", type: "Annual Inspection", dueDate: "2025-01-20", status: "overdue", daysOverdue: 2 },
    { aircraft: "N23456", type: "Pitot-Static Check", dueDate: "2025-01-28", status: "due", daysUntilDue: 6 }
  ];

  const unresolvedSquawks = [
    { aircraft: "N12345", issue: "Radio intermittent", reportedDate: "2025-01-15", priority: "medium", reportedBy: "John Pilot" },
    { aircraft: "N78901", issue: "Landing light inoperative", reportedDate: "2025-01-18", priority: "low", reportedBy: "Jane Smith" },
    { aircraft: "N45678", issue: "Engine rough idle", reportedDate: "2025-01-10", priority: "high", reportedBy: "Mike Johnson" }
  ];

  const unassignedMaintenance = [
    { aircraft: "N67890", task: "Annual Inspection", dueDate: "2025-01-20", estimatedHours: 8 },
    { aircraft: "N45678", task: "Engine rough idle repair", dueDate: "ASAP", estimatedHours: 4 },
    { aircraft: "N23456", task: "Oil change", dueDate: "2025-01-22", estimatedHours: 1 }
  ];

  const overdueInvoices = [
    { customer: "Flight School ABC", amount: 2850.00, dueDate: "2024-12-15", daysOverdue: 28, services: "Maintenance & Training" },
    { customer: "Private Owner - John Doe", amount: 1200.00, dueDate: "2025-01-01", daysOverdue: 21, services: "Annual Inspection" },
    { customer: "Charter Service XYZ", amount: 4500.00, dueDate: "2025-01-10", daysOverdue: 12, services: "Monthly Service" }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'overdue' ? 'bg-red-50 border-red-200' : 'bg-yellow-50 border-yellow-200';
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Alerts & Notifications</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inspections Due & Overdue */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="text-orange-500" size={24} />
            <h2 className="text-xl font-semibold">Inspections Due & Overdue</h2>
          </div>
          <div className="space-y-3">
            {inspectionsDue.map((inspection, idx) => (
              <div key={idx} className={`p-4 rounded-lg border ${getStatusColor(inspection.status)}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold text-lg">{inspection.aircraft}</div>
                    <div className="text-gray-700">{inspection.type}</div>
                    <div className="text-sm text-gray-600">Due: {inspection.dueDate}</div>
                  </div>
                  <div className="text-right">
                    {inspection.status === 'overdue' ? (
                      <div className="text-red-600 font-semibold">
                        {inspection.daysOverdue} days overdue
                      </div>
                    ) : (
                      <div className="text-orange-600 font-semibold">
                        {inspection.daysUntilDue} days remaining
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unresolved Squawks */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-red-500" size={24} />
            <h2 className="text-xl font-semibold">Unresolved Squawks</h2>
          </div>
          <div className="space-y-3">
            {unresolvedSquawks.map((squawk, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-gray-50 border">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold">{squawk.aircraft}</div>
                    <div className="text-gray-700">{squawk.issue}</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(squawk.priority)}`}>
                    {squawk.priority.toUpperCase()}
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Reported by {squawk.reportedBy} on {squawk.reportedDate}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unassigned Maintenance */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="text-blue-500" size={24} />
            <h2 className="text-xl font-semibold">Unassigned Maintenance</h2>
          </div>
          <div className="space-y-3">
            {unassignedMaintenance.map((task, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold">{task.aircraft}</div>
                    <div className="text-gray-700">{task.task}</div>
                    <div className="text-sm text-gray-600">Due: {task.dueDate}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-blue-600 font-semibold">
                      ~{task.estimatedHours}h
                    </div>
                    <div className="text-xs text-blue-600">estimated</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overdue Invoices */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="text-green-500" size={24} />
            <h2 className="text-xl font-semibold">Overdue Invoices</h2>
          </div>
          <div className="space-y-3">
            {overdueInvoices.map((invoice, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-red-50 border border-red-200">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold">{invoice.customer}</div>
                    <div className="text-gray-700">{invoice.services}</div>
                    <div className="text-sm text-gray-600">Due: {invoice.dueDate}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-red-600 font-semibold text-lg">
                      ${invoice.amount.toLocaleString()}
                    </div>
                    <div className="text-red-600 text-sm">
                      {invoice.daysOverdue} days overdue
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Assign Maintenance Tasks
        </button>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
          Send Invoice Reminders
        </button>
        <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
          Schedule Inspections
        </button>
      </div>
    </>
  );
}