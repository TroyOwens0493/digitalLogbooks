export default function MechanicMaintenanceSchedule() {
  return (
    <div className="text-sm text-gray-700">
      <p>Detailed aircraft maintenance schedule for the fleet.</p>
      <table className="w-full mt-2 text-left table-auto">
        <thead>
          <tr>
            <th className="py-2">Aircraft</th>
            <th className="py-2">Task</th>
            <th className="py-2">Due</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-1">N12345</td>
            <td className="py-1">100-hr</td>
            <td className="py-1">10 hrs</td>
            <td className="py-1 text-yellow-600">Pending</td>
          </tr>
          <tr>
            <td className="py-1">N67890</td>
            <td className="py-1">Annual</td>
            <td className="py-1">Oct 2025</td>
            <td className="py-1 text-green-600">Scheduled</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}