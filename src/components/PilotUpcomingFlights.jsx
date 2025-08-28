export default function PilotUpcomingFlights() {
  return (
    <div className="text-sm text-gray-700">
      <p>March 20-26</p>
      <ul className="mt-2 text-sm text-gray-700">
        <li>Solo <strong>A12345</strong> - 08:00 – 09:30</li>
        <li>Dual <strong>B67890</strong> - 10:30 – 12:00</li>
        <li>Solo <strong>C23456</strong> - 13:00 – 15:00</li>
      </ul>
      <button className="mt-3 text-blue-500 text-sm hover:underline">
        View All Flights
      </button>
    </div>
  );
}