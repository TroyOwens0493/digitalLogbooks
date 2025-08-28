export default function MechanicUpcomingMaintenance() {
  return (
    <div className="text-sm text-gray-700">
      <p>Upcoming maintenance tasks will be listed here.</p>
      <ul className="mt-2 space-y-1">
        <li>N12345 - 100-hour inspection (due in 10 hrs)</li>
        <li>N23456 - Annual inspection (due Oct 2025)</li>
      </ul>
    </div>
  );
}