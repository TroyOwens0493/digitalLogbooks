// app/calendar/page.tsx
import Sidebar from "../../components/Sidebar";
import Calendar from "../../components/Calendar";

export default function CalendarPage() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <Calendar />
        </div>
    );
}