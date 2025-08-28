import MechanicSidebar from "../../components/MechanicSidebar";

export default function MechanicDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <MechanicSidebar />
      <div className="p-6 flex-1 bg-white overflow-auto">
        {children}
      </div>
    </div>
  );
}
