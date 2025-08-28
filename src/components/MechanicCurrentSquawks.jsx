export default function MechanicCurrentSquawks() {
  return (
    <div className="text-sm text-gray-700">
      <p>Current squawks and aircraft status will be displayed here.</p>
      <ul className="mt-2 space-y-1">
        <li>N12345 - Engine oil leak (DOWN)</li>
        <li>N67890 - Landing gear light (UP)</li>
      </ul>
    </div>
  );
}