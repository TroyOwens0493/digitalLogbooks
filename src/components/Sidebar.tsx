// components/Sidebar.tsx
"use client";
import { Home, Calendar, Plane, Wrench, FileText, Settings, AlertCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
    currentPage?: string;
    onPageChange?: (page: string) => void;
}

export default function Sidebar({ currentPage, onPageChange }: SidebarProps = {}) {
    const pathname = usePathname();

    const menuItems = [
        { label: "Dashboard", icon: <Home size={20} />, href: "/" },
        { label: "Aircraft", icon: <Plane size={20} />, href: "/aircraft" },
        { label: "Calendar", icon: <Calendar size={20} />, href: "/calendar" },
        { label: "Flights", icon: <Plane size={20} />, href: "/flights" },
        { label: "Squawks", icon: <AlertCircle size={20} />, href: "/squawks" },
        { label: "Maintenance", icon: <Wrench size={20} />, href: "/maintenance" },
        { label: "Reports", icon: <FileText size={20} />, href: "/reports" },
        { label: "Settings", icon: <Settings size={20} />, href: "/settings" },
    ];

    const handleMenuClick = (label: string) => {
        if (onPageChange) {
            onPageChange(label);
        }
    };

    return (
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
            <div className="flex items-center justify-center mb-6">
                <span className="text-xl font-bold">Dashboard</span>
            </div>
            <ul className="space-y-2">
                {menuItems.map((item, idx) => {
                    const isActive = onPageChange ? currentPage === item.label : pathname === item.href;
                    return (
                        <li key={idx}>
                            <Link 
                                href={item.href}
                                onClick={(e) => {
                                    if (onPageChange) {
                                        e.preventDefault();
                                        handleMenuClick(item.label);
                                    }
                                }}
                                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                                    isActive 
                                        ? 'bg-blue-600 text-white' 
                                        : 'hover:bg-gray-700'
                                }`}
                            >
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

