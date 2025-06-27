import React, { useState } from 'react';
import { Home, History, Wrench, Camera, Zap as LightningBolt } from 'lucide-react';

const tabs = ['Residence Details', 'Electricity Recharge', 'Maintenance', 'History'];

export default function ResidenceTab() {
  const [activeTab, setActiveTab] = useState('Residence Details');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Residence Details':
  return (
    <div className="space-y-8 pt-6">
      {/* Residence Information */}
      <div className="bg-white rounded shadow p-8 border space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2 text-black">
          <Home size={20} /> Residence Information
        </h2>
        <p className="text-gray-500">Your current residence details and allocation</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Block & Location', value: 'Faculty Quarters - Block A' },
            { label: 'Room/Flat Number', value: 'A-205' },
            { label: 'Type', value: '2BHK' },
            { label: 'Occupancy', value: 'Family' },
            { label: 'Allotted Date', value: '2020-08-01' },
            {
              label: 'Status',
              value: (
                <span className="text-green-800 text-sm bg-green-100 px-2 py-1 rounded-full">
                  Active
                </span>
              ),
            },
          ].map((item, i) => (
            <div key={i} className="border rounded p-3">
              <div className="text-sm font-semibold text-black">{item.label}</div>
              <div className="text-black">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded shadow border">
        <h3 className="text-xl font-semibold text-black mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: 'Recharge Electricity', icon: <LightningBolt size={18} /> },
            { label: 'Report Issue', icon: <Wrench size={18} /> },
            { label: 'View History', icon: <History size={18} /> },
            { label: 'Update Details', icon: <Home size={18} /> },
          ].map((action, i) => (
            <button
              key={i}
              className="border rounded p-4 text-center shadow hover:bg-gray-50 transition flex flex-col items-center gap-2"
            >
              <div className="text-black">{action.icon}</div>
              <div className="text-black font-medium">{action.label}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

      case 'Electricity Recharge':
        return (
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            {/* Left: Status */}
            <div className="bg-white p-6 rounded shadow border space-y-4">
              <h2 className="text-xl font-semibold text-black flex items-center gap-2">
                <LightningBolt size={20} /> Current Electricity Status
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-100 text-center rounded p-4">
                  <div className="text-xl font-bold text-blue-700">₹1250.5</div>
                  <div className="text-sm text-gray-600">Current Balance</div>
                </div>
                <div className="bg-green-50 text-center rounded p-4">
                  <div className="text-xl font-bold text-green-600">125</div>
                  <div className="text-sm text-gray-600">Units Remaining</div>
                </div>
              </div>
              <div className="text-sm text-black">Monthly Usage Progress</div>
              <div className="h-2 rounded bg-gray-200">
                <div className="h-2 bg-black w-[85%] rounded"></div>
              </div>
              <div className="text-sm text-gray-500">Last Recharge: 2024-06-20</div>
            </div>

            {/* Right: Recharge Form */}
            <div className="bg-white p-6 rounded shadow border space-y-4">
              <h2 className="text-xl font-semibold text-black">Recharge Electricity</h2>
              <input
                className="w-full border rounded px-3 py-2 text-black"
                placeholder="Enter amount"
              />
              <div className="flex gap-4">
                {[1000, 2000, 3000].map((amt) => (
                  <button
                    key={amt}
                    className="border px-4 py-2 rounded text-black hover:bg-gray-100"
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
              <select className="w-full border rounded px-3 py-2 text-black">
                <option>UPI</option>
                <option>Net Banking</option>
              </select>
              <button className="w-full bg-black text-white py-2 rounded">
                Proceed to Payment
              </button>
            </div>

            {/* Full Width: Recharge History */}
            <div className="md:col-span-2 bg-white p-6 rounded shadow border space-y-3 mt-4">
              <h3 className="text-xl font-semibold text-black">Recent Recharge History</h3>
              {[
                { amount: '₹2000', date: '2024-06-20', mode: 'Online', units: 200 },
                { amount: '₹1500', date: '2024-05-15', mode: 'UPI', units: 150 },
                { amount: '₹2500', date: '2024-04-10', mode: 'Net Banking', units: 250 },
              ].map((rec, i) => (
                <div key={i} className="p-2 border-b flex justify-between items-center">
                  <div>
                    <div className="font-medium text-black">{rec.amount}</div>
                    <div className="text-sm text-gray-500">{rec.date} • {rec.mode}</div>
                  </div>
                  <div className="text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full">
                    Completed • {rec.units} units
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Maintenance':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow border">
              <h2 className="text-xl font-semibold text-black">+ Log New Complaint</h2>
              <select className="input mt-4">
                <option>Select type</option>
                <option>Electrical</option>
                <option>Plumbing</option>
              </select>
              <textarea className="input mt-2" placeholder="Describe the issue in detail" />
              <div className="border rounded px-3 py-2 mt-2 text-gray-500 flex items-center gap-2">
                <Camera size={16} /> Upload Photo
              </div>
              <select className="input mt-2">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
              <button className="bg-black text-white w-full mt-4 py-2 rounded">
                Submit Complaint
              </button>
            </div>

            <div className="bg-white p-4 rounded shadow border">
              <h2 className="text-xl font-semibold text-black mb-4">Complaint Status Summary</h2>
              <div className="flex gap-4">
                {[
                  { label: 'Open', value: 2, color: 'bg-yellow-100 text-yellow-700' },
                  { label: 'In Process', value: 1, color: 'bg-blue-100 text-blue-700' },
                  { label: 'Resolved', value: 5, color: 'bg-green-100 text-green-700' },
                ].map((s, i) => (
                  <div key={i} className={`rounded p-3 w-full text-center ${s.color}`}>
                    <div className="text-xl font-bold">{s.value}</div>
                    <div className="text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
              <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
                <li>Include photos for faster resolution</li>
                <li>Emergency issues: Call ext. 2345</li>
                <li>Track status online 24/7</li>
              </ul>
            </div>

            <div className="md:col-span-2 bg-white p-4 rounded shadow border">
              <h3 className="text-xl font-semibold text-black mb-4">Your Maintenance Requests</h3>
              <div className="border p-4 rounded bg-white flex justify-between">
                <div>
                  <div className="font-medium text-black">Electrical Issue</div>
                  <div className="text-sm text-gray-600">AC not working in bedroom</div>
                  <div className="text-sm text-gray-500">Submitted: 2024-06-22</div>
                </div>
                <div className="text-sm text-gray-600">
                  Technician: <span className="text-blue-600">Ravi Kumar</span><br />
                  Expected: 2024-06-25
                  <div className="mt-1 flex gap-2">
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">In Process</span>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">High</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'History':
        return (
          <div className="bg-white p-4 rounded shadow border">
            <h2 className="text-xl font-semibold text-black mb-4 flex items-center gap-2">
              <History size={20} /> Full Residence History
            </h2>
            <p className="text-gray-500">History tab under construction or yet to be implemented.</p>
          </div>
        );

      default:
        return null;
    }
  };

return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold text-blue-900">Residential Status & Electricity</h1>
      <div className="flex space-x-4 bg-gray-100 rounded p-1">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? 'bg-white text-black font-semibold shadow' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
}
