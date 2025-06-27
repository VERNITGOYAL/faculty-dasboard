import React, { useState } from 'react';
import {
  Plus,
  BookOpen,
  TreeDeciduous,
  Laptop2,
  Activity,
  Users,
  Clock,
  Handshake,
  Eye
} from 'lucide-react';

const tabs = ['My Projects', 'Activity Log', 'Partnerships', 'Impact Reports'];

export default function SocialImpactPage() {
  const [activeTab, setActiveTab] = useState('My Projects');

  return (
    <div className="p-6 space-y-6 bg-white text-black min-h-screen">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl  text-blue-900 font-bold">Social Impact Activities</h1>
        <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          <Plus size={16} />
          <span>New Project</span>
        </button>
      </div>

      {/* Header Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { label: 'Total Beneficiaries', value: '725', icon: Users },
          { label: 'Active Projects', value: '2', icon: BookOpen },
          { label: 'Completed Projects', value: '8', icon: Activity },
          { label: 'Volunteers Engaged', value: '45', icon: Users },
          { label: 'Hours Contributed', value: '240', icon: Clock },
          { label: 'Partnerships', value: '6', icon: Handshake }
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow border border-gray-200 flex flex-col items-center justify-center"
          >
            <div className="mb-2 text-blue-600">{React.createElement(stat.icon, { size: 24 })}</div>
            <div className="text-xl font-semibold">{stat.value}</div>
            <div className="text-sm text-gray-500 text-center">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-60 border-b border-gray-300">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 font-medium text-sm border-b-2 transition-all duration-150 mb-2 ${
              activeTab === tab
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'My Projects' && (
          <div className="space-y-4">
            {[
              {
                title: 'Digital Literacy for Rural Communities',
                tag: 'Community Outreach',
                status: 'Active',
                location: 'Nearby Villages',
                date: '2024-01-15',
                description: 'Teaching basic computer skills to rural population',
                impact: '150+ villagers trained in digital literacy',
                nextActivity: '2024-07-05',
                beneficiaries: '150+ people'
              },
              {
                title: 'Environment Conservation Drive',
                tag: 'Environmental',
                status: 'Completed',
                location: 'Campus & City',
                date: '2024-03-20',
                description: 'Tree plantation and waste management awareness',
                impact: '500+ trees planted, 1000+ people aware',
                nextActivity: '-',
                beneficiaries: '500+ people'
              },
              {
                title: 'Skill Development for Underprivileged Youth',
                tag: 'Education',
                status: 'Planning',
                location: 'Local NGO Center',
                date: '2024-08-01',
                description: 'Technical skills training for unemployed youth',
                impact: 'Expected 75+ youth to be skilled',
                nextActivity: '2024-07-15',
                beneficiaries: '75+ people'
              }
            ].map((project, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-xl shadow-2xl">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">{project.title}</h2>
                    <p className="text-sm text-black flex items-center space-x-2">
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">{project.tag}</span>
                      <span>{project.location}</span>
                    </p>
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    project.status === 'Active' ? 'bg-green-100 text-green-600' :
                    project.status === 'Completed' ? 'bg-blue-100 text-blue-600' :
                    'bg-yellow-100 text-yellow-600'
                  }`}>{project.status}</span>
                </div>
                <div className="text-sm text-gray-700 dark:text-black mt-2">
                  <p><strong>Start Date:</strong> {project.date}</p>
                  <p><strong>Description:</strong> {project.description}</p>
                  <p><strong>Impact Achieved:</strong> {project.impact}</p>
                  <p><strong>Beneficiaries:</strong> {project.beneficiaries}</p>
                  <p><strong>Next Activity:</strong> {project.nextActivity}</p>
                </div>
                <div className="flex space-x-3 mt-4">
                  <button className="bg-gray-100 dark:bg-gray-300 px-3 py-1 rounded">View Details</button>
                  <button className="bg-gray-100 dark:bg-gray-300 px-3 py-1 rounded">Upload Photos</button>
                  {project.status === 'Active' && <button className="bg-black text-white px-3 py-1 rounded">+ Log Activity</button>}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Activity Log' && (
          <div className="bg-white dark:bg-bg-gray-50 p-4 rounded-xl shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Activity Log</h2>
              <button className="bg-black text-white px-3 py-1 rounded">+ Log New Activity</button>
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Date</th>
                  <th>Project</th>
                  <th>Activity</th>
                  <th>Participants</th>
                  <th>Photos</th>
                  <th>Feedback</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">2024-06-25</td>
                  <td className="font-medium text-blue-600">Digital Literacy for Rural Communities</td>
                  <td>Conducted basic computer training session</td>
                  <td>25</td>
                  <td>8 photos</td>
                  <td>Excellent response from participants</td>
                  <td><button className="p-1">👁️</button></td>
                </tr>
                <tr>
                  <td className="py-2">2024-06-20</td>
                  <td className="font-medium text-blue-600">Environment Conservation Drive</td>
                  <td>Tree plantation drive in campus</td>
                  <td>50</td>
                  <td>15 photos</td>
                  <td>Great participation from students and faculty</td>
                  <td><button className="p-1">👁️</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'Partnerships' && (
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Smile Foundation', type: 'NGO Partner', desc: 'Education and skill development programs', status: 'Active' },
              { name: 'Green Earth Initiative', type: 'Environmental NGO', desc: 'Tree plantation and conservation projects', status: 'Active' },
              { name: 'District Collector Office', type: 'Government Body', desc: 'Digital literacy and governance awareness', status: 'MoU Signed' }
            ].map((partner, i) => (
              <div key={i} className="bg-white dark:bg-gray-50 p-4 rounded-xl shadow-2xl">
                <h3 className="text-lg font-semibold">{partner.name}</h3>
                <p className="text-sm text-gray-500 mb-1">{partner.type}</p>
                <p className="text-sm mb-2">{partner.desc}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  partner.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                }`}>{partner.status}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Impact Reports' && (
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-50 p-4 rounded-xl shadow-2xl">
              <h3 className="text-lg font-semibold mb-2">Annual Impact Summary 2024</h3>
              <ul className="text-sm space-y-1">
                <li>Projects Completed: 8</li>
                <li>Total Beneficiaries: 725+</li>
                <li>Volunteer Hours: 240</li>
                <li>Fund Raised: ₹2,50,000</li>
              </ul>
              <button className="mt-3 bg-gray-100 dark:bg-gray-50 px-3 py-1 rounded flex items-center space-x-2">
                🔽 <span>Download PDF</span>
              </button>
            </div>
            <div className="bg-white dark:bg-gray-50 p-4 rounded-xl shadow-2xl">
              <h3 className="text-lg font-semibold mb-2">Media & Documentation</h3>
              <ul className="text-sm space-y-1">
                <li>Photo Gallery: 150+ photos</li>
                <li>Video Testimonials: 12 videos</li>
                <li>Press Releases: 5 articles</li>
                <li>Certificates: 3 awards</li>
              </ul>
              <button className="mt-3 bg-gray-100 dark:bg-gray-50 px-3 py-1 rounded flex items-center space-x-2">
                👁 <span>View Gallery</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
