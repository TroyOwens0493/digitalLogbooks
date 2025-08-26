// app/reports/page.tsx
import Sidebar from "../../components/Sidebar";
import Reports from "../../components/Reports";

export default function ReportsPage() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <Reports />
        </div>
    );
}