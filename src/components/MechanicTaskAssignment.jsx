import { useState } from "react";

export default function MechanicTaskAssignment() {
  const [task, setTask] = useState("");
  const [assignee, setAssignee] = useState("");

  const handleAssignTask = (e) => {
    e.preventDefault();
    console.log("Assigning task:", { task, assignee });
    alert(`Task "${task}" assigned to ${assignee}.`);
    setTask("");
    setAssignee("");
  };

  return (
    <div className="text-sm text-gray-700">
      <p className="mb-2">Assign inspections and squawks to team members.</p>
      <form onSubmit={handleAssignTask} className="space-y-3">
        <div>
          <label htmlFor="task" className="block text-sm font-medium text-gray-700">Task Description</label>
          <input type="text" id="task" value={task} onChange={(e) => setTask(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required />
        </div>
        <div>
          <label htmlFor="assignee" className="block text-sm font-medium text-gray-700">Assign to</label>
          <select id="assignee" value={assignee} onChange={(e) => setAssignee(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required>
            <option value="">Select Assignee</option>
            <option value="self">Self</option>
            <option value="mechanic1">Mechanic 1</option>
            <option value="mechanic2">Mechanic 2</option>
          </select>
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Assign Task</button>
      </form>
    </div>
  );
}