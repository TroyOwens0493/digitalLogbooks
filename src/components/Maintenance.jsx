// components/Maintenance.jsx
import { Wrench, Calendar, Clock, CheckCircle, AlertCircle, User, Plane } from "lucide-react";

export default function Maintenance() {
    // Sample maintenance data for the demo
    const maintenanceItems = [
        {
            id: 1,
            aircraft: "N12345",
            workOrder: "WO-2024-001",
            type: "Annual Inspection",
            scheduledDate: "2024-04-15",
            startDate: "2024-04-14",
            estimatedCompletion: "2024-04-16",
            status: "In Progress",
            priority: "High",
            mechanic: "Mike Johnson",
            description: "Annual inspection as required by FAR 91.409",
            estimatedHours: "16 hours",
            location: "Hangar A-2"
        },
        {
            id: 2,
            aircraft: "A12345",
            workOrder: "WO-2024-002",
            type: "100-Hour Inspection",
            scheduledDate: "2024-03-28",
            startDate: "2024-03-27",
            estimatedCompletion: "2024-03-28",
            status: "Scheduled",
            priority: "Medium",
            mechanic: "Sarah Wilson",
            description: "100-hour inspection per FAR 91.409",
            estimatedHours: "8 hours",
            location: "Hangar B-1"
        },
        {
            id: 3,
            aircraft: "C23456",
            workOrder: "WO-2024-003", 
            type: "Engine Repair",
            scheduledDate: "2024-03-25",
            startDate: "2024-03-25",
            estimatedCompletion: "2024-03-26",
            status: "In Progress",
            priority: "High",
            mechanic: "Tom Wilson",
            description: "Engine rough idle repair - replace ignition harness",
            estimatedHours: "6 hours",
            location: "Maintenance Bay 1"
        },
        {
            id: 4,
            aircraft: "B67890",
            workOrder: "WO-2024-004",
            type: "Radio Repair",
            scheduledDate: "2024-03-22",
            startDate: "2024-03-21",
            estimatedCompletion: "2024-03-22",
            status: "Completed",
            priority: "Low",
            mechanic: "Sarah Wilson",
            description: "COM1 radio static issue - replace antenna",
            estimatedHours: "3 hours",
            location: "Avionics Shop"
        },
        {
            id: 5,
            aircraft: "N12345",
            workOrder: "WO-2024-005",
            type: "Oil Change",
            scheduledDate: "2024-04-01",
            startDate: null,
            estimatedCompletion: "2024-04-01",
            status: "Scheduled",
            priority: "Medium",
            mechanic: "Mike Johnson",
            description: "50-hour oil change and filter replacement",
            estimatedHours: "2 hours",
            location: "Hangar A-2"
        }
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case "Completed":
                return <CheckCircle className="text-green-600" size={16} />;
            case "In Progress":
                return <Wrench className="text-blue-600" size={16} />;
            case "Scheduled":
                return <Calendar className="text-orange-600" size={16} />;
            default:
                return <AlertCircle className="text-gray-600" size={16} />;
        }
    };

    const getPriorityIcon = (priority) => {
        switch (priority) {
            case "High":
                return <AlertCircle className="text-red-600" size={16} />;
            case "Medium":
                return <Clock className="text-orange-600" size={16} />;
            case "Low":
                return <Clock className="text-yellow-600" size={16} />;
            default:
                return <Clock className="text-gray-600" size={16} />;
        }
    };

    return (
        <div className="p-6 flex-1">
            <h1 className="text-2xl font-bold mb-4">Maintenance</h1>
            
            {/* Maintenance Summary Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">Total Work Orders</h3>
                    <p className="text-2xl font-bold">{maintenanceItems.length}</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">In Progress</h3>
                    <p className="text-2xl font-bold text-blue-600">
                        {maintenanceItems.filter(item => item.status === "In Progress").length}
                    </p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">Scheduled</h3>
                    <p className="text-2xl font-bold text-orange-600">
                        {maintenanceItems.filter(item => item.status === "Scheduled").length}
                    </p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">Completed This Month</h3>
                    <p className="text-2xl font-bold text-green-600">
                        {maintenanceItems.filter(item => item.status === "Completed").length}
                    </p>
                </div>
            </div>

            {/* Maintenance Items List */}
            <div className="bg-white rounded-2xl shadow p-6">
                <h2 className="text-lg font-semibold mb-4">Work Orders</h2>
                <div className="space-y-4">
                    {maintenanceItems.map((item) => (
                        <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h3 className="text-lg font-semibold">{item.workOrder}</h3>
                                    <p className="text-gray-600">{item.type}</p>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center">
                                        <Plane size={16} className="text-blue-500 mr-1" />
                                        <span className="font-semibold">{item.aircraft}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-gray-700 mb-3">{item.description}</p>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div className="flex items-center">
                                    <Calendar size={16} className="text-gray-500 mr-1" />
                                    <div>
                                        <span className="text-gray-600">Scheduled: </span>
                                        <span className="font-medium">{item.scheduledDate}</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <User size={16} className="text-gray-500 mr-1" />
                                    <div>
                                        <span className="text-gray-600">Mechanic: </span>
                                        <span className="font-medium">{item.mechanic}</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Clock size={16} className="text-gray-500 mr-1" />
                                    <div>
                                        <span className="text-gray-600">Est. Time: </span>
                                        <span className="font-medium">{item.estimatedHours}</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-600">Location: </span>
                                    <span className="font-medium ml-1">{item.location}</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        {getStatusIcon(item.status)}
                                        <span className="text-sm text-gray-600">Status: {item.status}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {getPriorityIcon(item.priority)}
                                        <span className="text-sm text-gray-600">Priority: {item.priority}</span>
                                    </div>
                                </div>
                                <button className="text-blue-500 text-sm hover:underline">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}