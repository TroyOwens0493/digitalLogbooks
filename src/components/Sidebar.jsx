// components/Sidebar.jsx
import { Home, Calendar, Plane, Wrench, FileText, Settings, AlertCircle } from "lucide-react";

export default function Sidebar() {
    const menuItems = [
        { label: "Dashboard", icon: <Home size={20} /> },
        { label: "Aircraft", icon: <Plane size={20} /> },
        { label: "Calendar", icon: <Calendar size={20} /> },
        { label: "Flights", icon: <Plane size={20} /> },
        { label: "Squawks", icon: <AlertCircle size={20} /> },
        { label: "Maintenance", icon: <Wrench size={20} /> },
        { label: "Reports", icon: <FileText size={20} /> },
        { label: "Settings", icon: <Settings size={20} /> },
    ];

    return (
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
            <div className="flex items-center justify-center mb-6">
                <span className="text-xl font-bold">Dashboard</span>
            </div>
            <ul className="space-y-2">
                {menuItems.map((item, idx) => (
                    <li
                        key={idx}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer"
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

