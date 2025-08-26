// components/Reports.jsx
import { FileText, Download, Calendar, Plane, Wrench, Clock, BarChart3, TrendingUp } from "lucide-react";

export default function Reports() {
    // Sample reports data for the demo
    const reportsList = [
        {
            id: 1,
            name: "Flight Hours Summary",
            description: "Monthly and yearly flight hours breakdown by aircraft and pilot",
            type: "Flight Operations",
            lastGenerated: "2024-03-20",
            size: "2.4 MB",
            format: "PDF"
        },
        {
            id: 2,
            name: "Aircraft Utilization Report",
            description: "Aircraft usage statistics and efficiency metrics",
            type: "Aircraft Management",
            lastGenerated: "2024-03-19",
            size: "1.8 MB",
            format: "Excel"
        },
        {
            id: 3,
            name: "Maintenance Cost Analysis",
            description: "Detailed breakdown of maintenance costs by aircraft and type",
            type: "Maintenance",
            lastGenerated: "2024-03-18",
            size: "3.1 MB",
            format: "PDF"
        },
        {
            id: 4,
            name: "Squawk Trend Analysis",
            description: "Analysis of aircraft squawks and recurring issues",
            type: "Quality Assurance",
            lastGenerated: "2024-03-17",
            size: "1.2 MB",
            format: "PDF"
        },
        {
            id: 5,
            name: "Pilot Currency Report",
            description: "Pilot certification status and currency requirements",
            type: "Compliance",
            lastGenerated: "2024-03-16",
            size: "950 KB",
            format: "Excel"
        },
        {
            id: 6,
            name: "Financial Summary",
            description: "Revenue, costs, and profitability analysis",
            type: "Financial",
            lastGenerated: "2024-03-15",
            size: "2.7 MB",
            format: "PDF"
        }
    ];

    const getTypeColor = (type) => {
        switch (type) {
            case "Flight Operations":
                return "bg-blue-100 text-blue-800";
            case "Aircraft Management":
                return "bg-green-100 text-green-800";
            case "Maintenance":
                return "bg-orange-100 text-orange-800";
            case "Quality Assurance":
                return "bg-red-100 text-red-800";
            case "Compliance":
                return "bg-purple-100 text-purple-800";
            case "Financial":
                return "bg-yellow-100 text-yellow-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="p-6 flex-1 overflow-auto">
            <h1 className="text-2xl font-bold mb-4">Reports</h1>
            
            {/* Reports Summary Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">Total Reports</h3>
                    <p className="text-2xl font-bold">{reportsList.length}</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">Generated This Month</h3>
                    <p className="text-2xl font-bold text-blue-600">12</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">Scheduled Reports</h3>
                    <p className="text-2xl font-bold text-green-600">8</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">Custom Reports</h3>
                    <p className="text-2xl font-bold text-purple-600">3</p>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow p-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-4 gap-4">
                    <button className="flex items-center gap-2 p-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
                        <BarChart3 size={20} />
                        Generate Custom Report
                    </button>
                    <button className="flex items-center gap-2 p-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200">
                        <Calendar size={20} />
                        Schedule Report
                    </button>
                    <button className="flex items-center gap-2 p-3 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200">
                        <TrendingUp size={20} />
                        Analytics Dashboard
                    </button>
                    <button className="flex items-center gap-2 p-3 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200">
                        <Download size={20} />
                        Export All Reports
                    </button>
                </div>
            </div>

            {/* Available Reports */}
            <div className="bg-white rounded-2xl shadow p-6">
                <h2 className="text-lg font-semibold mb-4">Available Reports</h2>
                <div className="space-y-4">
                    {reportsList.map((report) => (
                        <div key={report.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-100 p-2 rounded-lg">
                                        <FileText className="text-blue-600" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{report.name}</h3>
                                        <p className="text-gray-600">{report.description}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(report.type)}`}>
                                        {report.type}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                                <div className="flex items-center">
                                    <Calendar size={16} className="text-gray-500 mr-1" />
                                    <div>
                                        <span className="text-gray-600">Last Generated: </span>
                                        <span className="font-medium">{report.lastGenerated}</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FileText size={16} className="text-gray-500 mr-1" />
                                    <div>
                                        <span className="text-gray-600">Format: </span>
                                        <span className="font-medium">{report.format}</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Download size={16} className="text-gray-500 mr-1" />
                                    <div>
                                        <span className="text-gray-600">Size: </span>
                                        <span className="font-medium">{report.size}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="text-blue-500 text-sm hover:underline">
                                        Download
                                    </button>
                                    <button className="text-green-500 text-sm hover:underline">
                                        Regenerate
                                    </button>
                                    <button className="text-gray-500 text-sm hover:underline">
                                        Schedule
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}