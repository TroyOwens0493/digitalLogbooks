// app/maintenance/page.tsx
import Sidebar from "../../components/Sidebar";
import Maintenance from "../../components/Maintenance";

export default function MaintenancePage() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <Maintenance />
        </div>
    );
}