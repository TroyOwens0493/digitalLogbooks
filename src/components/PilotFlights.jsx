import { useState } from "react";

export default function PilotFlights() {
  const [tailNumber, setTailNumber] = useState("");
  const [hobbsStart, setHobbsStart] = useState("");
  const [hobbsFinish, setHobbsFinish] = useState("");
  const [tachFinish, setTachFinish] = useState("");
  const [flightInstruction, setFlightInstruction] = useState("");
  const [groundInstruction, setGroundInstruction] = useState("");
  const [studentName, setStudentName] = useState("");
  const [squawks, setSquawks] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [groundTime, setGroundTime] = useState("");

  const handleLogFlight = (e) => {
    e.preventDefault();
    // Logic to send data to admin/mechanic
    console.log("Logging Flight:", {
      tailNumber, hobbsStart, hobbsFinish, tachFinish,
      flightInstruction, groundInstruction, studentName, squawks, additionalNotes
    });
    alert("Flight Logged! (Data sent to admin/mechanic)");
    // Reset form
    setTailNumber(""); setHobbsStart(""); setHobbsFinish(""); setTachFinish("");
    setFlightInstruction(""); setGroundInstruction(""); setStudentName("");
    setSquawks(""); setAdditionalNotes("");
  };

  const handleLogGroundTime = (e) => {
    e.preventDefault();
    // Logic to send ground time to admin
    console.log("Logging Ground Time:", { groundTime });
    alert("Ground Time Logged! (Data sent to admin)");
    setGroundTime("");
  };

  return (
    <div className="space-y-6">
      {/* QR Code Scanner Placeholder */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
        <h3 className="text-md font-semibold mb-2">QR Code Scanner</h3>
        <p className="text-sm text-gray-600">Scan QR code at beginning/end of flight to autofill Tail Number and Hobbs times.</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Scan QR Code</button>
      </div>

      {/* Log a Flight Form */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
        <h3 className="text-md font-semibold mb-4">Log a Flight</h3>
        <form onSubmit={handleLogFlight} className="space-y-3">
          <div>
            <label htmlFor="tailNumber" className="block text-sm font-medium text-gray-700">Aircraft Tail Number</label>
            <input type="text" id="tailNumber" value={tailNumber} onChange={(e) => setTailNumber(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="N12345" required />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="hobbsStart" className="block text-sm font-medium text-gray-700">Hobbs Start Time</label>
              <input type="number" id="hobbsStart" value={hobbsStart} onChange={(e) => setHobbsStart(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required />
            </div>
            <div>
              <label htmlFor="hobbsFinish" className="block text-sm font-medium text-gray-700">Hobbs Finish Time</label>
              <input type="number" id="hobbsFinish" value={hobbsFinish} onChange={(e) => setHobbsFinish(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required />
            </div>
          </div>
          <div>
            <label htmlFor="tachFinish" className="block text-sm font-medium text-gray-700">Tach Finish Time</label>
            <input type="number" id="tachFinish" value={tachFinish} onChange={(e) => setTachFinish(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="flightInstruction" className="block text-sm font-medium text-gray-700">Flight Instruction (Hours)</label>
            <input type="number" step="0.1" id="flightInstruction" value={flightInstruction} onChange={(e) => setFlightInstruction(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="groundInstruction" className="block text-sm font-medium text-gray-700">Ground Instruction (Hours)</label>
            <input type="number" step="0.1" id="groundInstruction" value={groundInstruction} onChange={(e) => setGroundInstruction(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">Student Name</label>
            <input type="text" id="studentName" value={studentName} onChange={(e) => setStudentName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="squawks" className="block text-sm font-medium text-gray-700">Squawks</label>
            <textarea id="squawks" value={squawks} onChange={(e) => setSquawks(e.target.value)} rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
          </div>
          <div>
            <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">Additional Notes</label>
            <textarea id="additionalNotes" value={additionalNotes} onChange={(e) => setAdditionalNotes(e.target.value)} rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Log Flight</button>
        </form>
      </div>

      {/* Past Flights */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
        <h3 className="text-md font-semibold mb-4">Past Flights</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><strong>N12345</strong> - 2025-08-26 (Hobbs: 100.0 - 101.5, Flight Time: 1.5)</li>
          <li><strong>N67890</strong> - 2025-08-25 (Hobbs: 50.0 - 51.2, Flight Time: 1.2)</li>
        </ul>
      </div>

      {/* Log Ground Time */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
        <h3 className="text-md font-semibold mb-4">Log Ground Time</h3>
        <form onSubmit={handleLogGroundTime} className="space-y-3">
          <div>
            <label htmlFor="groundTime" className="block text-sm font-medium text-gray-700">Ground Time (Hours)</label>
            <input type="number" step="0.1" id="groundTime" value={groundTime} onChange={(e) => setGroundTime(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">Log Ground Time</button>
        </form>
      </div>
    </div>
  );
}