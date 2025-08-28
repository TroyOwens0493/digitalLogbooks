"use client";

import { useState } from "react";
import { 
  BarChart3, 
  Download, 
  Clock, 
  Plane, 
  Wrench, 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  FileText 
} from "lucide-react";

export default function AdminReports() {
  const [selectedReport, setSelectedReport] = useState<'status' | 'utilization' | 'performance' | 'compliance' | 'audit'>('status');

  // Sample data
  const aircraftStatus = {
    total: 12,
    airworthy: 9,
    grounded: 2,
    inMaintenance: 1
  };

  const squawkData = [
    { type: "Radio Issues", count: 5, avgFixTime: 2.5 },
    { type: "Landing Light", count: 8, avgFixTime: 1.2 },
    { type: "Engine", count: 3, avgFixTime: 8.5 },
    { type: "Avionics", count: 6, avgFixTime: 4.2 },
    { type: "Electrical", count: 4, avgFixTime: 3.8 }
  ];

  const utilizationData = [
    { aircraft: "N12345", hours: 45.2, utilization: "High" },
    { aircraft: "N67890", hours: 38.5, utilization: "High" },
    { aircraft: "N23456", hours: 22.1, utilization: "Medium" },
    { aircraft: "N78901", hours: 18.7, utilization: "Medium" },
    { aircraft: "N45678", hours: 8.3, utilization: "Low" },
    { aircraft: "N89012", hours: 5.2, utilization: "Low" }
  ];

  const instructorData = [
    { name: "John Smith", hours: 65.3, students: 5, rating: 4.8 },
    { name: "Sarah Wilson", hours: 58.7, students: 4, rating: 4.9 },
    { name: "Mike Johnson", hours: 51.2, students: 6, rating: 4.6 },
    { name: "Amy Chen", hours: 42.8, students: 3, rating: 4.7 }
  ];

  const studentData = [
    { name: "Tom Brown", hours: 35.2, stage: "Private Pilot", progress: 78 },
    { name: "Lisa Davis", hours: 28.5, stage: "Private Pilot", progress: 65 },
    { name: "Rob Green", hours: 45.8, stage: "Instrument", progress: 92 },
    { name: "Emma Wilson", hours: 22.1, stage: "Private Pilot", progress: 45 }
  ];

  const complianceData = [
    { aircraft: "N12345", annualDue: "2025-12-15", vorCheck: "2025-06-15", pitotStatic: "2025-06-15", status: "Compliant" },
    { aircraft: "N67890", annualDue: "2025-11-20", vorCheck: "2025-05-20", pitotStatic: "2025-05-20", status: "Compliant" },
    { aircraft: "N23456", annualDue: "2024-12-30", vorCheck: "2025-04-30", pitotStatic: "2025-04-30", status: "Overdue" },
    { aircraft: "N78901", annualDue: "2025-08-15", vorCheck: "2025-02-15", pitotStatic: "2025-02-15", status: "Compliant" }
  ];

  const auditTrail = [
    { timestamp: "2025-01-22 14:30", user: "Admin User", action: "Modified aircraft status", details: "N12345 marked as airworthy" },
    { timestamp: "2025-01-22 10:15", user: "Bob Wilson", action: "Updated maintenance record", details: "Completed oil change on N67890" },
    { timestamp: "2025-01-21 16:45", user: "John Smith", action: "Added flight time", details: "Logged 2.3 hours for student Tom Brown" },
    { timestamp: "2025-01-21 09:20", user: "Admin User", action: "Created user account", details: "New pilot account for Jane Doe" },
    { timestamp: "2025-01-20 13:55", user: "Sarah Wilson", action: "Modified squawk status", details: "Resolved radio issue on N23456" }
  ];

  const reportTabs = [
    { id: 'status', label: 'Aircraft Status', icon: <Plane size={16} /> },
    { id: 'utilization', label: 'Utilization', icon: <BarChart3 size={16} /> },
    { id: 'performance', label: 'Performance', icon: <TrendingUp size={16} /> },
    { id: 'compliance', label: 'Compliance', icon: <CheckCircle size={16} /> },
    { id: 'audit', label: 'Audit Trail', icon: <FileText size={16} /> }
  ];

  const getUtilizationColor = (utilization: string) => {
    switch (utilization) {
      case 'High': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getComplianceColor = (status: string) => {
    return status === 'Compliant' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Reports & Analytics</h1>
        <div className="flex gap-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
            <Download size={16} />
            Export Current Report
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Generate Custom Report
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-2xl shadow">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="text-green-500" size={20} />
            <h3 className="text-lg font-semibold">Airworthy</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">{aircraftStatus.airworthy}</p>
          <p className="text-sm text-gray-600">of {aircraftStatus.total} aircraft</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="text-red-500" size={20} />
            <h3 className="text-lg font-semibold">Grounded</h3>
          </div>
          <p className="text-3xl font-bold text-red-600">{aircraftStatus.grounded}</p>
          <p className="text-sm text-gray-600">requiring attention</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <div className="flex items-center gap-3 mb-2">
            <Wrench className="text-orange-500" size={20} />
            <h3 className="text-lg font-semibold">In Maintenance</h3>
          </div>
          <p className="text-3xl font-bold text-orange-600">{aircraftStatus.inMaintenance}</p>
          <p className="text-sm text-gray-600">scheduled work</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="text-blue-500" size={20} />
            <h3 className="text-lg font-semibold">Avg Fix Time</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600">3.2</p>
          <p className="text-sm text-gray-600">hours per squawk</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6">
          {reportTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedReport(tab.id as 'status' | 'utilization' | 'performance' | 'compliance' | 'audit')}
              className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-colors ${
                selectedReport === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Report Content */}
        {selectedReport === 'status' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Current Aircraft Status Report</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Fleet Status Distribution</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span>Airworthy Aircraft</span>
                    <span className="font-bold text-green-600">{aircraftStatus.airworthy}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span>Grounded Aircraft</span>
                    <span className="font-bold text-red-600">{aircraftStatus.grounded}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span>In Maintenance</span>
                    <span className="font-bold text-orange-600">{aircraftStatus.inMaintenance}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Average Time to Fix by Squawk Type</h4>
                <div className="space-y-2">
                  {squawkData.map((squawk, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium">{squawk.type}</div>
                        <div className="text-sm text-gray-600">{squawk.count} occurrences</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{squawk.avgFixTime}h</div>
                        <div className="text-sm text-gray-600">avg fix time</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedReport === 'utilization' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Aircraft Utilization Report</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Aircraft</th>
                    <th className="text-left py-3 px-2">Flight Hours (This Month)</th>
                    <th className="text-left py-3 px-2">Utilization Level</th>
                    <th className="text-left py-3 px-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {utilizationData.map((aircraft, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="py-3 px-2 font-medium">{aircraft.aircraft}</td>
                      <td className="py-3 px-2">{aircraft.hours}h</td>
                      <td className="py-3 px-2">
                        <span className={`px-3 py-1 rounded-full text-sm ${getUtilizationColor(aircraft.utilization)}`}>
                          {aircraft.utilization}
                        </span>
                      </td>
                      <td className="py-3 px-2">
                        {aircraft.utilization === 'Low' && (
                          <span className="text-orange-600">Consider scheduling more flights</span>
                        )}
                        {aircraft.utilization === 'Medium' && (
                          <span className="text-blue-600">Good utilization</span>
                        )}
                        {aircraft.utilization === 'High' && (
                          <span className="text-green-600">Excellent utilization</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedReport === 'performance' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Performance Metrics</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Instructor Performance (This Month)</h4>
                <div className="space-y-3">
                  {instructorData.map((instructor, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-medium">{instructor.name}</div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{instructor.hours}h</div>
                          <div className="text-xs text-gray-600">flight time</div>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{instructor.students} students</span>
                        <span>⭐ {instructor.rating}/5.0</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Student Progress (This Month)</h4>
                <div className="space-y-3">
                  {studentData.map((student, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-medium">{student.name}</div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{student.hours}h</div>
                          <div className="text-xs text-gray-600">total time</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{student.stage}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${student.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-600">{student.progress}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedReport === 'compliance' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">FAA Compliance Report</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Aircraft</th>
                    <th className="text-left py-3 px-2">Annual Due</th>
                    <th className="text-left py-3 px-2">VOR Check</th>
                    <th className="text-left py-3 px-2">Pitot Static</th>
                    <th className="text-left py-3 px-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {complianceData.map((aircraft, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="py-3 px-2 font-medium">{aircraft.aircraft}</td>
                      <td className="py-3 px-2">{aircraft.annualDue}</td>
                      <td className="py-3 px-2">{aircraft.vorCheck}</td>
                      <td className="py-3 px-2">{aircraft.pitotStatic}</td>
                      <td className="py-3 px-2">
                        <span className={`px-3 py-1 rounded-full text-sm ${getComplianceColor(aircraft.status)}`}>
                          {aircraft.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedReport === 'audit' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Log Edits & Audit Trail</h3>
            
            <div className="space-y-3">
              {auditTrail.map((entry, idx) => (
                <div key={idx} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium">{entry.action}</div>
                    <div className="text-sm text-gray-600">{entry.timestamp}</div>
                  </div>
                  <div className="text-sm text-gray-700 mb-1">{entry.details}</div>
                  <div className="text-xs text-gray-500">Modified by: {entry.user}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}