import React from "react";

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        
        {/* Top Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Status
            </label>
            <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select status</option>
              <option>Open</option>
              <option>Closed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Select Company
            </label>
            <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select company</option>
              <option>Company A</option>
              <option>Company B</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Status Type
            </label>
            <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        {/* Workflow Steps */}
        <div className="space-y-6">
          {[
            ["Close Duty", "Generate Invoice"],
            ["Enter Amount", "Send Statement"],
            ["Collect Cash", "Balance To Get"],
          ].map((row, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
            >
              <div className="w-1/3 text-center font-medium text-gray-700">
                {row[0]}
              </div>

              <div className="w-1/3 flex justify-center">
                <span className="text-gray-400 text-xl">→</span>
              </div>

              <div className="w-1/3 text-center font-semibold text-blue-600">
                {row[1]}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
