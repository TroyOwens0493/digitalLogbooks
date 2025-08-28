export default function MechanicFAACompliance() {
  return (
    <div className="text-sm text-gray-700">
      <p>List of aircraft not in FAA compliance will go here.</p>
      <ul className="mt-2 space-y-1">
        <li>N12345 - AD 2024-01-01 overdue</li>
        <li>N67890 - Registration expired</li>
      </ul>
    </div>
  );
}