// components/Sidebar.jsx
import { Home, Calendar, Plane, Wrench, FileText, Settings, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
    const menuItems = [
        { label: "Dashboard", icon: <Home size={20} />, href: "/" },
        { label: "Aircraft", icon: <Plane size={20} />, href: "#" },
        { label: "Calendar", icon: <Calendar size={20} />, href: "#" },
        { label: "Flights", icon: <Plane size={20} />, href: "#" },
        { label: "Squawks", icon: <AlertCircle size={20} />, href: "#" },
        { label: "Maintenance", icon: <Wrench size={20} />, href: "#" },
        { label: "Reports", icon: <FileText size={20} />, href: "/reports" },
        { label: "Settings", icon: <Settings size={20} />, href: "#" },
    ];

    return (
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
            <div className="flex items-center justify-center mb-6">
                <Link href="/" className="text-xl font-bold hover:text-gray-300">
                    Digital Logbooks
                </Link>
            </div>
            <ul className="space-y-2">
                {menuItems.map((item, idx) => (
                    <li key={idx}>
                        <Link
                            href={item.href}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors duration-200"
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

