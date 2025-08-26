// components/Flights.jsx
import { Plane, Clock, User, Calendar } from "lucide-react";

export default function Flights() {
    // Sample flight data
    const recentFlights = [
        {
            id: 1,
            aircraft: "N12345",
            date: "March 20, 2024",
            departure: "KORD",
            arrival: "KMDW",
            duration: "1.2",
            pilot: "John Smith",
            type: "Solo",
            purpose: "Cross Country"
        },
        {
            id: 2,
            aircraft: "N67890",
            date: "March 18, 2024",
            departure: "KMDW",
            arrival: "KORD",
            duration: "0.8",
            pilot: "Jane Doe",
            type: "Dual",
            purpose: "Training"
        },
        {
            id: 3,
            aircraft: "N23456",
            date: "March 15, 2024",
            departure: "KORD",
            arrival: "KPWK",
            duration: "0.5",
            pilot: "Mike Johnson",
            type: "Solo",
            purpose: "Pattern Work"
        }
    ];

    const totalFlightTime = recentFlights.reduce((total, flight) => total + parseFloat(flight.duration), 0);

    return (
        <div className="p-6 flex-1">
            <h1 className="text-2xl font-bold mb-4">Flight Log</h1>
            
            {/* Flight Statistics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h2 className="text-lg font-semibold mb-2 text-gray-700">Total Flights</h2>
                    <div className="flex items-center gap-2">
                        <Plane size={24} className="text-blue-500" />
                        <span className="text-2xl font-bold">{recentFlights.length}</span>
                    </div>
                    <p className="text-sm text-gray-600">This month</p>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow">
                    <h2 className="text-lg font-semibold mb-2 text-gray-700">Total Hours</h2>
                    <div className="flex items-center gap-2">
                        <Clock size={24} className="text-green-500" />
                        <span className="text-2xl font-bold">{totalFlightTime.toFixed(1)}</span>
                    </div>
                    <p className="text-sm text-gray-600">Flight hours</p>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow">
                    <h2 className="text-lg font-semibold mb-2 text-gray-700">Last Flight</h2>
                    <div className="flex items-center gap-2">
                        <Calendar size={24} className="text-purple-500" />
                        <span className="text-lg font-bold">{recentFlights[0]?.date}</span>
                    </div>
                    <p className="text-sm text-gray-600">{recentFlights[0]?.aircraft}</p>
                </div>
            </div>

            {/* Recent Flights Table */}
            <div className="bg-white rounded-2xl shadow">
                <div className="p-4 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Recent Flights</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            Log New Flight
                        </button>
                    </div>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Date</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Aircraft</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Route</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Duration</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Pilot</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Type</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Purpose</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {recentFlights.map((flight) => (
                                <tr key={flight.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 text-sm text-gray-900">{flight.date}</td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{flight.aircraft}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{flight.departure} → {flight.arrival}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{flight.duration} hrs</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">
                                        <div className="flex items-center gap-2">
                                            <User size={16} />
                                            {flight.pilot}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            flight.type === 'Solo' 
                                                ? 'bg-green-100 text-green-800' 
                                                : 'bg-blue-100 text-blue-800'
                                        }`}>
                                            {flight.type}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{flight.purpose}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}