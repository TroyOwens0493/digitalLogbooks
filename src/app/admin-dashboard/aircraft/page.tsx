"use client";

import { useState } from "react";
import { 
  Plane, 
  Plus, 
  Edit, 
  Trash2, 
  Upload, 
  FileText, 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  Calendar,
  Settings
} from "lucide-react";

export default function AdminAircraft() {
  const [selectedAircraft, setSelectedAircraft] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'documents' | 'assignments' | 'schedule' | 'logbooks'>('overview');

  // Sample aircraft data
  const aircraft = [
    {
      tailNumber: "N12345",
      make: "Cessna",
      model: "172",
      year: 2018,
      status: "airworthy",
      lastInspection: "2024-12-15",
      nextInspection: "2025-06-15",
      totalTime: 2456.3,
      squawks: 2,
      assignedPilots: ["John Smith", "Sarah Wilson"],
      assignedMechanics: ["Bob Wilson"]
    },
    {
      tailNumber: "N67890",
      make: "Piper",
      model: "Cherokee",
      year: 2020,
      status: "maintenance",
      lastInspection: "2024-11-20",
      nextInspection: "2025-05-20",
      totalTime: 1234.7,
      squawks: 0,
      assignedPilots: ["Mike Johnson"],
      assignedMechanics: ["Dave Martinez", "Bob Wilson"]
    },
    {
      tailNumber: "N23456",
      make: "Cessna",
      model: "152",
      year: 2016,
      status: "grounded",
      lastInspection: "2024-10-30",
      nextInspection: "2025-04-30",
      totalTime: 3456.2,
      squawks: 1,
      assignedPilots: ["Tom Brown"],
      assignedMechanics: ["Steve Thompson"]
    }
  ];

  const documents = [
    { name: "Airworthiness Certificate", uploaded: "2024-01-15", expires: "2025-01-15", status: "valid" },
    { name: "Registration", uploaded: "2024-01-15", expires: "2027-01-15", status: "valid" },
    { name: "Weight & Balance", uploaded: "2024-06-10", expires: "N/A", status: "valid" },
    { name: "Insurance Certificate", uploaded: "2024-12-01", expires: "2025-12-01", status: "valid" },
    { name: "Annual Inspection", uploaded: "2024-12-15", expires: "2025-12-15", status: "valid" }
  ];

  const maintenanceSchedule = [
    { type: "Oil Change", dueDate: "2025-01-25", dueHours: 2465, status: "upcoming" },
    { type: "100-Hour Inspection", dueDate: "2025-02-15", dueHours: 2556, status: "upcoming" },
    { type: "Annual Inspection", dueDate: "2025-12-15", dueHours: null, status: "current" },
    { type: "VOR Check", dueDate: "2025-06-15", dueHours: null, status: "current" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'airworthy': return 'bg-green-100 text-green-800 border-green-200';
      case 'maintenance': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'grounded': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'airworthy': return <CheckCircle size={16} className="text-green-500" />;
      case 'maintenance': return <Settings size={16} className="text-orange-500" />;
      case 'grounded': return <AlertTriangle size={16} className="text-red-500" />;
      default: return <AlertTriangle size={16} className="text-gray-500" />;
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Plane size={16} /> },
    { id: 'documents', label: 'Documents', icon: <FileText size={16} /> },
    { id: 'assignments', label: 'Assignments', icon: <Users size={16} /> },
    { id: 'schedule', label: 'Schedule', icon: <Calendar size={16} /> },
    { id: 'logbooks', label: 'Logbooks', icon: <FileText size={16} /> }
  ];

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Aircraft Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus size={16} />
          Add Aircraft
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Aircraft List */}
        <div className="col-span-4 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Fleet Overview</h2>
          <div className="space-y-3">
            {aircraft.map((plane) => (
              <div
                key={plane.tailNumber}
                onClick={() => setSelectedAircraft(plane.tailNumber)}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedAircraft === plane.tailNumber
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-semibold text-lg">{plane.tailNumber}</div>
                    <div className="text-gray-600">{plane.year} {plane.make} {plane.model}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Edit size={14} />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded text-red-500">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
                
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm border ${getStatusColor(plane.status)}`}>
                  {getStatusIcon(plane.status)}
                  {plane.status.charAt(0).toUpperCase() + plane.status.slice(1)}
                </div>
                
                <div className="mt-3 text-sm text-gray-600">
                  <div>Total Time: {plane.totalTime}h</div>
                  <div>Squawks: {plane.squawks}</div>
                  <div>Next Inspection: {plane.nextInspection}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aircraft Details */}
        <div className="col-span-8 bg-white p-6 rounded-2xl shadow">
          {selectedAircraft ? (
            <>
              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as 'overview' | 'documents' | 'assignments' | 'schedule' | 'logbooks')}
                    className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Aircraft Information</h3>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-medium">Tail Number:</span> {selectedAircraft}</div>
                        <div><span className="font-medium">Make/Model:</span> {aircraft.find(a => a.tailNumber === selectedAircraft)?.make} {aircraft.find(a => a.tailNumber === selectedAircraft)?.model}</div>
                        <div><span className="font-medium">Year:</span> {aircraft.find(a => a.tailNumber === selectedAircraft)?.year}</div>
                        <div><span className="font-medium">Total Time:</span> {aircraft.find(a => a.tailNumber === selectedAircraft)?.totalTime}h</div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Status & Compliance</h3>
                      <div className="space-y-3">
                        {(() => {
                          const selectedAircraftData = aircraft.find(a => a.tailNumber === selectedAircraft);
                          const status = selectedAircraftData?.status || '';
                          return (
                            <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border ${getStatusColor(status)}`}>
                              {getStatusIcon(status)}
                              <span className="font-medium">
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                              </span>
                            </div>
                          );
                        })()}
                        <div className="text-sm">
                          <div>Last Inspection: {aircraft.find(a => a.tailNumber === selectedAircraft)?.lastInspection}</div>
                          <div>Next Inspection: {aircraft.find(a => a.tailNumber === selectedAircraft)?.nextInspection}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Current Squawks</h3>
                    {aircraft.find(a => a.tailNumber === selectedAircraft)?.squawks === 0 ? (
                      <p className="text-green-600">No active squawks</p>
                    ) : (
                      <div className="space-y-2">
                        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <div className="font-medium">Radio intermittent during taxi</div>
                          <div className="text-sm text-gray-600">Reported by John Pilot on 2025-01-15</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'documents' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Aircraft Documents</h3>
                    <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 flex items-center gap-2">
                      <Upload size={16} />
                      Upload Document
                    </button>
                  </div>
                  <div className="space-y-3">
                    {documents.map((doc, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText size={20} className="text-blue-500" />
                          <div>
                            <div className="font-medium">{doc.name}</div>
                            <div className="text-sm text-gray-600">
                              Uploaded: {doc.uploaded} | Expires: {doc.expires}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            doc.status === 'valid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {doc.status}
                          </span>
                          <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'assignments' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Assigned Pilots</h3>
                    <div className="space-y-2">
                      {aircraft.find(a => a.tailNumber === selectedAircraft)?.assignedPilots.map((pilot, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <Users size={16} className="text-blue-600" />
                            </div>
                            <span className="font-medium">{pilot}</span>
                          </div>
                          <button className="text-red-600 hover:text-red-800 text-sm">Remove</button>
                        </div>
                      ))}
                    </div>
                    <button className="mt-3 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200">
                      Assign Pilot
                    </button>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Assigned Mechanics</h3>
                    <div className="space-y-2">
                      {aircraft.find(a => a.tailNumber === selectedAircraft)?.assignedMechanics.map((mechanic, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                              <Settings size={16} className="text-orange-600" />
                            </div>
                            <span className="font-medium">{mechanic}</span>
                          </div>
                          <button className="text-red-600 hover:text-red-800 text-sm">Remove</button>
                        </div>
                      ))}
                    </div>
                    <button className="mt-3 bg-orange-100 text-orange-700 px-4 py-2 rounded-lg hover:bg-orange-200">
                      Assign Mechanic
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'schedule' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Maintenance Schedule</h3>
                  <div className="space-y-3">
                    {maintenanceSchedule.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium">{item.type}</div>
                          <div className="text-sm text-gray-600">
                            Due: {item.dueDate}
                            {item.dueHours && ` at ${item.dueHours}h`}
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm ${
                          item.status === 'upcoming' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {item.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'logbooks' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Digital Logbooks</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
                      <FileText size={32} className="mx-auto text-blue-600 mb-2" />
                      <div className="font-medium">Airframe Logbook</div>
                      <div className="text-sm text-gray-600">2,456.3 hours</div>
                      <button className="mt-2 text-blue-600 text-sm hover:underline">View Entries</button>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                      <FileText size={32} className="mx-auto text-green-600 mb-2" />
                      <div className="font-medium">Engine Logbook</div>
                      <div className="text-sm text-gray-600">1,234.7 hours</div>
                      <button className="mt-2 text-green-600 text-sm hover:underline">View Entries</button>
                    </div>
                    <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg text-center">
                      <FileText size={32} className="mx-auto text-purple-600 mb-2" />
                      <div className="font-medium">Propeller Logbook</div>
                      <div className="text-sm text-gray-600">1,234.7 hours</div>
                      <button className="mt-2 text-purple-600 text-sm hover:underline">View Entries</button>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center text-gray-500 py-12">
              <Plane size={48} className="mx-auto mb-4 opacity-50" />
              <p>Select an aircraft to view details</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}