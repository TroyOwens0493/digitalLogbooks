// components/Dashboard.jsx
import { AlertCircle } from "lucide-react";

export default function Dashboard() {
    return (
        <div className="p-6 flex-1">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-3 gap-4">
                {/* Upcoming Reservations */}
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h2 className="text-lg font-semibold mb-2 text-gray-700">Upcoming Reservations</h2>
                    <p className="text-sm text-gray-700">March 20-26</p>
                    <ul className="mt-2 text-sm text-gray-700">
                        <li>Solo <strong>A12345</strong> - 08:00 – 09:30</li>
                        <li>Dual <strong>B67890</strong> - 10:30 – 12:00</li>
                        <li>Solo <strong>C23456</strong> - 13:00 – 15:00</li>
                    </ul>
                    <button className="mt-3 text-blue-500 text-sm">View Calendar</button>
                </div>

                {/* Aircraft Status */}
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h2 className="text-lg font-semibold mb-2">Aircraft Status</h2>
                    <p className="text-sm font-semibold">N12345</p>
                    <p className="text-green-600 font-semibold">Airworthy</p>
                    <p className="text-sm text-gray-700 mt-2">Squawks</p>
                    <p className="text-red-500 font-bold">2</p>
                    <p className="text-gray-700 text-xs">Pending Squawks</p>
                </div>

                {/* Notifications */}
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h2 className="text-lg font-semibold mb-2">Notifications</h2>
                    <div className="flex flex-col gap-2">
                        <button className="bg-gray-100 p-2 rounded-lg">Book Flight</button>
                        <button className="bg-gray-100 p-2 rounded-lg">Log Flight</button>
                        <button className="bg-gray-100 p-2 rounded-lg">Report Squawk</button>
                    </div>
                </div>

                {/* Upcoming Inspections */}
                <div className="bg-white p-4 rounded-2xl shadow col-span-3">
                    <h2 className="text-lg font-semibold mb-2">Upcoming Inspections</h2>
                    <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-lg text-sm">
                        <AlertCircle size={18} />
                        Inspection on N12345 is due in 3 days
                    </div>
                    <button className="mt-3 text-blue-500 text-sm">View All</button>
                </div>
            </div>
        </div>
    );
}

