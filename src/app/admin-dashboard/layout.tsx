import AdminSidebar from "../../components/AdminSidebar";

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="p-6 flex-1 bg-white overflow-auto">
        {children}
      </div>
    </div>
  );
}