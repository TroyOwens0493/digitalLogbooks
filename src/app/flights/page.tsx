// app/flights/page.tsx
import Sidebar from "../../components/Sidebar";
import Flights from "../../components/Flights";

export default function FlightsPage() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <Flights />
        </div>
    );
}