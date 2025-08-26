// components/Maintenance.jsx
import { AlertCircle, CheckCircle, Clock, Wrench, Calendar, FileText } from "lucide-react";

export default function Maintenance() {
    const maintenanceItems = [
        {
            id: 1,
            aircraft: "N12345",
            type: "100-Hour Inspection",
            status: "Due",
            dueDate: "2024-03-25",
            hours: "2,487.3",
            priority: "high"
        },
        {
            id: 2,
            aircraft: "N67890",
            type: "Annual Inspection",
            status: "In Progress",
            dueDate: "2024-04-15",
            hours: "1,356.8",
            priority: "medium"
        },
        {
            id: 3,
            aircraft: "N23456",
            type: "Oil Change",
            status: "Completed",
            dueDate: "2024-03-20",
            hours: "892.1",
            priority: "low"
        }
    ];

    const workOrders = [
        {
            id: "WO-001",
            aircraft: "N12345",
            description: "Replace left main tire",
            assignedTo: "Mike Johnson",
            status: "In Progress",
            createdDate: "2024-03-22"
        },
        {
            id: "WO-002",
            aircraft: "N67890",
            description: "Annual inspection checklist",
            assignedTo: "Sarah Wilson",
            status: "In Progress",
            createdDate: "2024-03-20"
        },
        {
            id: "WO-003",
            aircraft: "N23456",
            description: "Engine oil and filter change",
            assignedTo: "Tom Davis",
            status: "Completed",
            createdDate: "2024-03-18"
        }
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case "Due":
                return <AlertCircle size={18} className="text-red-500" />;
            case "In Progress":
                return <Clock size={18} className="text-yellow-500" />;
            case "Completed":
                return <CheckCircle size={18} className="text-green-500" />;
            default:
                return <Clock size={18} className="text-gray-500" />;
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case "high":
                return "bg-red-100 text-red-800";
            case "medium":
                return "bg-yellow-100 text-yellow-800";
            case "low":
                return "bg-green-100 text-green-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="p-6 flex-1">
            <h1 className="text-2xl font-bold mb-6">Maintenance Dashboard</h1>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-2xl shadow">
                    <div className="flex items-center gap-2">
                        <AlertCircle size={20} className="text-red-500" />
                        <span className="text-sm text-gray-600">Overdue</span>
                    </div>
                    <p className="text-2xl font-bold text-red-500">1</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <div className="flex items-center gap-2">
                        <Clock size={20} className="text-yellow-500" />
                        <span className="text-sm text-gray-600">In Progress</span>
                    </div>
                    <p className="text-2xl font-bold text-yellow-500">2</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <div className="flex items-center gap-2">
                        <CheckCircle size={20} className="text-green-500" />
                        <span className="text-sm text-gray-600">Completed (30d)</span>
                    </div>
                    <p className="text-2xl font-bold text-green-500">8</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <div className="flex items-center gap-2">
                        <Wrench size={20} className="text-blue-500" />
                        <span className="text-sm text-gray-600">Total Aircraft</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-500">12</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {/* Scheduled Maintenance */}
                <div className="bg-white p-4 rounded-2xl shadow">
                    <div className="flex items-center gap-2 mb-4">
                        <Calendar size={20} />
                        <h2 className="text-lg font-semibold">Scheduled Maintenance</h2>
                    </div>
                    <div className="space-y-3">
                        {maintenanceItems.map((item) => (
                            <div key={item.id} className="p-3 bg-gray-50 rounded-lg border">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        {getStatusIcon(item.status)}
                                        <span className="font-semibold">{item.aircraft}</span>
                                        <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(item.priority)}`}>
                                            {item.priority}
                                        </span>
                                    </div>
                                    <span className="text-sm text-gray-600">{item.dueDate}</span>
                                </div>
                                <p className="text-sm text-gray-700 mb-1">{item.type}</p>
                                <p className="text-xs text-gray-500">Hours: {item.hours}</p>
                            </div>
                        ))}
                    </div>
                    <button className="mt-4 text-blue-500 text-sm font-medium">View All Maintenance</button>
                </div>

                {/* Active Work Orders */}
                <div className="bg-white p-4 rounded-2xl shadow">
                    <div className="flex items-center gap-2 mb-4">
                        <FileText size={20} />
                        <h2 className="text-lg font-semibold">Active Work Orders</h2>
                    </div>
                    <div className="space-y-3">
                        {workOrders.map((order) => (
                            <div key={order.id} className="p-3 bg-gray-50 rounded-lg border">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        {getStatusIcon(order.status)}
                                        <span className="font-semibold">{order.id}</span>
                                    </div>
                                    <span className="text-sm text-gray-600">{order.createdDate}</span>
                                </div>
                                <p className="text-sm text-gray-700 mb-1">{order.description}</p>
                                <div className="flex justify-between text-xs text-gray-500">
                                    <span>Aircraft: {order.aircraft}</span>
                                    <span>Assigned: {order.assignedTo}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="mt-4 text-blue-500 text-sm font-medium">Create New Work Order</button>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 bg-white p-4 rounded-2xl shadow">
                <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                <div className="flex gap-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        Schedule Inspection
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                        Log Maintenance
                    </button>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
                        Generate Report
                    </button>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                        View History
                    </button>
                </div>
            </div>
        </div>
    );
}