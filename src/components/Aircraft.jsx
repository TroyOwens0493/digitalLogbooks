// components/Aircraft.jsx
import { AlertCircle, Calendar, Wrench, CheckCircle, XCircle } from "lucide-react";

export default function Aircraft() {
    // Sample aircraft data based on what we see in the dashboard
    const aircraftList = [
        {
            tailNumber: "N12345",
            make: "Cessna",
            model: "172",
            year: "2018",
            status: "Airworthy",
            totalTime: "3,247.5",
            squawks: 2,
            nextInspection: "Annual Due: 2024-04-15",
            location: "Hangar A-2"
        },
        {
            tailNumber: "A12345", 
            make: "Piper",
            model: "Cherokee",
            year: "2016",
            status: "Airworthy",
            totalTime: "2,856.2", 
            squawks: 0,
            nextInspection: "100-Hour Due: 2024-03-28",
            location: "Ramp 5"
        },
        {
            tailNumber: "B67890",
            make: "Cessna", 
            model: "182",
            year: "2020",
            status: "Airworthy",
            totalTime: "1,892.7",
            squawks: 1,
            nextInspection: "Annual Due: 2024-08-22",
            location: "Hangar B-1"
        },
        {
            tailNumber: "C23456",
            make: "Cirrus",
            model: "SR22",
            year: "2019", 
            status: "Maintenance",
            totalTime: "2,145.8",
            squawks: 3,
            nextInspection: "Annual Due: 2024-06-10",
            location: "Maintenance"
        }
    ];

    return (
        <div className="p-6 flex-1">
            <h1 className="text-2xl font-bold mb-4">Aircraft</h1>
            
            {/* Aircraft Summary Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">Total Aircraft</h3>
                    <p className="text-2xl font-bold">{aircraftList.length}</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">Airworthy</h3>
                    <p className="text-2xl font-bold text-green-600">
                        {aircraftList.filter(a => a.status === "Airworthy").length}
                    </p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">In Maintenance</h3>
                    <p className="text-2xl font-bold text-orange-600">
                        {aircraftList.filter(a => a.status === "Maintenance").length}
                    </p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-sm font-semibold text-gray-600">Total Squawks</h3>
                    <p className="text-2xl font-bold text-red-600">
                        {aircraftList.reduce((total, aircraft) => total + aircraft.squawks, 0)}
                    </p>
                </div>
            </div>

            {/* Aircraft List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {aircraftList.map((aircraft, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h2 className="text-xl font-bold">{aircraft.tailNumber}</h2>
                                <p className="text-gray-600">{aircraft.year} {aircraft.make} {aircraft.model}</p>
                            </div>
                            <div className="flex items-center">
                                {aircraft.status === "Airworthy" ? (
                                    <CheckCircle className="text-green-600" size={24} />
                                ) : (
                                    <XCircle className="text-orange-600" size={24} />
                                )}
                                <span className={`ml-2 font-semibold ${
                                    aircraft.status === "Airworthy" ? "text-green-600" : "text-orange-600"
                                }`}>
                                    {aircraft.status}
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm text-gray-600">Total Time</p>
                                <p className="font-semibold">{aircraft.totalTime} hrs</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Location</p>
                                <p className="font-semibold">{aircraft.location}</p>
                            </div>
                        </div>

                        <div className="border-t pt-4">
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <AlertCircle size={16} className="text-red-500 mr-1" />
                                    <span className="text-sm text-gray-600">Squawks</span>
                                </div>
                                <span className={`font-bold ${aircraft.squawks > 0 ? "text-red-500" : "text-green-600"}`}>
                                    {aircraft.squawks}
                                </span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Calendar size={16} className="text-blue-500 mr-1" />
                                    <span className="text-sm text-gray-600">{aircraft.nextInspection}</span>
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
    );
}