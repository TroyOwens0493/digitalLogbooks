export default function PilotNotifications() {
  return (
    <div className="text-sm text-gray-700">
      <div className="flex flex-col gap-2">
        <div className="bg-gray-100 p-2 rounded-lg">New policy update from Admin.</div>
        <div className="bg-gray-100 p-2 rounded-lg">Reminder: Flight N12345 at 14:00 today.</div>
        <div className="bg-gray-100 p-2 rounded-lg">Maintenance on N98765 completed.</div>
      </div>
      <button className="mt-3 text-blue-500 text-sm hover:underline">
        View All Notifications
      </button>
    </div>
  );
}