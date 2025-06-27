import React, { useState } from 'react';
import { Lightbulb, Users, IndianRupee, FilePlus, BadgeCheck, ClipboardList, LogOut, Forward } from 'lucide-react';

const tabs = ['Dashboard', 'Submit Proposal', 'Track Startups', 'Daily Log', 'Collaboration'];

export default function StartupDashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const statCards = [
    { label: 'Active Startups', value: 3, icon: <Lightbulb className="text-blue-600" /> },
    { label: 'Incubated', value: 2, icon: <BadgeCheck className="text-green-600" /> },
    { label: 'Total Funding', value: '₹8.5L', icon: <IndianRupee className="text-purple-600" /> },
    { label: 'Team Members', value: 7, icon: <Users className="text-orange-600" /> },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <div className="space-y-6 bg-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {statCards.map((card, index) => (
                <div key={index} className="p-4 rounded-lg  border  bg-gray-50">
                  <div className="text-center  ">
                    <div className="text-xl text-black font-bold">{card.value}</div>
                    <div className="text-sm text-black">{card.label}</div>
                  </div>
                  <div className="flex justify-center mt-2">{card.icon}</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-lg font-semibold b text-black mb-2">Active Startup Projects</h2>
              {[{
                title: 'EduTech AI Platform',
                domain: 'Education Technology',
                progress: 75,
                milestone: 'MVP Development',
                due: '2024-07-30',
                status: 'Incubated',
                team: 3
              }, {
                title: 'Smart Campus IoT',
                domain: 'Internet of Things',
                progress: 45,
                milestone: 'Prototype Testing',
                due: '2024-08-15',
                status: 'Approved',
                team: 2
              }].map((p, i) => (
                <div key={i} className="p-4 my-2 border rounded-lg text-black  bg-white shadow">
                  <div className="flex bg-white justify-between">
                    <div>
                      <div className="font-semibold">{p.title}</div>
                      <div className="text-sm text-gray-500">{p.domain}</div>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-black h-2 rounded-full" style={{ width: `${p.progress}%` }}></div>
                      </div>
                      <div className="text-xs mt-1">Progress: {p.progress}% | Next: <strong>{p.milestone}</strong></div>
                      <div className="text-xs text-gray-500">Team: {p.team} members</div>
                    </div>
                    <div className="flex flex-col  items-end">
                      <span className={`px-2 py-1 text-xs rounded-full ${p.status === 'Incubated' ? 'bg-purple-100 text-purple-600' : 'bg-green-100 text-green-600'}`}>{p.status}</span>
                      <span className="text-xs text-gray-400 mt-1">Due: {p.due}</span>
                      <div className="mt-auto space-x-2">
                        <button className="px-2 py-1 text-sm border rounded">View Details</button>
                        <button className="px-2 py-1 text-sm bg-black text-white rounded">Update Progress</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Submit Proposal':
        return (
          <form className="space-y-4 bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Submit New Startup Proposal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input placeholder="Startup Title" className="input" />
              <select className="input">
                <option>Education Technology</option>
                <option>Health</option>
                <option>IoT</option>
              </select>
              <input placeholder="Timeline (Months)" className="input" />
              <input placeholder="Estimated Budget" className="input" />
            </div>
            <textarea placeholder="Objective & Vision" className="input h-24" />
            <div className="space-y-2">
              <div>Team Members</div>
              {[...Array(3)].map((_, i) => <input key={i} placeholder={`Member ${i + 1}`} className="input" />)}
              <button type="button" className="text-blue-500 text-sm">+ Add More Members</button>
            </div>
            <textarea placeholder="Market Research & Feasibility" className="input h-20" />
            <textarea placeholder="Technical Approach" className="input h-20" />
            <textarea placeholder="Expected Outcomes & Impact" className="input h-20" />
            <div className="flex gap-4">
              {['Business Plan', 'Technical Design', 'Market Research'].map(name => (
                <button key={name} className="flex items-center gap-2 border px-4 py-2 rounded">
                  <FilePlus className="w-4 h-4" /> {name}
                </button>
              ))}
            </div>
            <button className="bg-black text-white px-6 py-2 rounded">Submit Proposal to Innovation Cell</button>
          </form>
        );

      case 'Track Startups':
        return (
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Startup Status Tracker</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[{
                status: 'Submitted', items: ['Smart Library System']
              }, {
                status: 'Approved', items: ['Smart Campus IoT']
              }, {
                status: 'Incubated', items: ['EduTech AI Platform']
              }, {
                status: 'Completed', items: ['GBU Connect App']
              }].map((col, i) => (
                <div key={i} className="border p-2 rounded">
                  <h3 className="font-medium mb-2">{col.status}</h3>
                  {col.items.map((item, j) => (
                    <div key={j} className="bg-gray-50 border rounded px-2 py-1 mb-2 shadow-sm">{item}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );

      case 'Daily Log':
        return (
          <div className="grid md:grid-cols-2 gap-4">
            <form className="space-y-4 bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold">Add Daily Activity Log</h2>
              <select className="input">
                <option>EduTech AI Platform</option>
                <option>Smart Campus IoT</option>
              </select>
              <textarea placeholder="Today's Activity" className="input h-20" />
              <textarea placeholder="Blockers/Challenges" className="input h-20" />
              <textarea placeholder="Next Steps" className="input h-20" />
              <input type="file" className="input" />
              <button className="bg-black text-white px-4 py-2 rounded">Save Daily Log</button>
            </form>

            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold mb-4">Recent Activity Logs</h2>
              {[{
                date: '2024-06-25',
                project: 'EduTech AI Platform',
                activity: 'Completed user interface mockups for mobile app',
                blocker: 'API integration pending from backend team',
                next: 'Schedule meeting with backend developers'
              }, {
                date: '2024-06-24',
                project: 'Smart Campus IoT',
                activity: 'Tested IoT sensors in lab environment',
                blocker: null,
                next: 'Order additional hardware components'
              }].map((log, i) => (
                <div key={i} className="mb-4 border-b pb-2">
                  <div className="text-sm text-gray-400">{log.date}</div>
                  <div className="text-sm font-medium">Activity: {log.activity}</div>
                  {log.blocker && <div className="text-sm text-red-500">Blocker: {log.blocker}</div>}
                  <div className="text-sm text-blue-500">Next Steps: {log.next}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Collaboration':
        return (
          <div className="space-y-6 bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">Collaboration Hub</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border p-4 rounded">
                <div className="font-semibold mb-2">Student Collaboration</div>
                <button className="border px-4 py-2 rounded">View Student Projects</button>
              </div>
              <div className="border p-4 rounded">
                <div className="font-semibold mb-2">Cross-Department</div>
                <button className="border px-4 py-2 rounded">Find Collaborators</button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Proposal Management</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border p-4 rounded">
                  <div className="mb-2">Forward to Innovation Cell</div>
                  <button className="bg-black text-white px-4 py-2 rounded">Forward</button>
                </div>
                <div className="border p-4 rounded">
                  <div className="mb-2">Submit to Dean's Office</div>
                  <button className="bg-gray-800 text-white px-4 py-2 rounded">Submit</button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-8 bg-white space-y-6 text-black">

      <div className="flex justify-between  items-center">
        <h1 className="text-2xl font-bold text-blue-900">Faculty Startup & Innovation</h1>
        <button className="bg-black text-white px-4 py-2 rounded">+ New Proposal</button>
      </div>

      <div className="flex space-x-4 gap-x-30 border-b">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 ${activeTab === tab ? 'border-b-2 border-black font-semibold' : 'text-gray-600'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div>
        {renderTabContent()}
      </div>
    </div>
  );
}

const inputBase = 'w-full border border-gray-300 px-3  py-2 rounded';
const style = document.createElement('style');
style.innerHTML = `.input { ${inputBase} }`;
document.head.appendChild(style);
