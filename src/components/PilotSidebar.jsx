"use client";

import { Home, Plane, AlertCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PilotSidebar() {
    const pathname = usePathname();

    const menuItems = [
        { label: "Dashboard", icon: <Home size={20} />, href: "/pilot-dashboard" },
        { label: "Flights", icon: <Plane size={20} />, href: "/pilot-dashboard/flights" },
        { label: "Squawks", icon: <AlertCircle size={20} />, href: "/pilot-dashboard/squawks" },
    ];

    return (
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
            <div className="flex items-center justify-center mb-6">
                <span className="text-xl font-bold">Pilot Menu</span>
            </div>
            <ul className="space-y-2">
                {menuItems.map((item, idx) => {
                    const isActive = pathname === item.href;
                    const itemClasses = `flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer ${
                        isActive ? "bg-gray-700" : ""
                    }`;

                    return (
                        <li key={idx}>
                            <Link href={item.href} className={itemClasses}>
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
