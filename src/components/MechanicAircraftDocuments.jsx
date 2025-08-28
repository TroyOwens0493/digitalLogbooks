import React from 'react';

export default function MechanicAircraftDocuments() {
  const documents = [
    { id: 1, name: 'Airworthiness Certificate', status: 'Valid', link: '#' },
    { id: 2, name: 'Registration', status: 'Valid', link: '#' },
    { id: 3, name: 'Weight and Balance', status: 'Valid', link: '#' },
    { id: 4, name: 'Maintenance Records', status: 'Up-to-date', link: '#' },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-3">Important Documents</h3>
      <ul className="space-y-2">
        {documents.map((doc) => (
          <li key={doc.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
            <span>{doc.name}</span>
            <a href={doc.link} className="text-blue-600 hover:underline">View ({doc.status})</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
