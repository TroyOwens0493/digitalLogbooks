// app/squawks/page.tsx
import Sidebar from "../../components/Sidebar";
import Squawks from "../../components/Squawks";

export default function SquawksPage() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <Squawks />
        </div>
    );
}