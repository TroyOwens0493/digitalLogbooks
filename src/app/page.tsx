// pages/index.jsx
"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import Aircraft from "../components/Aircraft";
import Calendar from "../components/Calendar";
import Flights from "../components/Flights";
import Squawks from "../components/Squawks";
import Maintenance from "../components/Maintenance";
import Reports from "../components/Reports";

export default function Home() {
    const [currentPage, setCurrentPage] = useState("Dashboard");

    const renderCurrentPage = () => {
        switch (currentPage) {
            case "Dashboard":
                return <Dashboard onPageChange={setCurrentPage} />;
            case "Aircraft":
                return <Aircraft />;
            case "Calendar":
                return <Calendar />;
            case "Flights":
                return <Flights />;
            case "Squawks":
                return <Squawks />;
            case "Maintenance":
                return <Maintenance />;
            case "Reports":
                return <Reports />;
            default:
                return <Dashboard onPageChange={setCurrentPage} />;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
            {renderCurrentPage()}
        </div>
    );
}

