// components/Squawks.jsx
import { AlertCircle, Clock, CheckCircle, XCircle, AlertTriangle } from "lucide-react";

export default function Squawks() {
    // Sample squawks data for the demo
    const squawksList = [
        {
            id: 1,
            aircraft: "N12345",
            dateReported: "2024-03-20",
            reportedBy: "John Doe",
            description: "Engine running rough during taxi",
            priority: "High",
            status: "Open",
            category: "Engine",
            mechanic: "Mike Johnson",
            estimatedRepairTime: "4 hours"
        },
        {
            id: 2,
            aircraft: "C23456", 
            dateReported: "2024-03-19",
            reportedBy: "Jane Smith",
            description: "Left navigation light intermittent",
            priority: "Medium",
            status: "In Progress",
            category: "Electrical",
            mechanic: "Sarah Wilson",
            estimatedRepairTime: "2 hours"
        },
        {
            id: 3,
            aircraft: "N12345",
            dateReported: "2024-03-18",
            reportedBy: "Tom Brown",
            description: "Minor oil leak near engine compartment",
            priority: "Medium", 
            status: "Resolved",
            category: "Engine",
            mechanic: "Mike Johnson",
            estimatedRepairTime: "1 hour"
        },
        {
            id: 4,
            aircraft: "B67890",
            dateReported: "2024-03-17",
            reportedBy: "Lisa Davis",
            description: "Radio static on COM1 frequency",
            priority: "Low",
            status: "Open",
            category: "Avionics",
            mechanic: "Tom Wilson",
            estimatedRepairTime: "3 hours"
        },
        {
            id: 5,
            aircraft: "A12345",
            dateReported: "2024-03-16",
            reportedBy: "Mark Thompson",
            description: "Flap indicator showing incorrect position",
            priority: "High",
            status: "In Progress",
            category: "Flight Controls",
            mechanic: "Sarah Wilson",
            estimatedRepairTime: "6 hours"
        },
        {
            id: 6,
            aircraft: "C23456",
            dateReported: "2024-03-15",
            reportedBy: "Amy Roberts",
            description: "Tire pressure low on left main gear",
            priority: "Low",
            status: "Resolved",
            category: "Landing Gear",
            mechanic: "Mike Johnson",
            estimatedRepairTime: "30 minutes"
        }
    ];

    const getPriorityIcon = (priority) => {
        switch (priority) {
            case "High":
                return <AlertTriangle className="text-red-600" size={16} />;
            case "Medium":
                return <AlertCircle className="text-orange-600" size={16} />;
            case "Low":
                return <Clock className="text-yellow-600" size={16} />;
            default:
                return <AlertCircle className="text-gray-600" size={16} />;
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case "Open":
                return <XCircle className="text-red-600" size={16} />;
            case "In Progress":
                return <Clock className="text-orange-600" size={16} />;
            case "Resolved":
                return <CheckCircle className="text-green-600" size={16} />;
            default:
                return <AlertCircle className="text-gray-600" size={16} />;
        }
    };

    const getStatusBadgeClass = (status) => {
        switch (status) {
            case "Open":
                return "bg-red-100 text-red-800";
            case "In Progress":
                return "bg-orange-100 text-orange-800";
            case "Resolved":
                return "bg-green-100 text-green-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    const getPriorityBadgeClass = (priority) => {
        switch (priority) {
            case "High":
                return "bg-red-100 text-red-800";
            case "Medium":
                return "bg-orange-100 text-orange-800";
            case "Low":
                return "bg-yellow-100 text-yellow-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="p-6 flex-1 overflow-auto">
            <h1 className="text-2xl font-bold mb-4">Aircraft Squawks</h1>
            
            {/* Squawks Summary Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">Total Squawks</h3>
                    <p className="text-2xl font-bold">{squawksList.length}</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">Open</h3>
                    <p className="text-2xl font-bold text-red-600">
                        {squawksList.filter(s => s.status === "Open").length}
                    </p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">In Progress</h3>
                    <p className="text-2xl font-bold text-orange-600">
                        {squawksList.filter(s => s.status === "In Progress").length}
                    </p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">Resolved</h3>
                    <p className="text-2xl font-bold text-green-600">
                        {squawksList.filter(s => s.status === "Resolved").length}
                    </p>
                </div>
            </div>

            {/* Squawks List */}
            <div className="bg-white rounded-2xl shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Squawks</h2>
                <div className="space-y-4">
                    {squawksList.map((squawk) => (
                        <div key={squawk.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="bg-red-100 p-2 rounded-lg">
                                        <AlertCircle className="text-red-600" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{squawk.aircraft}</h3>
                                        <p className="text-sm text-gray-600">Reported by {squawk.reportedBy} on {squawk.dateReported}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityBadgeClass(squawk.priority)}`}>
                                        {squawk.priority} Priority
                                    </span>
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadgeClass(squawk.status)}`}>
                                        {squawk.status}
                                    </span>
                                </div>
                            </div>
                            <div className="mb-3">
                                <p className="text-gray-800 mb-2">{squawk.description}</p>
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <span className="text-gray-600">Category:</span>
                                        <span className="ml-1 font-medium">{squawk.category}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Assigned to:</span>
                                        <span className="ml-1 font-medium">{squawk.mechanic}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Est. Repair Time:</span>
                                        <span className="ml-1 font-medium">{squawk.estimatedRepairTime}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                {getStatusIcon(squawk.status)}
                                <span className="text-gray-600">Status: {squawk.status}</span>
                                {getPriorityIcon(squawk.priority)}
                                <span className="text-gray-600">Priority: {squawk.priority}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}