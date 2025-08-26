// app/settings/page.tsx
import Sidebar from "../../components/Sidebar";
import Settings from "../../components/Settings";

export default function SettingsPage() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <Settings />
        </div>
    );
}