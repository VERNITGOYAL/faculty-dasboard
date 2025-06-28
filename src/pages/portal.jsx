import React, { useState } from 'react';
import { BarChart3, FileText, ClipboardList, Plus, CheckCircle, AlertTriangle } from 'lucide-react';

const TABS = ['Analytics', 'Facility Issues', 'Create Ticket'];

export default function FIRSGrievancePortal() {
  const [activeTab, setActiveTab] = useState('Analytics');

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-blue-900">Grievance Portal (FIRS)</h1>
        <p className="text-sm text-gray-600">Facility & Issue Reporting System - Track and resolve campus issues efficiently</p>
      </header>

      <nav className="flex space-x-4 border rounded-md bg-white p-2">
        {TABS.map(tab => (
          <button
            key={tab}
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab ? 'bg-blue-100 text-blue-900 font-semibold' : 'text-gray-700'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <main className="mt-6 text-black">
        {activeTab === 'Analytics' && <AnalyticsTab />}
        {activeTab === 'Facility Issues' && <FacilityTab />}
        {activeTab === 'Create Ticket' && <CreateTicketTab />}
      </main>
    </div>
  );
}

function AnalyticsTab() {
  return (
    <div className="grid grid-cols-1 text-black lg:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-lg mb-4">Issue Categories Breakdown</h2>
        {[
          { label: 'Infrastructure', percent: 32, color: 'bg-blue-500' },
          { label: 'Internet & IT', percent: 28, color: 'bg-green-500' },
          { label: 'Transportation', percent: 18, color: 'bg-yellow-500' },
        ].map(item => (
          <div key={item.label} className="mb-3">
            <div className="flex justify-between text-black text-sm font-medium">
              <span>{item.label}</span>
              <span>{item.percent}%</span>
            </div>
            <div className="h-2 rounded text-black bg-gray-200">
              <div
                className={`${item.color} h-2 rounded`}
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-lg mb-4">Resolution Performance</h2>
        <div className="space-y-3">
          <div className="bg-green-50 p-3 rounded text-green-600 font-semibold text-center">2.3 days <div className="text-xs text-gray-600">Average Resolution Time</div></div>
          <div className="bg-blue-50 p-3 rounded text-blue-600 font-semibold text-center">94% <div className="text-xs text-gray-600">Resolution Rate</div></div>
          <div className="bg-yellow-50 p-3 rounded text-yellow-700 font-semibold text-center">4.6/5 <div className="text-xs text-gray-600">Satisfaction Score</div></div>
        </div>
      </div>
      <div className="col-span-full bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-lg mb-4">Monthly Trends</h2>
        <div className="grid grid-cols-4 gap-4 text-center text-sm">
          <div>
            <div className="font-bold text-xl">73</div>
            <div>This Month</div>
          </div>
          <div>
            <div className="font-bold text-xl">68</div>
            <div>Last Month</div>
          </div>
          <div>
            <div className="font-bold text-green-600 text-xl">+7%</div>
            <div>Growth</div>
          </div>
          <div>
            <div className="font-bold text-blue-600 text-xl">15</div>
            <div>Active Cases</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FacilityTab() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">Facility Maintenance Issues</h2>
        <button className="flex items-center gap-1 bg-black text-white px-4 py-1.5 rounded text-sm">
          <AlertTriangle className="w-4 h-4" /> Report New Issue
        </button>
      </div>
      {[{
        title: 'Water Cooler Maintenance', location: 'Cafeteria Block A', date: '2024-06-18', priority: 'LOW', status: 'RESOLVED'
      }, {
        title: 'Insufficient Lighting', location: 'Parking Lot B', date: '2024-06-21', priority: 'MEDIUM', status: 'PENDING'
      }].map((item, idx) => (
        <div key={idx} className="bg-white p-4 rounded shadow border">
          <div className="text-sm font-semibold">{item.title}</div>
          <div className="text-sm text-gray-500">{item.location}</div>
          <div className="text-xs text-gray-400">Reported: {item.date}</div>
          <div className="flex gap-2 mt-2 text-xs">
            <span className={`px-2 py-0.5 rounded-full ${item.priority === 'LOW' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>{item.priority}</span>
            <span className={`px-2 py-0.5 rounded-full ${item.status === 'RESOLVED' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>{item.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function CreateTicketTab() {
  return (
    <div className="bg-white p-6 rounded shadow space-y-4">
      <h2 className="font-semibold text-lg">Create New Grievance/Issue Ticket</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select className="border rounded p-2 text-sm">
          <option>Faculty (on behalf of student)</option>
          <option>Student</option>
        </select>
        <select className="border rounded p-2 text-sm">
          <option>Infrastructure</option>
          <option>Internet & IT</option>
          <option>Transportation</option>
        </select>
        <select className="border rounded p-2 text-sm">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <input type="text" placeholder="Specific location of the issue" className="border rounded p-2 text-sm" />
      </div>
      <input type="text" placeholder="Brief title describing the issue" className="w-full border rounded p-2 text-sm" />
      <textarea placeholder="Provide detailed description of the issue..." className="w-full border rounded p-2 text-sm h-24" />
      <div className="flex items-center gap-2">
        <input type="file" className="text-sm" />
        <span className="text-sm">Upload Files</span>
      </div>
      <button className="w-full bg-black text-white py-2 rounded text-sm">Submit Ticket</button>
    </div>
  );
}
