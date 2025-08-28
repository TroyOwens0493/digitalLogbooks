"use client";
import React, { useState } from 'react';

export default function MechanicMaintenanceEntry() {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [workDescription, setWorkDescription] = useState('');
  const [mechanicName, setMechanicName] = useState('John Doe');
  const [certificateNumber, setCertificateNumber] = useState('A&P-123456');

  const maintenanceTasks = [
    { id: 'oil_change', label: 'Oil Change', description: 'Changed engine oil and oil filter per manufacturer specifications' },
    { id: 'spark_plugs', label: 'Spark Plug Inspection', description: 'Inspected and cleaned spark plugs, gaps within specifications' },
    { id: 'brake_inspection', label: 'Brake Inspection', description: 'Inspected brake system, pads and fluid levels normal' },
    { id: 'tire_inspection', label: 'Tire Inspection', description: 'Inspected tires for wear and proper inflation pressure' },
    { id: 'battery_check', label: 'Battery Check', description: 'Tested battery voltage and specific gravity, cleaned terminals' },
    { id: 'radio_check', label: 'Radio Check', description: 'Performed radio communication test, all systems operational' },
    { id: 'transponder_check', label: 'Transponder Check', description: 'Tested transponder response and code verification' },
    { id: 'annual_inspection', label: 'Annual Inspection', description: 'Completed annual inspection per FAR 91.409' },
    { id: '100hr_inspection', label: '100-Hour Inspection', description: 'Completed 100-hour inspection per FAR 91.409' },
    { id: 'filter_replacement', label: 'Air Filter Replacement', description: 'Replaced air filter element with new OEM part' }
  ];

  const handleTaskChange = (taskId) => {
    setSelectedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const generateDescription = () => {
    const descriptions = selectedTasks.map(taskId => {
      const task = maintenanceTasks.find(t => t.id === taskId);
      return task ? task.description : '';
    }).filter(desc => desc);
    
    const generatedText = descriptions.join('. ') + (descriptions.length > 0 ? '.' : '');
    setWorkDescription(generatedText);
  };

  const clearForm = () => {
    setSelectedTasks([]);
    setWorkDescription('');
  };

  const getCurrentDateTime = () => {
    return new Date().toLocaleString();
  };

  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-semibold mb-3">Digital Maintenance Entry</h3>
      
      {/* Quick Selection Checkboxes */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Quick Maintenance Tasks:</p>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {maintenanceTasks.map((task) => (
            <label key={task.id} className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                checked={selectedTasks.includes(task.id)}
                onChange={() => handleTaskChange(task.id)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>{task.label}</span>
            </label>
          ))}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={generateDescription}
            className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Auto-Generate Description
          </button>
          <button
            onClick={clearForm}
            className="px-3 py-1 bg-gray-300 text-gray-800 text-sm rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Clear Form
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="workDescription" className="block text-sm font-medium text-gray-700 mb-1">Description of Work Done:</label>
        <textarea
          id="workDescription"
          value={workDescription}
          onChange={(e) => setWorkDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="6"
          placeholder="Enter detailed description of maintenance work or use checkboxes above to auto-generate..."
        ></textarea>
      </div>
      
      {/* Enhanced E-Signature Section */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Digital E-Signature:</p>
        <div className="bg-blue-50 border border-blue-200 p-3 rounded-md">
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-xs font-medium text-gray-600">Mechanic Name:</label>
              <input
                type="text"
                value={mechanicName}
                onChange={(e) => setMechanicName(e.target.value)}
                className="w-full text-sm p-1 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600">A&P Certificate #:</label>
              <input
                type="text"
                value={certificateNumber}
                onChange={(e) => setCertificateNumber(e.target.value)}
                className="w-full text-sm p-1 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="text-sm text-gray-700">
            <p><strong>Digital Signature:</strong> {mechanicName}</p>
            <p><strong>Certificate Number:</strong> {certificateNumber}</p>
            <p><strong>Date/Time:</strong> {getCurrentDateTime()}</p>
            <p className="text-xs mt-2 italic">I certify that this work was performed in accordance with current regulations and approved maintenance practices.</p>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700">Logbook Integration:</p>
        <div className="bg-gray-100 p-3 rounded-md text-sm text-gray-600">
          [Work completed will be directly integrated into the appropriate aircraft logbook for squawks.]
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
          Print / Export
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          Submit Maintenance Entry
        </button>
      </div>
    </div>
  );
}
