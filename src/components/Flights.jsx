// components/Flights.jsx
import { Clock, Plane, User, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function Flights() {
    // Sample flight data for the logbook
    const flightsList = [
        {
            id: 1,
            date: "2024-03-20",
            aircraft: "N12345",
            pilot: "John Doe",
            departure: "KPAO",
            arrival: "KSQL", 
            duration: "1.5",
            type: "Solo",
            purpose: "Local Practice",
            landings: 3,
            status: "Completed"
        },
        {
            id: 2,
            date: "2024-03-19",
            aircraft: "N67890",
            pilot: "Jane Smith",
            departure: "KPAO",
            arrival: "KHAF",
            duration: "2.2",
            type: "Dual",
            purpose: "Cross Country",
            landings: 2,
            status: "Completed"
        },
        {
            id: 3,
            date: "2024-03-18",
            aircraft: "N23456",
            pilot: "Mike Johnson",
            departure: "KPAO",
            arrival: "KPAO",
            duration: "1.8",
            type: "Solo",
            purpose: "Pattern Work",
            landings: 8,
            status: "Completed"
        },
        {
            id: 4,
            date: "2024-03-17",
            aircraft: "N12345",
            pilot: "Sarah Wilson",
            departure: "KPAO",
            arrival: "KSQL",
            duration: "1.3",
            type: "Training",
            purpose: "Instrument Practice",
            landings: 2,
            status: "Completed"
        },
        {
            id: 5,
            date: "2024-03-16",
            aircraft: "C23456",
            pilot: "Tom Brown",
            departure: "KPAO",
            arrival: "KCCR",
            duration: "2.0",
            type: "Solo",
            purpose: "Cross Country",
            landings: 2,
            status: "Completed"
        },
        {
            id: 6,
            date: "2024-03-15",
            aircraft: "N67890",
            pilot: "Lisa Davis",
            departure: "KPAO",
            arrival: "KPAO",
            duration: "1.1",
            type: "Dual",
            purpose: "Checkride Prep",
            landings: 4,
            status: "Completed"
        }
    ];

    const getTotalHours = () => {
        return flightsList.reduce((total, flight) => total + parseFloat(flight.duration), 0).toFixed(1);
    };

    const getTotalLandings = () => {
        return flightsList.reduce((total, flight) => total + flight.landings, 0);
    };

    return (
        <div className="p-6 flex-1">
            <h1 className="text-2xl font-bold mb-4">Flight Logbook</h1>
            
            {/* Flight Summary Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">Total Flights</h3>
                    <p className="text-2xl font-bold">{flightsList.length}</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">Total Hours</h3>
                    <p className="text-2xl font-bold text-blue-600">
                        {getTotalHours()}
                    </p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">Total Landings</h3>
                    <p className="text-2xl font-bold text-green-600">
                        {getTotalLandings()}
                    </p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">This Month</h3>
                    <p className="text-2xl font-bold text-purple-600">
                        {flightsList.filter(f => f.date.startsWith("2024-03")).length}
                    </p>
                </div>
            </div>

            {/* Flight Log Entries */}
            <div className="bg-white rounded-2xl shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Flights</h2>
                <div className="space-y-4">
                    {flightsList.map((flight, index) => (
                        <div key={flight.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-100 p-2 rounded-lg">
                                        <Plane className="text-blue-600" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{flight.aircraft}</h3>
                                        <p className="text-sm text-gray-600">{flight.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="text-green-600" size={20} />
                                    <span className="text-sm font-medium text-green-600">{flight.status}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-3">
                                <div className="flex items-center gap-2">
                                    <User size={16} className="text-gray-500" />
                                    <div>
                                        <p className="text-sm text-gray-600">Pilot</p>
                                        <p className="font-semibold">{flight.pilot}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-gray-500" />
                                    <div>
                                        <p className="text-sm text-gray-600">Duration</p>
                                        <p className="font-semibold">{flight.duration} hrs</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} className="text-gray-500" />
                                    <div>
                                        <p className="text-sm text-gray-600">Route</p>
                                        <p className="font-semibold">{flight.departure} → {flight.arrival}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t pt-3">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-4">
                                        <div>
                                            <span className="text-sm text-gray-600">Type: </span>
                                            <span className={`text-sm font-medium px-2 py-1 rounded ${
                                                flight.type === "Solo" ? "bg-green-100 text-green-700" :
                                                flight.type === "Dual" ? "bg-blue-100 text-blue-700" :
                                                "bg-purple-100 text-purple-700"
                                            }`}>
                                                {flight.type}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-sm text-gray-600">Purpose: </span>
                                            <span className="text-sm font-medium">{flight.purpose}</span>
                                        </div>
                                        <div>
                                            <span className="text-sm text-gray-600">Landings: </span>
                                            <span className="text-sm font-bold">{flight.landings}</span>
                                        </div>
                                    </div>
                                    <button className="text-blue-500 text-sm hover:underline">
                                        View Details
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