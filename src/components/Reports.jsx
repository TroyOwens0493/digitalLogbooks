// components/Reports.jsx
import { AlertCircle, TrendingUp, Clock, DollarSign, CheckCircle, Wrench } from "lucide-react";

export default function Reports() {
    // Sample data for the reports
    const flightHoursData = {
        thisMonth: 24.5,
        lastMonth: 18.2,
        thisYear: 156.8
    };

    const aircraftUtilization = [
        { aircraft: "N12345", hours: 32.5, status: "Airworthy" },
        { aircraft: "N67890", hours: 28.1, status: "Airworthy" },
        { aircraft: "N23456", hours: 19.3, status: "Maintenance" }
    ];

    const recentInspections = [
        { aircraft: "N12345", type: "Annual", date: "2024-03-15", status: "Completed" },
        { aircraft: "N67890", type: "100-Hour", date: "2024-03-10", status: "Completed" },
        { aircraft: "N23456", type: "50-Hour", date: "2024-03-20", status: "Due" }
    ];

    const financialSummary = {
        fuelCosts: 2340.50,
        maintenanceCosts: 1850.00,
        totalRevenue: 8450.00
    };

    return (
        <div className="p-6 flex-1">
            <h1 className="text-2xl font-bold mb-4">Reports</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
                {/* Flight Hours Summary */}
                <div className="bg-white p-4 rounded-2xl shadow">
                    <div className="flex items-center gap-2 mb-3">
                        <Clock className="text-blue-500" size={20} />
                        <h2 className="text-lg font-semibold">Flight Hours</h2>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">This Month</span>
                            <span className="font-semibold">{flightHoursData.thisMonth}h</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Last Month</span>
                            <span className="font-semibold">{flightHoursData.lastMonth}h</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Year to Date</span>
                            <span className="font-semibold text-blue-600">{flightHoursData.thisYear}h</span>
                        </div>
                    </div>
                    <div className="mt-3 flex items-center text-green-600 text-sm">
                        <TrendingUp size={16} className="mr-1" />
                        +34% vs last month
                    </div>
                </div>

                {/* Financial Summary */}
                <div className="bg-white p-4 rounded-2xl shadow">
                    <div className="flex items-center gap-2 mb-3">
                        <DollarSign className="text-green-500" size={20} />
                        <h2 className="text-lg font-semibold">Financial Summary</h2>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Revenue</span>
                            <span className="font-semibold text-green-600">${financialSummary.totalRevenue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Fuel Costs</span>
                            <span className="font-semibold">${financialSummary.fuelCosts.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Maintenance</span>
                            <span className="font-semibold">${financialSummary.maintenanceCosts.toLocaleString()}</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between">
                            <span className="text-sm font-semibold">Net Profit</span>
                            <span className="font-bold text-green-600">
                                ${(financialSummary.totalRevenue - financialSummary.fuelCosts - financialSummary.maintenanceCosts).toLocaleString()}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Aircraft Status Overview */}
                <div className="bg-white p-4 rounded-2xl shadow">
                    <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="text-green-500" size={20} />
                        <h2 className="text-lg font-semibold">Fleet Status</h2>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Total Aircraft</span>
                            <span className="font-semibold">3</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Airworthy</span>
                            <span className="font-semibold text-green-600">2</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">In Maintenance</span>
                            <span className="font-semibold text-orange-600">1</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Availability</span>
                            <span className="font-semibold text-blue-600">67%</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {/* Aircraft Utilization Table */}
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h2 className="text-lg font-semibold mb-3">Aircraft Utilization (This Month)</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-2">Aircraft</th>
                                    <th className="text-left py-2">Hours</th>
                                    <th className="text-left py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {aircraftUtilization.map((aircraft, index) => (
                                    <tr key={index} className="border-b border-gray-100">
                                        <td className="py-2 font-semibold">{aircraft.aircraft}</td>
                                        <td className="py-2">{aircraft.hours}h</td>
                                        <td className="py-2">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                aircraft.status === 'Airworthy' 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : 'bg-orange-100 text-orange-800'
                                            }`}>
                                                {aircraft.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Recent Inspections */}
                <div className="bg-white p-4 rounded-2xl shadow">
                    <div className="flex items-center gap-2 mb-3">
                        <Wrench className="text-orange-500" size={20} />
                        <h2 className="text-lg font-semibold">Recent Inspections</h2>
                    </div>
                    <div className="space-y-3">
                        {recentInspections.map((inspection, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-semibold text-sm">{inspection.aircraft}</p>
                                    <p className="text-xs text-gray-600">{inspection.type}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-600">{inspection.date}</p>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        inspection.status === 'Completed' 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-red-100 text-red-800'
                                    }`}>
                                        {inspection.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="mt-3 text-blue-500 text-sm">View Full Schedule</button>
                </div>
            </div>

            {/* Squawks Summary */}
            <div className="mt-4 bg-white p-4 rounded-2xl shadow">
                <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="text-red-500" size={20} />
                    <h2 className="text-lg font-semibold">Squawks Summary</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-red-50 rounded-lg">
                        <p className="text-2xl font-bold text-red-600">5</p>
                        <p className="text-sm text-gray-600">Open Squawks</p>
                    </div>
                    <div className="text-center p-3 bg-yellow-50 rounded-lg">
                        <p className="text-2xl font-bold text-yellow-600">3</p>
                        <p className="text-sm text-gray-600">In Progress</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">12</p>
                        <p className="text-sm text-gray-600">Resolved This Month</p>
                    </div>
                </div>
            </div>
        </div>
    );
}