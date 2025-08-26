// pages/index.jsx
"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import Aircraft from "../components/Aircraft";

export default function Home() {
    const [currentPage, setCurrentPage] = useState("Dashboard");

    const renderCurrentPage = () => {
        switch (currentPage) {
            case "Dashboard":
                return <Dashboard />;
            case "Aircraft":
                return <Aircraft />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
            {renderCurrentPage()}
        </div>
    );
}

