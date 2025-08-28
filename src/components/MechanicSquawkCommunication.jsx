import React from 'react';

export default function MechanicSquawkCommunication() {
  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-semibold mb-3">Squawk Communication</h3>
      <div className="space-y-4 mb-4">
        {/* Example Squawk Item */}
        <div className="bg-gray-100 p-3 rounded-md">
          <p className="text-sm text-gray-800"><strong>Pilot John Doe:</strong> "Engine sputtering on takeoff, N1 fluctuating." <span className="text-gray-500 text-xs">2025-08-26 10:30 AM</span></p>
        </div>
        <div className="bg-blue-50 p-3 rounded-md">
          <p className="text-sm text-gray-800"><strong>Admin Jane Smith:</strong> "Acknowledged. Please investigate." <span className="text-gray-500 text-xs">2025-08-26 11:00 AM</span></p>
        </div>
      </div>
      <div className="mt-4">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
          placeholder="Add your comment or action..."
        ></textarea>
        <div className="flex justify-end mt-2 space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Add Comment
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Take on Task
          </button>
        </div>
      </div>
    </div>
  );
}
