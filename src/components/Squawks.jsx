// components/Squawks.jsx
import { AlertCircle, Plus, Filter, Search, Calendar, Clock, CheckCircle, X } from "lucide-react";

export default function Squawks() {
    // Sample squawks data
    const squawks = [
        {
            id: 1,
            aircraft: "N12345",
            description: "Radio static during transmission",
            priority: "Medium",
            status: "Open",
            reportedBy: "John Smith",
            dateReported: "2024-03-20",
            timeReported: "08:30",
        },
        {
            id: 2,
            aircraft: "N12345", 
            description: "Landing light not working",
            priority: "High",
            status: "In Progress",
            reportedBy: "Sarah Johnson",
            dateReported: "2024-03-19",
            timeReported: "14:15",
        },
        {
            id: 3,
            aircraft: "B67890",
            description: "Altimeter reads 100ft high",
            priority: "High", 
            status: "Open",
            reportedBy: "Mike Davis",
            dateReported: "2024-03-18",
            timeReported: "11:45",
        },
        {
            id: 4,
            aircraft: "C23456",
            description: "Seat adjustment mechanism loose",
            priority: "Low",
            status: "Resolved",
            reportedBy: "Emily Wilson",
            dateReported: "2024-03-15",
            timeReported: "16:20",
        },
    ];

    const getPriorityColor = (priority) => {
        switch (priority) {
            case "High": return "text-red-600 bg-red-100";
            case "Medium": return "text-yellow-600 bg-yellow-100";
            case "Low": return "text-green-600 bg-green-100";
            default: return "text-gray-600 bg-gray-100";
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "Open": return "text-red-600 bg-red-100";
            case "In Progress": return "text-blue-600 bg-blue-100";
            case "Resolved": return "text-green-600 bg-green-100";
            default: return "text-gray-600 bg-gray-100";
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case "Open": return <AlertCircle size={16} />;
            case "In Progress": return <Clock size={16} />;
            case "Resolved": return <CheckCircle size={16} />;
            default: return <AlertCircle size={16} />;
        }
    };

    return (
        <div className="p-6 flex-1">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">Aircraft Squawks</h1>
                <p className="text-gray-600">Manage and track aircraft maintenance issues</p>
            </div>

            {/* Action Bar */}
            <div className="bg-white p-4 rounded-2xl shadow mb-6">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex gap-3">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                            <Plus size={18} />
                            Report New Squawk
                        </button>
                        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200">
                            <Filter size={18} />
                            Filter
                        </button>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                        <Search size={18} className="text-gray-500" />
                        <input 
                            type="text" 
                            placeholder="Search squawks..." 
                            className="bg-transparent border-none outline-none text-sm w-48"
                        />
                    </div>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-700 mb-1">Total Squawks</h3>
                    <p className="text-2xl font-bold text-gray-900">{squawks.length}</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-700 mb-1">Open</h3>
                    <p className="text-2xl font-bold text-red-600">{squawks.filter(s => s.status === "Open").length}</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-700 mb-1">In Progress</h3>
                    <p className="text-2xl font-bold text-blue-600">{squawks.filter(s => s.status === "In Progress").length}</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-700 mb-1">Resolved</h3>
                    <p className="text-2xl font-bold text-green-600">{squawks.filter(s => s.status === "Resolved").length}</p>
                </div>
            </div>

            {/* Squawks List */}
            <div className="bg-white rounded-2xl shadow">
                <div className="p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold">All Squawks</h2>
                </div>
                <div className="divide-y divide-gray-200">
                    {squawks.map((squawk) => (
                        <div key={squawk.id} className="p-4 hover:bg-gray-50">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="font-semibold text-gray-900">#{squawk.id}</span>
                                        <span className="font-medium text-blue-600">{squawk.aircraft}</span>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(squawk.priority)}`}>
                                            {squawk.priority}
                                        </span>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(squawk.status)}`}>
                                            {getStatusIcon(squawk.status)}
                                            {squawk.status}
                                        </span>
                                    </div>
                                    <p className="text-gray-900 mb-2">{squawk.description}</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {squawk.dateReported}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} />
                                            {squawk.timeReported}
                                        </span>
                                        <span>Reported by: {squawk.reportedBy}</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                                    <button className="text-green-600 hover:text-green-800 text-sm">Resolve</button>
                                    <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}