"use client";

import { useState } from "react";
import { DollarSign, Download, Clock, User, Wrench, FileText } from "lucide-react";

export default function AdminBilling() {
  const [selectedTab, setSelectedTab] = useState<'instructor' | 'student' | 'mechanic'>('instructor');

  // Sample data
  const instructorTime = [
    { name: "John Smith", groundTime: 25.5, flightTime: 45.2, rate: 65, totalEarnings: 4590.50, month: "January 2025" },
    { name: "Sarah Wilson", groundTime: 18.0, flightTime: 38.5, rate: 70, totalEarnings: 3955.00, month: "January 2025" },
    { name: "Mike Johnson", groundTime: 22.3, flightTime: 41.7, rate: 65, totalEarnings: 4160.00, month: "January 2025" }
  ];

  const studentTime = [
    { name: "Amy Chen", groundTime: 12.5, flightTime: 18.3, instructor: "John Smith", totalCost: 2845.50, month: "January 2025" },
    { name: "Tom Brown", groundTime: 8.0, flightTime: 15.5, instructor: "Sarah Wilson", totalCost: 2340.00, month: "January 2025" },
    { name: "Rob Green", groundTime: 15.2, flightTime: 22.8, instructor: "Mike Johnson", totalCost: 3520.60, month: "January 2025" },
    { name: "Lisa Davis", groundTime: 6.5, flightTime: 12.0, instructor: "John Smith", totalCost: 1855.00, month: "January 2025" }
  ];

  const mechanicTime = [
    { name: "Bob Wilson", regularHours: 160, overtimeHours: 12, rate: 45, totalEarnings: 7740.00, month: "January 2025" },
    { name: "Dave Martinez", regularHours: 152, overtimeHours: 8, rate: 42, totalEarnings: 6888.00, month: "January 2025" },
    { name: "Steve Thompson", regularHours: 168, overtimeHours: 15, rate: 48, totalEarnings: 9144.00, month: "January 2025" }
  ];

  const monthlyReports = [
    { month: "January 2025", totalRevenue: 45680.00, instructorCosts: 12705.50, mechanicCosts: 23772.00, netProfit: 9202.50 },
    { month: "December 2024", totalRevenue: 38920.00, instructorCosts: 11250.00, mechanicCosts: 21890.00, netProfit: 5780.00 },
    { month: "November 2024", totalRevenue: 42150.00, instructorCosts: 12980.00, mechanicCosts: 22450.00, netProfit: 6720.00 }
  ];

  const tabs = [
    { id: 'instructor', label: 'Instructor Time', icon: <User size={16} /> },
    { id: 'student', label: 'Student Time', icon: <User size={16} /> },
    { id: 'mechanic', label: 'Mechanic Time', icon: <Wrench size={16} /> }
  ];

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Billing & Time Tracking</h1>
        <div className="flex gap-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
            <Download size={16} />
            Export All Reports
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <FileText size={16} />
            Generate Invoices
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-2xl shadow">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="text-green-500" size={20} />
            <h3 className="text-lg font-semibold">Monthly Revenue</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">${monthlyReports[0].totalRevenue.toLocaleString()}</p>
          <p className="text-sm text-gray-600">January 2025</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <div className="flex items-center gap-3 mb-2">
            <User className="text-blue-500" size={20} />
            <h3 className="text-lg font-semibold">Instructor Costs</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600">${monthlyReports[0].instructorCosts.toLocaleString()}</p>
          <p className="text-sm text-gray-600">This month</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <div className="flex items-center gap-3 mb-2">
            <Wrench className="text-orange-500" size={20} />
            <h3 className="text-lg font-semibold">Mechanic Costs</h3>
          </div>
          <p className="text-3xl font-bold text-orange-600">${monthlyReports[0].mechanicCosts.toLocaleString()}</p>
          <p className="text-sm text-gray-600">This month</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="text-purple-500" size={20} />
            <h3 className="text-lg font-semibold">Net Profit</h3>
          </div>
          <p className="text-3xl font-bold text-purple-600">${monthlyReports[0].netProfit.toLocaleString()}</p>
          <p className="text-sm text-gray-600">This month</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Time Tracking Details */}
        <div className="col-span-2 bg-white p-6 rounded-2xl shadow">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as 'instructor' | 'student' | 'mechanic')}
                className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-colors ${
                  selectedTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Instructor Time */}
          {selectedTab === 'instructor' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Instructor Ground & Flight Time</h3>
                <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm hover:bg-blue-200">
                  Export Report
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Instructor</th>
                      <th className="text-left py-3 px-2">Ground Time</th>
                      <th className="text-left py-3 px-2">Flight Time</th>
                      <th className="text-left py-3 px-2">Rate/Hour</th>
                      <th className="text-left py-3 px-2">Total Earnings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {instructorTime.map((instructor, idx) => (
                      <tr key={idx} className="border-b">
                        <td className="py-3 px-2 font-medium">{instructor.name}</td>
                        <td className="py-3 px-2">{instructor.groundTime}h</td>
                        <td className="py-3 px-2">{instructor.flightTime}h</td>
                        <td className="py-3 px-2">${instructor.rate}</td>
                        <td className="py-3 px-2 font-semibold text-green-600">${instructor.totalEarnings.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Student Time */}
          {selectedTab === 'student' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Student Ground & Flight Time</h3>
                <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm hover:bg-blue-200">
                  Export Report
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Student</th>
                      <th className="text-left py-3 px-2">Ground Time</th>
                      <th className="text-left py-3 px-2">Flight Time</th>
                      <th className="text-left py-3 px-2">Instructor</th>
                      <th className="text-left py-3 px-2">Total Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentTime.map((student, idx) => (
                      <tr key={idx} className="border-b">
                        <td className="py-3 px-2 font-medium">{student.name}</td>
                        <td className="py-3 px-2">{student.groundTime}h</td>
                        <td className="py-3 px-2">{student.flightTime}h</td>
                        <td className="py-3 px-2">{student.instructor}</td>
                        <td className="py-3 px-2 font-semibold text-blue-600">${student.totalCost.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Mechanic Time */}
          {selectedTab === 'mechanic' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Mechanic Labor Time</h3>
                <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm hover:bg-blue-200">
                  Export Report
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Mechanic</th>
                      <th className="text-left py-3 px-2">Regular Hours</th>
                      <th className="text-left py-3 px-2">Overtime Hours</th>
                      <th className="text-left py-3 px-2">Rate/Hour</th>
                      <th className="text-left py-3 px-2">Total Earnings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mechanicTime.map((mechanic, idx) => (
                      <tr key={idx} className="border-b">
                        <td className="py-3 px-2 font-medium">{mechanic.name}</td>
                        <td className="py-3 px-2">{mechanic.regularHours}h</td>
                        <td className="py-3 px-2">{mechanic.overtimeHours}h</td>
                        <td className="py-3 px-2">${mechanic.rate}</td>
                        <td className="py-3 px-2 font-semibold text-orange-600">${mechanic.totalEarnings.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Monthly Reports */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Clock size={18} />
            Monthly Reports
          </h3>
          <div className="space-y-4">
            {monthlyReports.map((report, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                <div className="font-semibold text-gray-800 mb-2">{report.month}</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Revenue:</span>
                    <span className="text-green-600 font-medium">${report.totalRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Instructor Costs:</span>
                    <span className="text-red-600">${report.instructorCosts.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mechanic Costs:</span>
                    <span className="text-red-600">${report.mechanicCosts.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t pt-1 font-semibold">
                    <span>Net Profit:</span>
                    <span className="text-purple-600">${report.netProfit.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2">
            <button className="w-full bg-green-100 text-green-700 p-3 rounded-lg hover:bg-green-200 text-sm">
              Generate Monthly Invoice
            </button>
            <button className="w-full bg-blue-100 text-blue-700 p-3 rounded-lg hover:bg-blue-200 text-sm">
              Export Tax Report
            </button>
            <button className="w-full bg-purple-100 text-purple-700 p-3 rounded-lg hover:bg-purple-200 text-sm">
              Payroll Summary
            </button>
          </div>
        </div>
      </div>
    </>
  );
}